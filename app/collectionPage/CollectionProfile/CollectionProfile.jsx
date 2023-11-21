"use client"
import React from 'react'

import Style from "./Collectionprofile.module.css"
import Image from 'next/image'
import {TiSocialFacebook, TiSocialLinkedin , TiSocialTwitter  , TiSocialYoutube , TiSocialInstagram, } from "react-icons/ti";

import images from "../../img";


const CollectionProfile = () => {

    const cardArray = [1,2,3,4]

  return (
    <div className={Style.CollectionProfile} >

        <div className={Style.CollectionProfile_box} >

            <div className={Style.CollectionProfile_box_left} >
                <Image
                src={images.nft_image_1}
                alt='nft image '
                width={800} 
                height={800}  
                className={Style.CollectionProfile_box_left_img}
                format="webp"
                />

            <div className={Style.CollectionProfile_box_left_soical}>
            <a href='#' >
              <TiSocialInstagram/>
            </a>
            <a href='#' >
              <TiSocialLinkedin/>
            </a>
            <a href='#' >
              <TiSocialFacebook/>
            </a>
            <a href='#' >
              <TiSocialTwitter/>
            </a>
            <a href='#' >
              <TiSocialYoutube/>
            </a>
            </div>

            </div>

            <div className={Style.CollectionProfile_box_middle} >
                <h1>Awesome Collections</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas recusandae odit, 
                    consectetur rem placeat ducimus id illo! Voluptas, animi repellat. Vero rerum
                     iure harum debitis facilis dolore fuga quasi ducimus!     
                </p>

                <div className={Style.CollectionProfile_box_middle_box}  >
                    {
                        cardArray.map((el , i) => (
                            <div className={Style.CollectionProfile_box_middle_box_item}  key={i+1} >
                                <small>Floor Price</small>
                                <p>${i+1},83,892</p>
                                <span>+{i+4}%</span>

                            </div>
                        ))
                    }

                </div>


            </div>

        </div>

    </div>
  )
}

export default CollectionProfile