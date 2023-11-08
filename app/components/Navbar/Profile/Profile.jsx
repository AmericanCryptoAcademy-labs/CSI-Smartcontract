"use client";
import React from 'react'


import Image from 'next/image';
import Link from 'next/link';

// REACT  ICONS IMPORT 
import {FaUserAlt , FaRegImage , FaUserEdit} from "react-icons/fa"
import { MdHelpCenter } from 'react-icons/md';
import { TbDownloadOff , TbDownload} from 'react-icons/tb';

//  INTERNAL IMAGES IMPORT 
import images from "../../../img";



import Style from "./profile.module.css"
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  ThirdwebProvider,
  metamaskWallet
} from "@thirdweb-dev/react";

const Profile = () => {
  return (
    <ThirdwebProvider 
    supportedWallets={[
      metamaskWallet()
    ]}
   >

    <div className={Style.PROFILE}>

      <div className={Style.PROFILE_ACCOUNT}>
        <Image 
        src={images.user1}
        alt='User Image'
        width={40}
        height={40}
        className={Style.PROFILE_ACCOUNT_IMAGE}
        
        /> 

        <div className={Style.PROFILE_ACCOUNT_INFO}>
          <p>Madhav Gupta</p>
          <small>Address of the USer </small>
        </div>
      </div>

      <div className={Style.PROFILE_MENU}>
        <div className={Style.PROFILE_MENU_ONE}>
        <div    className={Style.PROFILE_MENU_ONE_ITEM}>
          <FaUserAlt/>
          <p>
            <Link href={{pathname:`/studentCerts`}} >My Profile</Link>
          </p>
        </div>

        <div    className={Style.PROFILE_MENU_ONE_ITEM}>
          <FaUserAlt/>
          <p>
            <Link href={{pathname:`/issueCertificate`}} >Issue Certificate</Link>
          </p>
        </div>

        <div    className={Style.PROFILE_MENU_ONE_ITEM}>
          <FaRegImage/>
          <p>
            <Link href={{pathname:`/my-items`}} >My Items</Link>
          </p>
        </div>

        <div    className={Style.PROFILE_MENU_ONE_ITEM}>
          <FaUserEdit/>
          <p>
            <Link href={{pathname:`/edit-profile`}} >Edit Profile</Link>
          </p>
        </div>

        </div>


        <div className={Style.PROFILE_MENU_TWO}>
          <div className={Style.PROFILE_MENU_ONE_ITEM}>
            <MdHelpCenter/>
            <p>
              <Link href={{pathname:'/help'}}>Help</Link>
            </p>
          </div>

          <div className={Style.PROFILE_MENU_ONE_ITEM}>
            <TbDownload/>
            <p>
            <ConnectWallet />
            </p>
          </div>
        </div>

      </div>
    </div>

    </ThirdwebProvider>
  )
}

export default Profile