"use client";

import React , {useState , useRef, useEffect} from 'react'
import {  Input ,Alert , Box, Center ,  Text,  AlertIcon , Heading, VStack , HStack ,Spinner } from '@chakra-ui/react';
import { ethers } from 'ethers'
import Link from 'next/link';
import { address , abi } from '@/constant';

// Internal Imports 
import Style from "./SingleCert.module.css";

import Button from '@/components/Button/Button';
import Category from '@/components/Category/Category';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import NFTDescription from '@/StudentCertSinglePage/NFTDescription/NFTDescription';
import NFTDetailsImage from '@/StudentCertSinglePage/NFTDetailsImage/NFTDetailsImage';
import NFTTabs from '@/StudentCertSinglePage/NFTTabs/NFTTabs';

const NFTDetails = ({params}) => {

    const [nftdata, setnftdata] = useState('');
    const [tokenuri, settokenuri] = useState('');
    const [owner, setowner] = useState('');
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [image, setimage] = useState('');
    const [loading, setloading] = useState(false);
    const [certType , setcerttype] = useState('')
    const [showMetamaskAlert, setShowMetamaskAlert] = useState(false);
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    
   
    const [isClientMounted, setIsClientMounted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [issuedTo , setissuedTo] = useState("");
    const [ institute , setinstitute] = useState("");
    const [issuer , setissuer] = useState('');
    const [validdate , setvaliddate] = useState("")

    const getNftInfo  = async() => {

        try{

            setloading(true);
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const aift = new ethers.Contract(address, abi, signer)
        
            const tx = await aift.getCertificateDetails(params.id)
            setnftdata(tx)
          
            console.log( "nft data" , tx);
            setissuer(tx.issuer);
            setloading(false);
            settokenuri(tx.tokenURI);
            setissuedTo(tx.candidate);
            setvaliddate(tx.validTill.toString());
            setcerttype(tx.status.toString());
            console.log(certType)
        }catch(error){
            console.log('getNftInfo Function Error -> ' , error)
        }

      }
    
      const fetchMetadata = async (tokenURI) => {
        try {
          setloading(true)
          const response = await fetch(`https://ipfs.io/ipfs/${tokenURI}/metadata.json`);
          const metadata = await response.json();
          const metadataName = metadata.name;
          setname(metadataName)
          setdescription(metadata.description)
          setimage(metadata.image);
          setissuedTo(metadata.issuedTo);
          setloading(false)
          let tokenImagex = metadata.image;
          setimage(tokenImagex);
          setinstitute(metadata.institute)
    
        } catch (error) {
          console.error('Error fetching metadata:', error);
        }
      };

      useEffect(() => {
        setIsClientMounted(true);
        getNftInfo();
      }, [params.id]);
    
      useEffect(() => {   
        if (tokenuri) {
          fetchMetadata(tokenuri);
        }
      }, [tokenuri]);

  return (
    <>
    <Navbar/>
    <div className={Style.NFTDetails}>
      <div className={Style.NFTDetails_box} >
        <NFTDetailsImage  tokenURI={tokenuri} tokenId={params.id} image={image} remark={description} />
        <NFTDescription certId={params.id} name={name} description={description}  issuedTo={issuedTo} institute={institute} 
        issuer={issuer} validdate={validdate}  certType={certType} />
      </div>  
    </div>

    <Footer/>
    </>
  )
}

export default NFTDetails