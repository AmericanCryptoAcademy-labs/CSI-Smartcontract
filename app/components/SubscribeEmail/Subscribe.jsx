import React from 'react'

// INTERNAL IMPORTS 
import Style from "./subscribe.module.css";
import Image from 'next/image';
import images from "../../img"


//External Imports
import { RiSendPlaneFill } from 'react-icons/ri';


const Subscribe = () => {
  return (
    <div className={Style.SUBSCRIBE}>
        <div className={Style.SUBSCRIBE_BOX}>
            <div className={Style.SUBSCRIBE_BOX_LEFT}>
                <h2>Never Miss a Drop</h2>
                <p>Subscribe to you exclusive drop list and be the first for upcoming drops</p>

                <div className={Style.SUBSCRIBE_BOX_LEFT_BOX}>
                    <span>01</span>
                    <small>Get More Discount</small>
                </div>

                <div className={Style.SUBSCRIBE_BOX_LEFT_BOX}>
                    <span>02</span>
                    <small>Get Premium NFTs</small>
                </div>

                <div className={Style.SUBSCRIBE_BOX_LEFT_INPUT}>
                    <input type="email " placeholder='Enter your E-mail' />
                    <RiSendPlaneFill className={Style.SUBSCRIBE_BOX_LEFT_INPUT_ICON} />
                </div>
            </div>

            <div className={Style.SUBSCRIBE_BOX_RIGHT}>
                <Image  format="webp" src={images.update} alt='Image Update' width={600} height={500} />

            </div>

        </div>
    </div>
  )
}

export default Subscribe