"use client";
import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react';
import {
  ThirdwebProvider,
  metamaskWallet
} from "@thirdweb-dev/react";


// INTERNAL IMPORT 
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/HeroSection/Hero'
import Service from '@/components/Service/Service'
import NFTSlider from '@/components/BigNFTSlider/NFTSlider'
import Subscribe from '@/components/SubscribeEmail/Subscribe'
import Title from '@/components/Title/Title'
import Category from '@/components/Category/Category'
import Filter from '@/components/Filter/Filter'
import NFTCard from '@/components/NFTCard/NFTCard'
import Collection from '@/components/collection/Collection'
import FollowerTab from '@/components/FollowerTab/FollowerTab'
import Audiolive from '@/components/AudioLive/Audiolive'
import Slider from '@/components/Slider/Slider'

export default function Home() {
  return (
    <ThirdwebProvider 
    supportedWallets={[
      metamaskWallet()
    ]}
   >  
    <ChakraProvider>
      <Navbar/>
      <Hero/>
      <Service/>
      <NFTSlider/>
      {/* <Title heading="Latest Audio Collection" paragraph={"Discover the most outstanding NFTs in all topics of life"} /> */}
      {/* <Audiolive/> */}
      <Title heading="New Collection" paragraph={"Discover the most outstanding NFTs in all topics of life"} />
      <FollowerTab/>
      <Title heading="Explore NFT Videos" paragraph={"Discover the most outstanding NFTs in all topics of life"} />
      <Slider/>
      <Collection/>
      <Title heading="Featured NFTs" paragraph={"Discover the most outstanding NFTs in all topics of life"} />
      <Filter/>
      <NFTCard />
     
      <Title heading="Browse by Category" paragraph={"Explore the NFTs in the most featured categories"} />
      <Category/>
      <Subscribe/>
      <Footer/>
      
    </ChakraProvider>
    </ThirdwebProvider>
 
  )
}
