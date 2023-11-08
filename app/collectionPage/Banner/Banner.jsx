"use client"
import React from 'react'

import Style from "./Banner.module.css"
import Image from 'next/image'

const Banner = ({bannerImage}) => {
  return (
    <>
    
   
    <div className={Style.Banner}>
        <div  className={Style.Banner_img}>
            <Image src={bannerImage} objectFit='cover' alt='bg' height={400} width={900} />

        </div>

        <div  className={Style.Banner_img_mobile} >
        <Image src={bannerImage} objectFit='cover' alt='bg' width={1600} height={900} />
        </div>

    </div>
    </>
  )
}

export default Banner