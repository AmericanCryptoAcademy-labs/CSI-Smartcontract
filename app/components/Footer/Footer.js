import React from 'react'

// INTERNAL IMPORT 
import Image from 'next/image';
import Style from "./Footer.module.css";
import images from  "../../img";
import HelpCenter from '../Navbar/HelpCenter/HelpCenter';
import Discover from '../Navbar/Discover/Discover';

// ICONS IMPORT 
import { GrClose } from 'react-icons/gr';
import {TiSocialFacebook, TiSocialLinkedin , TiSocialTwitter  , TiSocialYoutube , TiSocialInstagram, 
  TiArrowSortedDown
, TiArrowSortedUp
} from "react-icons/ti";

import {RiSendPlaneFill} from "react-icons/ri"


const Footer = () => {
  return (
    <div className={Style.FOOTER}>

      <div className={Style.FOOTER_BOX}>
        <div className={Style.FOOTER_BOX_SOCIAL}>
          <Image  format="webp" src={images.logo} alt='Footer Logo' height={100} width={100} />

          <p>The World's First and Largest digital marketplace for collectibiles and non-fungible 
            tokens (NFTs). But and Sell exclusive digital items.
          </p>

          <div className={Style.FOOTER_SOCIAL}>

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



      {/* DISCOVER COMPONENT */}
        <div className={Style.FOOTER_BOX_DISCOVER_MENU}>
          <h>Discover</h>
          <Discover/>
        </div>


      {/* HELPCENTER COMPONENT */}
      <div className={Style.FOOTER_BOX_HELPCENTER_MENU}>
          <h>HELP CENTER</h>
          <HelpCenter/>
        </div>

      {/* SUBSCRIBE COMPONENT */}
        <div  className={Style.SUBSCRIBE}>
          <h3>Subscribe</h3>
    
      <div className={Style.SUBSCRIBE_BOX}>
        <input type='email' placeholder='Type Your Email *' />
        <RiSendPlaneFill className={Style.SEND_ICON} />
      </div>

      <div className={Style.SUBSCRIBE_BOX_INFO}>
      The World's First and Largest digital marketplace for collectibiles and non-fungible 
            tokens (NFTs). But and Sell exclusive digital items.
      </div>
      </div>

      </div>


    </div>
  )
}

export default Footer