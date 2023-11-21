"use client";
import React from 'react'

import Link from 'next/link';


// CSS File Import
import Style from "./discover.module.css";

const Discover = () => {

  const discover = [
    {
      name:"Collection",
      link:'collection'
    },
    {
      name:"Author Profile",
      link:'author-profile'
    },
    {
      name:"NFT Details",
      link:'nft-details'
    },
    {
      name:"Account Setting",
      link:'account-setting'
    }
  ]

  return (
    <div>
      {discover.map(( element ,  index  )=> (
      <div key={index + 10} className={Style.DISCOVER} >

        <Link href={{pathname : `${element.link}`}}> {element.name} </Link>

      </div>

      )) }
    </div>
  )
}

export default Discover