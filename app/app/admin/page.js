"use client";
import React, { useState, useRef, useEffect } from 'react';
import { address , abi } from "../../constant"
import { ethers } from 'ethers';
import Style from "./admin.module.css";
import {
  FormControl,
  FormLabel,
  Stack,
  VStack,
  Heading,
  Card,
  CardBody,
  Button,
  Input,
  Box,
  Center,
  Text,
  HStack
} from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import Navbar from '@/components/Navbar/Navbar';
import { Select } from '@chakra-ui/react';
import images from "../../img";
import Footer from '@/components/Footer/Footer';


const Admin = () => {


    const ADMIN  = "0xb4B53BD11265A255dFF303B8F0c6f5b4FEf91426";

    const [walletAddress , setwalletAddress] = useState("");
    const [isAdmin , setadmin] = useState(false);
    const [teachersArray , setteachers] = useState([]);
    const [teacherAddress , setTeacherAddress] =  useState("");
    const [showMetamaskAlert, setShowMetamaskAlert] = useState(false);
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');


    const getProvider = () => {
        if (window.ethereum) {
          return window.ethereum;
        } else {
          console.log("Please install MetaMask!");
          return null;
        }
      };

    const requestAccount = async () => {
        const provider = getProvider();
        if (provider) {
          try {
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            setwalletAddress(accounts[0]);
            return accounts[0]; // The first account is usually the user's primary account.
          } catch (error) {
            console.error("Error requesting account access:", error);
          }
        }
    };

    const checkAdmin = async() => {
        await requestAccount();
        const addr = await requestAccount()
        if(addr === ADMIN){
            setadmin(true)
        }else{
            setadmin(false);
        }

    }

    async function fetchAllTeachers() {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(address, abi, provider);
          const teachers = await contract.fetchAllTeachers();
          console.log("teachers" , teachers);
          setteachers(teachers)
          return teachers;
        } catch (error) {
          console.error("Error fetching teachers:", error);
          return [];
        }
      }
      

      useEffect(() => {
        checkAdmin()
        fetchAllTeachers()
      },[])
    

      const addteacher = async(e) =>{

        try {

          if(teacherAddress === ""){
            alert("Please Input Teacher Address");
          }


          setTimeout(() => {
            setStatus('     Transation Pending')
            setType('success');
            setShowMetamaskAlert(true);
            
          }, 2000);

          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const aift = new ethers.Contract(address, abi, signer);
          const tx = await aift.addTeacher(teacherAddress);
          console.log(tx)
    
          const txhash = tx.hash 
    
          signer.provider.on(txhash, (receipt) => {
              console.log('Transaction confirmed:', receipt);
              setStatus('     Teacher Added  Succesfully')
              setType('success');
              setShowMetamaskAlert(true);
            });
        } catch (error) {
          console.log(error)
          setStatus(' Transaction Rejected... Please Try Again')
          setType('error')
          setShowMetamaskAlert(true)
        } 
    
    
      }


      
      const removeteacher = async(e) =>{

        try {

          if(teacherAddress === ""){
            alert("Please Input Teacher Address");
          }

          setTimeout(() => {
            setStatus('     Transation Pending')
            setType('success');
            setShowMetamaskAlert(true);
            
          }, 2000);

          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const aift = new ethers.Contract(address, abi, signer);
          const tx = await aift.removeTeacher(teacherAddress);
          console.log(tx)
    
          const txhash = tx.hash 
    
          signer.provider.on(txhash, (receipt) => {
              console.log('Transaction confirmed:', receipt);
              setStatus('     Teacher Removed Succesfully')
              setType('success');
              setShowMetamaskAlert(true);
            });
        } catch (error) {
          console.log(error)
          setStatus(' Transaction Rejected... Please Try Again')
          setType('error')
          setShowMetamaskAlert(true)
        } 
    
    
      }

  return (
    <>
    <Navbar/>

   {showMetamaskAlert && <Alert style={{height:'3rem' ,width:'25rem' , margin:'0 auto' ,
    paddingLeft:'4rem' , textAlign:'center' , color:"green" , fontSize:'1.2rem'}}
     variant={'solid'} status={type} gap={"1rem"} className='w-10/12'><AlertIcon 
     style={{height:'1rem', width:'1rem'}} />{status}</Alert>}

    
      <div className={Style.ADMIN} >



            <div  className={Style.ADMIN_box} >
            {/* add or remove teacher form */}
             <VStack as='header' spacing='6' mt='8' >
              <VStack style={{gap:'2.5rem'}} >
              <Heading
                as='h1'
                fontWeight='600'
                fontSize='2.5rem'
                letterSpacing='-0.5px'
                color='#4c5773'
                className={Style.mainheading}
              >
                Manage Teachers
              </Heading>

              <HStack>

                <VStack style={{display:"flex", gap:'1rem'}} >
                <FormControl style={{padding:'1rem 2rem'}}>
                      <FormLabel size='2xl' style={{fontWeight:'600'}} color={'#4c5773'}>Address Of Teacher to Add</FormLabel>
                      <Input
                        type='text'
                        bg='white'
                        style={{padding:'0.4rem 0.8rem', margin:".7rem 0 0 0 "}}
                        onChange={(event) => setTeacherAddress(event.target.value)}
                        placeholder='0xbuq827280.....'
                        borderColor='#4c5773'
                        size='sm'
                        required
                        borderRadius='6px'
                      />
                    </FormControl>

                    
                    <Button
                      bg='#4c5773'
                      color='#fff'
                      style={{padding:'0.5rem 5rem', borderRadius:'0.4rem' , margin:'0 0 1rem 0 '}}
                      size='md'
                      _active={{ bg: '#fff' }}
                      onClick={(e) => addteacher(e)}
                    >
                      Add Teacher
                    </Button>
                    
                </VStack>
                <VStack style={{display:"flex", gap:'1rem'}} >
                <FormControl style={{padding:'1rem 0.5rem'}}>
                      <FormLabel size='2xl' style={{fontWeight:'600'}} color={'#4c5773'}>Address Of Teacher to remove</FormLabel>
                      <Input
                        type='text'
                        bg='white'
                        style={{padding:'0.4rem 0.8rem', margin:".7rem 0 0 0 "}}
                        onChange={(event) => setTeacherAddress(event.target.value)}
                        placeholder='0xbuq827280.....'
                        borderColor='#4c5773'
                        size='sm'
                        required
                        borderRadius='6px'
                      />
                    </FormControl>

                    
                    <Button
                      bg='#4c5773'
                      color='#fff'
                      style={{padding:'0.5rem 5rem', borderRadius:'0.4rem' , margin:'0 0 1rem 0 '}}
                      size='md'
                      _active={{ bg: '#fff' }}
                      onClick={(e) => removeteacher(e)}
                    >
                      Remove Teacher
                    </Button>
                    
                </VStack>
              </HStack>
              </VStack>
             </VStack>
            

            {/* Displaying Teachers List */}
            <VStack spacing="1" style={{gap:'2rem'}} className={Style.ADMIN_box_box} >

            <Heading
                as='h1'
                fontWeight='600'
                fontSize='2rem'
                letterSpacing='-0.5px'
                color='#4c5773'
                className={Style.mainheading}
              >
                Current Teachers Lists
              </Heading>
              {
                teachersArray.map((el,i) => (
                  <div key={i+1} className={Style.ADMIN_box_Display_Teacher_Item} >
                    <p>{el}</p>

                  </div>
                ))
              }

            </VStack>
            </div>
          </div>
        
    <Footer/>
    </>
  )
}

export default Admin