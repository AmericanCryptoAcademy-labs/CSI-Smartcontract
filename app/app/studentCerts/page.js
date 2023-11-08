"use client";

import React , {useState , useContext , useEffect , useRef} from 'react'
import ConnectButtonWrapper from '@/buttonWrapper';
import { Button , Box, Center , Heading, VStack , HStack ,Spinner, ChakraProvider } from '@chakra-ui/react';
import Style from "./studentcerts.module.css"
import { ethers } from 'ethers'
import Link from 'next/link';
import { address , abi } from '@/constant';
import Navbar from '@/components/Navbar/Navbar';

import NFTTile from '@/components/StudentNFTTile/StudentNFTTile';

export const StudentCerts = () => {
  
    const [nftArray , setnftArray] = useState();
    const [loading , setloading] = useState(false)

    
    const fetchMyNFTs = async() => {

        try{

            setloading(true)
            const accounts = await window.ethereum.request({
              method: 'eth_accounts'
            });
        
          const account = accounts[0]
        
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const aift = new ethers.Contract(address, abi, signer)
        
            const tx = await aift.fetchMYNFTs(account)
            const proposalsArray = Object.values(tx); 
            setnftArray(proposalsArray);
            console.log('Reading tx--> ')
            console.log(tx)
            console.log( "NFT ARRAY -> " , nftArray)
            setloading(false);
            console.log(tokenURI);
        }catch(error){
            console.log('FetchMyNFTs Function Error -> ' , error)
        }

      }
    
      useEffect(() => {
        fetchMyNFTs()
      },[])


  return (
   <>
  <Navbar/>
  
        <ChakraProvider>
            <div className='h-full' style={{minHeight:'100vh' ,  background: "#ecf0f3"   , color:"#333"}} >
        <Center justifyContent={'center'}>
        <VStack as='header' spacing='6' mt='8' wrap={'wrap'} justifyContent={'space-evenly'} p={'2'}>
        <Heading
                as='h1'
                fontWeight='600'
                fontSize='2.5rem'
                letterSpacing='-0.5px'
                color='#4c5773'
                className={Style.mainheading}
              >
                My Certificates
              </Heading>

            <div className={Style.thinwhiteborder} style={{marginBottom:'2rem'}} >
    </div>
   
          </VStack>
        </Center>
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
        {loading ? 
                <Center h={'30vh'} justifyContent={'center'} >
                    <Spinner alignSelf={'center'} thickness='5px'speed='0.5s'emptyColor='gray.200'color='#333'size='xl' />
                </Center>
                 :
              <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                {nftArray !== undefined ? 
                <div className="grid sm:grid-cols-2 w-fit md:grid-cols-3 lg:grid-cols-4 mx-auto pb-10 gap-6">
                {nftArray.map((items ) => {
                  return (
                    <>   
                      {items.tokenURI && (
                        <div style={{border:'4px solid #333'}} className="col-span-1 w-72 rounded-2xl border-2 pt-2  hover:shadow-lg hover:shadow-black transition ease-in-out delay-150 shadow-black"  >
                          <NFTTile tokenURI={items.tokenURI} proposalid={items.id.toString() } validdate={items.validTill.toString()} />
                        </div>
                      )}
                      <div style={{ color: '#fff' }}>
                      </div>
                    </>
                  );
                })}
              </div>
                :
                <Center  h={'50vh'}>
                <div className='message text-black'>No AIFT... Pretty Strange Create One <Link href='/mintNFT'></Link> </div>
                </Center>
               
            }
              </HStack>
}

        </HStack>
    </div>
        </ChakraProvider>
   
    
   </>
  )
}


export default StudentCerts;