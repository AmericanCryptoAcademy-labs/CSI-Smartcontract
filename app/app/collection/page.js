'use client'
import React from 'react'

// Internal Imports
import Style from "./collection.module.css"
import images from "../../img";

import Banner from '@/collectionPage/Banner/Banner';
import CollectionProfile from '@/collectionPage/CollectionProfile/CollectionProfile';
import Slider from '@/components/Slider/Slider';
import Filter from '@/components/Filter/Filter';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import NFTCardTwo from '@/collectionPage/NFTCardTwo/NFTCardTwo';
import Title from '@/components/Title/Title';



const CollectionPage = () => {

  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
  
  ]

  return (
  
  <>
  <Navbar/>
   <div className={Style.collection} >
        {/* <Banner bannerImage={images.creatorbackground1} /> */}
        <CollectionProfile  />
        <Filter/>
        <NFTCardTwo NFTData={collectionArray} />
        <Title heading="Explore NFT Videos" paragraph={"Discover the most outstanding NFTs in all topics of life"} />
        <Slider/>
        
    </div>

    <Footer/>
  </>
   
  )
}

export default CollectionPage