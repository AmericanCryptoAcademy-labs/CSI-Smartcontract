import React from 'react'

// INTERNAL IMPORTS 
import Style from "./service.module.css"
import images from "../../img";
import Image from 'next/image';

const Service = () => {
  return (
    <div className={Style.SERVICE}>

        <div className={Style.SERVICE_BOX}>

        <div className={Style.SERVICE_BOX_ITEM}>
                <Image src={images.service1} alt='Filter & Discover' width={100} height={100} />
                <p>
                    <span>Step 1</span>
                </p>               
                <h3>Connect Wallet</h3>
                <p>Connect with Wallet , discover , buy NFTs, sell your NFTs and earn money </p>
        </div>

        <div className={Style.SERVICE_BOX_ITEM}>
                <Image src={images.service2} alt='Connect Wallet' width={100} height={100} />
                <p>
                    <span>Step 2</span>
                </p>               
                <h3>Register</h3>
                <p>Connect with Wallet , discover , buy NFTs, sell your NFTs and earn money </p>
        </div>

        <div className={Style.SERVICE_BOX_ITEM}>
                    <Image src={images.service3} alt='Filter & Discover' width={100} height={100} />
                <p>
                    <span>Step 3</span>
                </p>               
                <h3>Start Trading</h3>
                <p>Connect with Wallet , discover , buy NFTs, sell your NFTs and earn money </p>
        </div>

        <div className={Style.SERVICE_BOX_ITEM}>
                <Image src={images.service4} alt='AI Generated NFTs' width={100} height={100} />
                <p>
                    <span>Step 4</span>
                </p>               
                <h3>Earn Money</h3>
                <p>Connect with Wallet , discover , buy NFTs, sell your NFTs and earn money </p>
        </div>


        </div>

    </div>
  )
}

export default Service