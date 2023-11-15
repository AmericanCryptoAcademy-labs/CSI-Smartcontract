"use client "
import React , {useState} from 'react'
import Image from 'next/image';
import { ethers } from 'ethers';
import { address , abi } from '@/constant';


// Internal Imports
import Style from "./nftdescription.module.css";
import images from "../../img";
import { MdVerified , MdCloudUpload, MdTimer , MdReportProblem , MdOutlineDeleteSweep } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet , FaPercentage } from 'react-icons/fa';
import { Alert , AlertIcon , Box , Text , Input ,VStack ,  Button } from '@chakra-ui/react';
import {TiSocialFacebook, TiSocialLinkedin , TiSocialTwitter  ,  TiSocialInstagram, } from "react-icons/ti"
import {BiTransferAlt , BiDollar} from "react-icons/bi";
import NFTTabs from '../NFTTabs/NFTTabs';


const NFTDescription = ({certId , name , description , issuedTo , institute , issuer , validdate  , certType}) => {

  const [social, setsocial] = useState(false);
  const [NFTMenu , setnftmenu] = useState(false);
  const [history, sethistory] = useState(false)
  const [provanance, setprovanance] = useState(false)
  const [owner, setowner] = useState(false);
  const [showMetamaskAlert, setShowMetamaskAlert] = useState(false);
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [date , setdate] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSocial = () => {
    if(social){
      setsocial(false);
    }else{
      setsocial(true);
      setnftmenu(false)
    }
  }

  const openNFTMenu = () => {
    if(NFTMenu){
      setnftmenu(false);
    }else{
      setnftmenu(true)
      setsocial(false)
    }
  }

  const openTabs = (e) => {
    const text  = e.target.innerText;

    if(text == "Bid History"){
      sethistory(true);
      setprovanance(false);
      setowner(false)
    }else if (text == "Owner"){
      sethistory(false);
      setprovanance(false);
      setowner(true)
    }else if (text == "Provanance"){
      sethistory(false);
      setprovanance(true);
      setowner(false)
    }

    
  }

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ]

  const provananceArray = [
    images.user3,
    images.user5,
    images.user6,
    images.user7,
    images.user1,
  ]

  const ownerArray = [
    images.user3,
  ]

  function getHumanReadableDateFromContract(timestamp) {
    // 2. Convert the Unix timestamp to a JavaScript Date object
    const dateObject = new Date(Number(timestamp) * 1000);

    // 3. Convert the Date object to a human-readable string
    return dateObject.toISOString().slice(0,19).replace("T", " ");
  }

  const revokeButton = async() =>{

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const aift = new ethers.Contract(address, abi, signer)
      const tx = await aift.revokeCertificate(certId)
      console.log(tx)

      const txhash = tx.hash 

      signer.provider.on(txhash, (receipt) => {
          console.log('Transaction confirmed:', receipt);
          setStatus('             AIFT Unisted Succesfully')
          setType('success')
          setShowMetamaskAlert(true)
        });
    } catch (error) {
      console.log(error)
      setStatus(' Transaction Rejected... Please Try Again')
      setType('error')
      setShowMetamaskAlert(true)
    } 


  }

  const certTypeReturn = (type) => {
    if(certType == 1){
      return "Active"
    }else if (certType == 2){
      return "Expired"
    }else{
      return "Revoked"
    }
  }

  
  const extendValiditybtn = async() =>{

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const aift = new ethers.Contract(address, abi, signer);
      const tx = await aift.updateCertificateValidity(certId , Number(date));
      console.log(tx)

      const txhash = tx.hash 

      signer.provider.on(txhash, (receipt) => {
          console.log('Transaction confirmed:', receipt);
          setStatus('             AIFT Unisted Succesfully')
          setType('success')
          setShowMetamaskAlert(true)
        });
    } catch (error) {
      console.log(error)
      setStatus(' Transaction Rejected... Please Try Again')
      setType('error')
      setShowMetamaskAlert(true)
    } 


  }



  return (
    <div className={Style.NFTDescription} >
    {/* {showMetamaskAlert && <Alert style={{width:'2rem'}} variant={'solid'} status={type} className='w-10/12'><AlertIcon />{status}</Alert>} */}

      <div className={Style.NFTDescription_box} >
        {/* Top Div */}
        <div className={Style.NFTDescription_box_share} >
          {/* <p>Certificate Standard Institute</p> */}
          <p>{certTypeReturn(certType)  }</p>
          <div className={Style.NFTDescription_box_share_icon_box} >
            <MdCloudUpload className={Style.NFTDescription_box_share_icon} onClick={() => openSocial()} />
            {social && (
              <div className={Style.NFTDescription_box_share_icon_box_social} >
            <a href="#"><TiSocialLinkedin className={Style.SOCIAL_ICONS} /></a>
            <a href="#"><TiSocialFacebook   className={Style.SOCIAL_ICONS} /></a>
            <a href="#"><TiSocialTwitter  className={Style.SOCIAL_ICONS}/></a>
            <a href="#"><TiSocialInstagram  className={Style.SOCIAL_ICONS} /></a>
              </div>

            )}
            
            <BsThreeDots className={Style.NFTDescription_box_share_icon} onClick={() => openNFTMenu()} />
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_icon_box_social_threedots} >
            <a href="#">Change price</a>
            <a href="#">Transfer Token</a>
            <a href="#">Report Abuse</a>
            <a href="#">Delete Item</a>
              </div>

            )}
          </div>
        </div>

        <div className={Style.NFTDescription_box_profile} >
          <h1>{name}</h1>

          <div className={Style.NFTDescription_box_profile_box} >

          
            
            {/* LEFT Profile  */}
          <div>
            {/* <div>
              <Image src={images.nft_image_2} width={20} height={20} className={Style.NFTDescription_box_profile_img}  />
            </div> */}

            <div>
              {/* <p>Creator</p>
              <h3>{issuer} <MdVerified className={Style.ICOn} /> </h3> */}
             
            </div>
          </div>

                {/* Right Profile */}
          <div>
            <div>
              <Image src={images.creatorbackground9} width={20} height={20} className={Style.NFTDescription_box_profile_img}/>
            </div>

            <div>
              <p>Issuer</p>   
              <h3>{institute}   <MdVerified className={Style.ICOn} />  </h3>
            </div>
          </div>

          </div>
        </div>
      
      <div className={Style.NFTDescription_box_profile_bid_timer} >
        <p className={Style.NFTDescription_box_profile_bid_timer_p} >
          <MdTimer className={Style.NFTDescription_box_profile_bid_timer_p_icon} /> <span>Valid Till:</span>
        </p>

        <div className={Style.NFTDescription_box_profile_bid_box_timer}  >
          <div className={Style.NFTDescription_box_profile_bid_box_timer_box_item}  >
              <h2>{getHumanReadableDateFromContract(validdate)}</h2>
              
          </div>

        </div>


      </div>


      <div className={Style.NFTDescription_box_profile_currentbid} >
        <div className={Style.NFTDescription_box_profile_currentbid_box} >
          <small>Issued To:</small>
          <p>{issuedTo}</p>
        </div>
        {/* <span>98 left in Stock</span> */}

      </div>


      <div  className={Style.NFTDescription_box_profile_currentbid_button_box} >
              <button onClick={() =>setIsModalOpen(true)}  > <FaWallet className={Style.NFTDescription_box_profile_currentbid_button_box_icon} /> Extend Validity  </button>
              <button onClick={() => revokeButton()} > <FaPercentage  className={Style.NFTDescription_box_profile_currentbid_button_box_icon}  /> Revoke </button>

      </div>

      <div className={Style.NFTDescription_box_profile_currentbid_box_tabs} >
        <button  onClick={(e) => openTabs(e)} >Bid History</button>
        <button  onClick={(e) => openTabs(e)} >Provanance</button>
        <button  onClick={(e) => openTabs(e)} >Owner</button>
      </div>

      {
        history && (
          <div className={Style.NFTDescription_box_profile_history_tab}>
            <NFTTabs NFTData={historyArray} />
          </div>
        )
      }

      {
        provanance && (
          <div className={Style.NFTDescription_box_profile_history_tab}>
            <NFTTabs NFTData={provananceArray} />
          </div>
        )
      }

      {
        owner && (
          <div className={Style.NFTDescription_box_profile_history_tab}>
            <NFTTabs NFTData={ownerArray} />
          </div>
        )
      }

      <MyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} extendValiditybtn={extendValiditybtn} setdate={setdate} />

      </div>
    </div>
  )
}

export default NFTDescription


const MyModal = ({isOpen, onClose, extendValiditybtn, setdate  }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background="rgba(0, 0, 0, 0.8)"
          display="flex"
          alignItems="center"
          flexDirection={"column"}
          style={{ flexDirection: "column" }}
          justifyContent="center"ve
          zIndex="10000000000000000"
          onClick={onClose}
        >
          <VStack background="white"
            padding="3rem"
            borderRadius="4px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            onClick={handleModalClick}>
            <Text style={{ fontSize: '1.2rem', fontWeight: '700' , color:"#9A9A9A" }}>Enter the Number of Days You Want to Extend Validity for:</Text>
            <Input type='number' required placeholder="Enter price..." onChange={(event) => setdate(event.target.value)}
              style={{padding:'0.4rem 1rem', border:"2px solid #50A838" , margin:'0.6rem 1rem' , borderRadius:'1rem'}}
            />
            <div className={Style.NFTDescription_box_profile_currentbid_button_box} >
            <button    onClick={extendValiditybtn }  marginLeft="10px" style={{ margin: "1.2rem 0 10px 0 " , backgroundColor:"#50A838" , color:"#fff" }} size={'lg'}>
             Confirm
            </button>
            </div>
           
          </VStack>
        </Box>
      )}
    </>
  );
};
