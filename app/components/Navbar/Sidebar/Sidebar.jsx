"use client"
import React, { useState } from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { GrClose } from 'react-icons/gr';
import {TiSocialFacebook, TiSocialLinkedin , TiSocialTwitter  , TiSocialYoutube , TiSocialInstagram, 
  TiArrowSortedDown
, TiArrowSortedUp
} from "react-icons/ti"


import Style from "./Sidebar.module.css";
import images from "../../../img";
import Button from '@/components/Button/Button';

const Sidebar = ({setOpenSideMenu}) => {

  // USESTATES
  const [ openDiscover , setopenDiscover] = useState(false);
  const [openHelp  , setopenHelp] = useState(false);

  const discover = [
    {
      name:"Collection",
      link:'collection'
    },
    {
      name:"Author Profile",
      link:'author-profile'
    },
    {
      name:"NFT Details",
      link:'nft-details'
    },
    {
      name:"Account Setting",
      link:'account-setting'
    },
    {
      name:"Connect Wallet",
      link:'connect-wallet'
    }
  ]

  const helpCenter = [
    {
      name : "About",
      link : 'about'
    },
    {
      name : "Contact Us",
      link : 'contact-us'
    },
    {
      name : "Sign Up",
      link : 'signup'
    },
    {
      name : "Sign In",
      link : 'signin'
    }
  ]


  // FUNCTIONS
  const openDiscoverMenu = () => {
    if(!openDiscover){
      setopenDiscover(true)
    }else{
      setopenDiscover(false)
    }
  }

  const openHelpMenu = () => {
    if(!openHelp){
      setopenHelp(true)
    }else{
      setopenHelp(false)
    }
  }

  const closeSideBar = () => {
    setOpenSideMenu(false);
  }



  return (
    <div className={Style.SIDEBAR}>

      <GrClose className={Style.SIDEBAR_CLOSE_BTN} onClick={() => closeSideBar()} />

      <div className={Style.SIDEBAR_BOX}>
        <Image src={images.logo} alt='logo' width={100} height={100} />

        <p>Discover the most outstanding articles on all the topics of NFTs and  write your own stroues and share them. </p>

        <div className={Style.SIDEBAR_SOCIALS}>
          <a href="#"><TiSocialLinkedin className={Style.SOCIAL_ICONS} /></a>
          <a href="#"><TiSocialFacebook   className={Style.SOCIAL_ICONS} /></a>
          <a href="#"><TiSocialTwitter  className={Style.SOCIAL_ICONS}/></a>
          <a href="#"><TiSocialYoutube   className={Style.SOCIAL_ICONS} /></a>
          <a href="#"><TiSocialInstagram  className={Style.SOCIAL_ICONS} /></a>
        </div>
      </div>

      {/* SIDEBAR MENU DISCOVER  */}
      <div className={Style.SIDEBAR_MENU}>
        <div>
          <div className={Style.SIDEBAR_MENU_BOX}  onClick={() => openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>

          {openDiscover && (
            <div className={Style.SIDEBAR_DISCOVER}>

              {discover.map((el , index) => (

                <p key={index +1 }>
                  <Link href={{pathname:`${el.link}`}}>{el.name}</Link>

                </p>
              ))}

            </div>
          )}
        </div>
{/* SIDEBAR MENU DISCOVER END   */}


{/* SIDEBAR MENU HELPCENTER  */}
  <div className={Style.SIDEBAR_MENU_BOX} onClick={() => openHelpMenu()}>
  <p>Help Center</p>
            <TiArrowSortedUp/>
          </div>

          {openHelp && (
            <div className={Style.SIDEBAR_HELPCENTER}>

              {helpCenter.map((el , index) => (

                <p key={index +1 }>
                  <Link href={{pathname:`${el.link}`}}>{el.name}</Link>

                </p>
              ))}

            </div>
          )}
{/* SIDEBAR MENU HELPCENTER  END  */}
    </div>

<div className={Style.SIDEBAR_BUTTON}>
  <Button  btnName="Create"  handleClick={() => console.log('creeate btn clicked')} ></Button>
  <Button  btnName="Connect"  handleClick={() => console.log('creeate btn clicked')} ></Button>

</div>

</div> 
  );

}

export default Sidebar;