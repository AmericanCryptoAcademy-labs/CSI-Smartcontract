"use client"
import React, { useEffect, useState } from 'react'
import { Box, VStack, Heading, Image, Text, HStack, Button } from "@chakra-ui/react"
import Link from 'next/link';
// import { AiOutlineArrowUp } from 'react-icons/ai';
import { ethers } from 'ethers';
import images from "../../img"

const NFTTile = ({ tokenURI, proposalid ,validdate }) => {

  const [name, setname] = useState();
  const [image, setimage] = useState('');
  const [listedNFT , setlisted] = useState(false)

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        console.log(`Token URI ${tokenURI}`)
        const response = await fetch(`https://ipfs.io/ipfs/${tokenURI}/metadata.json`);
        console.log(response)
        const metadata = await response.json();
        // console.log(metadata.text())
        setname(metadata.name);
        let tokenImagex = metadata.image;
        setimage(tokenImagex)


      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    }
    fetchMetadata();
  }, [tokenURI]);


   function getHumanReadableDateFromContract(timestamp) {
    // 2. Convert the Unix timestamp to a JavaScript Date object
    const dateObject = new Date(Number(timestamp) * 1000);

    // 3. Convert the Date object to a human-readable string
    return dateObject.toISOString().slice(0,19).replace("T", " ");
}

  return (
    <div className="m-3" key={tokenURI} style={{padding:'0 0.6rem'}} >
    {tokenURI !== "" ? (
      <Link href={`/profile/${proposalid.toString()}`} maxw="30" key={proposalid.toString()} p={'1rem'} m={'1rem'} >
        <img
          src={`${image.replace('ipfs://', 'https://nftstorage.link/ipfs/')}`}
          className="w-11/12 mx-auto rounded-2xl"
          w={"100"}
          h={"80"}
          style={{ padding:"0" }}
          borderRadius={'5px'}
          objectFit={"contain"}
          alt={name}
        />
        <div style={{ padding:"0.8 rem" ,  fontSize:'1.2rem' , margin:"0.5rem 0 0 1rem" , color:"#333"}} > <span style={{fontSize:'1.6rem' , marginRight:'0.4rem'}} >{`#${proposalid.toString()}`}</span>  {name}</div>
        <div style={{ padding:"0.8 rem" ,  fontSize:'1.2rem' , margin:"0.5rem 0 1rem  1rem" , color:"#333"}} >{getHumanReadableDateFromContract(validdate)} </div>
      </Link>
     ) : 
      <div></div>
  }
  </div>

  )
}

export default NFTTile