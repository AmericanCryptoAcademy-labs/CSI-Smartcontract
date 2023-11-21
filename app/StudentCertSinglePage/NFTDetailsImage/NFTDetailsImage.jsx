"use client";
import React , {useState} from 'react'

import Style from "./nftdetailsimage.module.css";
import images from '../../img';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedUp , TiArrowSortedDown } from 'react-icons/ti';
import Image from 'next/image';
import { address , abi } from '@/constant';


const NFTDetailsImage = ({tokenURI ,tokenId , image , remark}) => {

  const [description, setdescription] = useState(true);
  const [details , setdetails] = useState(true);
  const [like, setlike] = useState(false);
  const [ likecount , setlikecount] = useState(22)


  const openDescription = () => {
    if(!description){
      setdescription(true);
    }else{
      setdescription(false);
    }
  }

  const openDetails = () => {
    if(!details){
      setdetails(true);
    }else{
      setdetails(false);
    }
  }


  const likeNFT = () => {
    if(!like){
      setlike(true);
      setlikecount(23)
    }else{
      setlike(false)
      setlikecount(22)
    }
  }


  return (
    <div className={Style.NFTDetailsImage} >
      <div className={Style.NFTDetailsImage_box} >
        <div className={Style.NFTDetailsImage_box_nft} >
          <div className={Style.NFTDetailsImage_box_nft_like}>            
          </div>

          <div className={Style.NFTDetailsImage_box_nft_img} >
            <img  src={`${image.replace('ipfs://', 'https://nftstorage.link/ipfs/')}`} alt='nft image 2 ' className={Style.NFTDetailsImage_box_nft_img_img} width={400} height={800} objectFit='cover' /> 

          </div>
        </div>
        <div className={Style.NFTDetailsImage_box_description}  >
              <h2 onClick={() => openDescription()} >Remarks</h2>

              {
                description && (
                  <div>
                    <p>
                   {remark}
                    </p>
                  </div>
                )
              }
        </div>


        <div className={Style.NFTDetailsImage_box_details}  >
              <h2 onClick={() => openDetails()} >Details</h2>

              {
                details && (
                  <div>
                    <div>
                    <p>NFT CID</p>
                    <h6>{tokenURI}</h6>
                    </div>

                    <div>
                    <p>Contract Address:</p>
                    <h6>{address}</h6>
                    </div>

                    <div>
                      <p>Token ID:</p>
                      <h6>{tokenId}</h6>
                    </div>
                  

                  </div>
                )
              }
        </div>
      </div>

    </div>
  )
}

export default NFTDetailsImage