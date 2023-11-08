"use client";
import React  , {useState} from 'react';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai';
import { MdVerified , MdTimer } from 'react-icons/md';



// Internal Imports 
import Style from "./nftcardtwo.module.css";



const NFTCardTwo = ({NFTData}) => {

    const [like, setlike] = useState(false);
    const [likeInc, setlikeInc] = useState(23);


    const likeNFT = () => {
        if (like === true){
            setlike(false)
            setlikeInc(23)
        }else{
            setlike(true)
            setlikeInc(23 + 1)
        }
    }



  return (
    <div className={Style.NFTCardTwo} >
        {NFTData.map((el , i) => (
            <div className={Style.NFTCardTwo_box} key={i+1} >
                <div className={Style.NFTCardTwo_box_like} >
                    <div className={Style.NFTCardTwo_box_like_box} >
                        <div className={Style.NFTCardTwo_box_like_box_box} >
                            <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                            <p onClick={() => likeNFT()}>
                               {
                                like ? 
                                
                                    <AiFillHeart/>
                                :
                                
                                    <AiOutlineHeart/>
                                
                               }{""}
                               <span>{likeInc+1}</span>
                            </p>

                        </div>

                    </div>

                </div>

            <div className={Style.NFTCardTwo_box_img} >
                <Image  className={Style.NFTCardTwo_box_img_img} src={el} alt='NFT' width={500} height={500} objectFit='cover' />
            </div>

            <div className={Style.NFTCardTwo_box_info}>
                <div  className={Style.NFTCardTwo_box_info_left} >
                    <p>Clone # {i + 1 } </p>

                </div>
                <small>4{i+1}</small>

            </div>

            <div className={Style.NFTCardTwo_box_price} >
                <div className={Style.NFTCardTwo_box_price_price} >
                    <small>Current Bid</small>
                    <p>1{i+6} ETH</p>

                </div>

                <p className={Style.NFTCardTwo_box_price_stock}>
                    <MdTimer/> <span>{i + 3} hours left</span>

                </p>

            </div>


            </div>
        ))}

    </div>
  )
}

export default NFTCardTwo