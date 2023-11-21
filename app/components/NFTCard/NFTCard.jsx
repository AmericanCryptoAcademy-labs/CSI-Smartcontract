"use client";
import React , {useState} from 'react'

import Style from "./nftcard.module.css"
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai'
import { BsImage } from 'react-icons/bs'
import Image from 'next/image'

import image from "../../img";
const NFTCard = () => {

    const featureArray = [1,2,3,4,5,6,7,8,9];

    const [like  , setlike] = useState(true);

    const likeNFT = () => {
        if(!like){
            setlike(true)
        }else{
            setlike(false)
        }
    }



  return (
    <div className={Style.NFTCARD} >

        {
            featureArray.map((element , index ) => (
                <div className={Style.NFTCARD_BOX} key={index +1 }>
                    <div className={Style.NFTCARD_BOX_IMAGE}>
                        <Image  format="webp" className={Style.NFTCARD_BOX_IMAGE_IMG} src={image.nft_image_1} alt='nft image' width={600} height={600}/>
                    </div>

                    <div className={Style.NFTCARD_BOX_UPDATE}>
                        <div className={Style.NFTCARD_BOX_UPDATE_LEFT}>
                            <div className={Style.NFTCARD_BOX_UPDATE_LEFT_LIKE} onClick={() => likeNFT()}>
                                {
                                    like ? (<AiFillHeart/>) : (<AiOutlineHeart className={Style.NFTCARD_BOX_UPDATE_LEFT_LIKE_ICON}   />)
                                }

                                {""}22
                            </div>
                        </div>

                    <div className={Style.NFTCARD_BOX_UPDATE_RIGHT} >
                        <div className={Style.NFTCARD_BOX_UPDATE_RIGHT_INFO}>
                            <small>Remaining Time</small>
                            <p>3h: 15min : 20s</p>
                        </div>
                    </div>
                    </div>

                <div className={Style.NFTCARD_BOX_UPDATE_DETAILS}>
                    <div className={Style.NFTCARD_BOX_UPDATE_DETAILS_PRICE}>
                        <div className={Style.NFTCARD_BOX_UPDATE_DETAILS_PRICE_BOX}>
                            <h4>Clone #183838</h4>

                            <div className={Style.NFTCARD_BOX_UPDATE_DETAILS_PRICE_BOX_BOX}>
                                <div className={Style.NFTCARD_BOX_UPDATE_DETAILS_PRICE_BOX_BOX_BID}>
                                    <small>Current Bid</small>
                                    <p>0.8ETH</p>
                                </div>

                                <div className={Style.NFTCARD_BOX_UPDATE_DETAILS_PRICE_BOX_STOCK}>
                                    <small>61 in stock</small>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={Style.NFTCARD_BOX_UPDATE_DETAILS_CATEGORY}>
                        <BsImage/>
                    </div>

                </div>

                </div>
            ))
        }

    </div>
  )
}

export default NFTCard