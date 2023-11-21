import React from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'

import Style from "./day.module.css";
import images from "../../../img"

const Day = () => {
  return (
    <div className={Style.Day}>

      <div className={Style.Day_box}>

        <div className={Style.Day_box_img}>
          <Image src={images.creatorbackground1}
            className={Style.Day_box_img_img}
            alt='creator image'
            width={500}
            height={300}
            objectFit='cover'
            format="webp"
          />

        </div>

        <div className={Style.Day_box_profile}>
          <Image   format="webp" src={images.creatorbackground2} alt='profile' width={200} 
          height={200} 
          className={Style.Day_box_img_img1}  objectFit='cover' />

          <Image   format="webp"  src={images.creatorbackground2} alt='profile' width={200} height={200} 
          className={Style.Day_box_img_img2}  objectFit='cover' />

          <Image  format="webp"  src={images.creatorbackground2} alt='profile' width={200} height={200} 
          className={Style.Day_box_img_img3}  objectFit='cover' />

        </div>


        <div className={Style.Day_box_title} >
          <h2>Amazing Collection</h2>
          <div className={Style.Day_box_title_info}>
            <div className={Style.Day_box_title_info_profile}>
              <Image  format="webp"  className={Style.Day_box_title_info_profile_img} src={images.user1} width={30}  height={30} objectFit='cover' />
              <p>
                <span>
                  Madhav Gupta
                  <small>
                    <MdVerified className={Style.Day_box_title_info_profile_icon} />
                  </small>
                </span>
              </p>

            </div>

            <div className={Style.Day_box_title_info_price}>
              <small>1.89 ETH</small>
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default Day