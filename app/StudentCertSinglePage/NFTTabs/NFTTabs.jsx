"use client";
import React from 'react'
import Image from 'next/image';

import Style from "./nfttabs.module.css";


const NFTTabs = ({NFTData}) => {
  return (
   <div className={Style.NFTTabs} >
    {
      NFTData.map((el,i) => (
        <div className={Style.NFTTabs_box} >
          <Image src={el} alt='nft image' width={40} height={40} className={Style.NFTTabs_box_img} />
          <div className={Style.NFTTabs_box_info} >
            <p>Offer of 800$ by <span>Madhav</span> </p>
            <span>17 Sep - 8:19 AM</span>
          </div>
        </div>
      ))
    }

   </div>
  )
}

export default NFTTabs