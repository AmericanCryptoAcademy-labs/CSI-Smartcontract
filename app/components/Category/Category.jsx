'use client'
import React from 'react'


//INTERNAL IMPORTS 
import Style from "./category.module.css"
import Image from 'next/image'
import { BsCircleFill } from 'react-icons/bs'
import images from "../../img"

const Category = () => {

    const CategoryArray = [1,2,3,4,5,6];
  return (

    <div className={Style.MAIN}>
         <div className={Style.CATEGORY}>

{
    CategoryArray.map((element , index) => (
        <div key={index + 1} className={Style.CATEGORY_BOX}>
            <Image  format="webp" src={images.creatorbackground1} className={Style.CATEGORY_BOX_IMAGE} alt='catepgry image'
                width={350} height={150} objectFit="cover"
            />

            <div className={Style.CATEGORY_BOX_TITLE}>
                <span>
                    <BsCircleFill/>
                </span>

                <div className={Style.CATEGORY_BOX_TITLE_INFO}>
                    <h4>Entertainment</h4>
                    <small>1995 NFts</small>

                </div>

            </div>

        </div>
     ) )
}

</div>

    </div>

   
  )
}

export default Category

