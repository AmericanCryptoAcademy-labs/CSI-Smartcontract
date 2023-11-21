
import React from 'react'
import Link from 'next/link';



import Style from "./helpcenter.module.css"
import { Eagle_Lake } from 'next/font/google';

const HelpCenter = () => {

  const helpCenter = [
    {
      name : "About",
      link : 'about'
    },
    {
      name : "Contact Us",
      link : 'contact-us'
    },
    {
      name : "Sign Up",
      link : 'signup'
    },
    {
      name : "Sign In",
      link : 'signin'
    }
  ]

  return (
    <div>
      {helpCenter.map((element , index) => (
        <div className={Style.HELPCENTER} key={index + 1} >

          <Link href={{pathname: `${element.link}`}} >{element.name}</Link>

        </div>
      ))}
    </div>
  )
}

export default HelpCenter