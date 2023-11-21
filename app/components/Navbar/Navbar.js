"use client";

import React , {useState , useEffect, useSyncExternalStore} from 'react'

import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
// Importing React Icons
import {MdNotifications} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {CgMenuLeft ,CgMenuRight } from "react-icons/cg"
import Link from 'next/link'

// Importing Images
import images  from "../../img"

// Navbar Component Imports
import Discover from './Discover/Discover'
import HelpCenter from './HelpCenter/HelpCenter'
import Notification from './Notification/Notification'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'

// Style File Import
import Style from "./Navbar.module.css"
import Button from '../Button/Button'
// import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {

    // USESTATES
    const [discover , setdiscover] = useState(false);
    const [help , sethelp] = useState(false);
    const [notification , setnotification] = useState(false);
    const [profile  , setprofile] = useState(false);
    const [openSidebar , setopenSidebar] = useState(false);


    const openMenu = () => {
        if(!discover){
            setdiscover(true)
            sethelp(false)
            setprofile(false)
            setnotification(false)
            console.log('discover set to true')
        }else{
            setdiscover(false)
        }
    }

    const openHelpCenter = ( ) => {
        if(!help) {
            setdiscover(false)
            sethelp(true)
            setprofile(false)
            setnotification(false)
        }else{
            sethelp(false)
        }
    }


    const openNotification = () => {
        if(!notification){
            setnotification(true)
            setdiscover(false)
            sethelp(false)
            setprofile(false)
        }else{
            setnotification(false)
        }
    }


    const openProfile = () => {
        if(!profile){
            setnotification(false)
            setdiscover(false)
            sethelp(false)
            setprofile(true)
        }else{
            setprofile(false)
        }
    }


    const opensidebar = () => {
        if(!openSidebar){
            setnotification(false)
            setdiscover(false)
            sethelp(false)
            setprofile(false)
            setopenSidebar(true)
        }else{ 
            setopenSidebar(false)
        }

    }


  return (
    <div className={Style.navbar}>

        <div className={Style.NAVBAR_CONTAINER}>

        {/* Navbar left  */}
        <div className={Style.NAVBAR_CONTAINER_LEFT}>

            {/* Logo Div */}
            < div className={Style.logo}>
            <Image src={images.logo} alt={"ArtSnap"} width={100} height={100} />   
            </div> 

            {/* Input Div */}
            <div className={Style.NAVBAR_CONTAINER_LEFT_BOX_INPUT}>
                <div className={Style.NAVBAR_CONTAINER_LEFT_BOX_INPUT_BOX}>
                    <input  type='text' placeholder='       Search NFT...' />
                    <BsSearch onClick={() => {}} className={Style.SEARCH_ICON}/>
                </div>
            </div>
               
         </div> {/* Navbar left End   */}


        {/* Navbar Right  */}
        <div className={Style.NAVBAR_CONTAINER_RIGHT}>

            {/* Discover  */}
            <div className={Style.NAVBAR_CONTAINER_RIGHT_DISCOVER}>
                <p onClick={() => openMenu()}>Discover</p>
                {discover && (
                        <div className={Style.NAVBAR_CONTAINER_RIGHT_DISCOVER_BOX}>
                         <Discover/>
                        </div>
                )}
            </div>
              {/* Discover End   */}
            

            {/* HELPCENTER */}
            {/* <div className={Style.NAVBAR_CONTAINER_RIGHT_HELPCENTER}>

                <p onClick={(e) => openHelpCenter(e)}>Help Center</p>
                {help && (
                    <div className={Style.NAVBAR_CONTAINER_RIGHT_HELPCENTER_BOX}>
                        <HelpCenter/>
                    </div>
                )}
            </div> */}
             {/* HELPCENTER END


            {/* NOTIFICATION */}
            <div className={Style.NAVBAR_CONTAINER_RIGHT_NOTIFICATION}>
                <MdNotifications onClick={() => openNotification()} className={Style.NAVBAR_CONTAINER_RIGHT_NOTIFICATION_ICON} />
                {notification && (
                    <div className={Style.NAVBAR_CONTAINER_RIGHT_NOTIFICATION_BOX}>
                        <Notification/>
                    </div>
                )}
            </div>
             {/* NOTIFICATION END */}


            {/* CREATE BUTTON SECTIONS */}
            <div  className={Style.NAVBAR_CONTAINER_RIGHT_BUTTON} > 
            <Button btnName="Create"  handleClick={() => console.log('creeate btn clicked')} />
            </div>
            

             {/* PROFILE */}
             <div className={Style.NAVBAR_CONTAINER_RIGHT_PROFILE}>

                <div className={Style.NAVBAR_CONTAINER_RIGHT_PROFILE_BOX}>
                    <Image className={Style.NAVBAR_CONTAINER_RIGHT_PROFILE_ICON}   format="webp"  src={images.user1} alt='Profile' width={40} height={40} onClick={() => openProfile()} />

                    {profile && <Profile/>}
                </div>
            </div>
            {   /* PROFILE END */}


            {/* MENU BUTTON */}
            <div className={Style.NAVBAR_CONTAINER_RIGHT_MENUBUTTON}>
                    <CgMenuRight className={Style.MENUBUTTON} onClick={() => opensidebar()} />

            </div>
             {/* MENU BUTTON END  */}


            </div>
        </div>

            

       
 
        {/* SIDEBAR */}
        {openSidebar && (
            <div className={Style.SIDEBAR}>
                <Sidebar setOpenSideMenu={setopenSidebar} />
            </div>
        )}
         {/* SIDEBAR END */}



    </div>
  )
}

export default Navbar