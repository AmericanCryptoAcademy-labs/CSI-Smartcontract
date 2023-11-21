"use client";
import React , {useState , useEffect , useCallback} from 'react'

//INTERNAL IMPORTS
import Style from "./nftslider.module.css"
import Image from 'next/image'
import images from "../../img"
import Button from '../Button/Button';


// EXTERNAL IMPORTS
import {AiFillFire , AiFillHeart , AiOutlineHeart} from "react-icons/ai";
import { MdVerified , MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLines , TbArrowBigRightLines } from 'react-icons/tb';



const NFTSlider = () => {

    const [idNumber , setidNumber] = useState(0);
    const sliderData = [
        {
            title:"AIFT NFT",
            idNumber : 1 ,
            name:"Madhav Gupta",
            collection:"AI",
            price : '0.0003ETH',
            like : 27,
            image : images.user1,
            nftImage : images.nft_image_1,
            time:{
                days : 28,
                hours : 9,
                min :33,
                seconds : 9
            }
        },
        {
            title:"Bored Apes NFT",
            idNumber : 2 ,
            name:"Vasudev",
            collection:"Bored Apes",
            price : '0.3ETH',
            like : 1000,
            image : images.user2,
            nftImage : images.nft_image_2,
            time:{
                days : 28,
                hours : 9,
                min :33,
                seconds : 9
            }
        },
        {
            title:"Simple NFT",
            idNumber : 3 ,
            name:"John Smith",
            collection:"Regular",
            price : '0.008ETH',
            like : 27,
            image : images.user3,
            nftImage : images.nft_image_3,
            time:{
                days : 28,
                hours : 9,
                min :33,
                seconds : 9
            }
        },
        {
            title:"Hello NFT",
            idNumber : 4 ,
            name:"John Smith",
            collection:"Hello",
            price : '0.008ETH',
            like : 27,
            image : images.user4,
            nftImage : images.nft_image_2,
            time:{
                days : 28,
                hours : 9,
                min :33,
                seconds : 9
            }
        }
    ]
    


    const increment = useCallback(() => {
        if(idNumber + 1 < sliderData.length){
            setidNumber(idNumber + 1);
        }
    },[idNumber , sliderData.length]);

    const decrement = useCallback(() => {
        if(idNumber > 0 ){
            setidNumber(idNumber - 1);
        }
    },[idNumber])


    useEffect(() => {
        increment()
    },[])


  return (
    <div className={Style.SLIDER}>
        <div className={Style.SLIDER_BOX} >

        <div className={Style.SLIDER_BOX_LEFT} >
            <h2>
                {sliderData[idNumber].title}
            </h2>

            <div className={Style.SLIDER_BOX_LEFT_CREATOR}>
                <div className={Style.SLIDER_BOX_LEFT_CREATOR_PROFILE}>
                    < Image  format="webp" className={Style.SLIDER_BOX_LEFT_CREATOR_PROFILE_USER_IMAGE} src={sliderData[idNumber].image} alt='Profile Image' width={50} height={50} />
                    <div className={Style.SLIDER_BOX_LEFT_CREATOR_PROFILE_INFO}>
                        <h4>{sliderData[idNumber].name}{""}</h4>
                        <span>
                            <MdVerified className={Style.USER_VERIFIED_ICON} />
                        </span>
                    </div>
                </div>

            <div className={Style.SLIDER_BOX_LEFT_CREATOR_COLLECTION}>
                <AiFillFire className={Style.SLIDER_BOX_LEFT_CREATOR_COLLECTION_ICON} />

                <div className={Style.SLIDER_BOX_LEFT_CREATOR_COLLECTION_INFO} >
                    <h4>{sliderData[idNumber].collection}</h4>
                </div>
            </div>
            </div>

            <div className={Style.SLIDER_BOX_LEFT_BIDDING} >

                <div className={Style.SLIDER_BOX_LEFT_BIDDING_BOX}>
                    {/* <small>Current Bid</small> */}
                    <p>
                        {sliderData[idNumber].price}
                    </p>
                </div>

                <div className={Style.SLIDER_BOX_LEFT_BIDDING_BOX_TIMER} >
                    <MdTimer className={Style.BIDDING_TIMER_ICON} />
                    <span>Auction Ending In</span>

                    <div className={Style.SLIDER_BOX_LEFT_BIDDING_BOX_TIMER_TIME}>
                        <div className={Style.SLIDER_BOX_LEFT_BIDDING_BOX_TIMER_TIME_ITEM}>
                            <p>{sliderData[idNumber].time.days}</p>
                            <span>Days</span>
                        </div>

                        <div className={Style.SLIDER_BOX_LEFT_BIDDING_BOX_TIMER_TIME_ITEM}>
                            <p>{sliderData[idNumber].time.hours}</p>
                            <span>hours</span>
                        </div>

                        <div className={Style.SLIDER_BOX_LEFT_BIDDING_BOX_TIMER_TIME_ITEM}>
                            <p>{sliderData[idNumber].time.min}</p>
                            <span>Minute</span>
                        </div>

                        <div className={Style.SLIDER_BOX_LEFT_BIDDING_BOX_TIMER_TIME_ITEM}>
                            <p>{sliderData[idNumber].time.seconds}</p>
                            <span>Seconds</span>
                        </div>

                    </div>

                    <div className={Style.SLIDER_BOX_LEFT_BUTTON} >

                        <Button btnName={"Place"} handleClick={() => {}} />
                        <Button btnName={"View"} handleClick={() => {}} />

                    </div>

                </div>

                <div className={Style.SLIDER_BOX_LEFT_SLIDER_BUTTON} >
                
                    <TbArrowBigLeftLines className={Style.LEFT_ARROW_ICON} onClick={() => decrement()} />
                    <TbArrowBigRightLines className={Style.RIGHT_ARROW_ICON} onClick={() => increment()} />
                </div>
                </div>

            </div>

            <div className={Style.SLIDER_BOX_RIGHT}>

                <div className={Style.SLIDER_BOX_RIGHT_BOX}>
                    <Image format="webp" src={sliderData[idNumber].nftImage} alt='NFT Image' className={Style.RIGHT_BOX_IMAGE} />
                    <div className={Style.SLIDER_BOX_RIGHT_BOX_LIKE}>
                        <AiFillHeart />
                        <span>{sliderData[idNumber].like}</span>

                    </div>

                </div>

            </div>
        

        </div>
    </div>
  )
}

export default NFTSlider