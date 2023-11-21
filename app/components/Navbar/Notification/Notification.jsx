import React from 'react'

// Imports
import Style from "./notification.module.css"
import Image from 'next/image'
import images  from "../../../img"


const Notification = () => {
  return  (
    <div className={Style.NOTIFICATION}>
      <p>Notification</p>

      <div className={Style.NOTIFICATION_BOX}>

        <div className={Style.NOTIFICATION_BOX_IMAGE}>
          <Image 
          src={images.user1} 
          alt='Notification Image'
          height={50}
          width={50}
          className={Style.NOTIFICATION_BOX_IMAGE} />
        </div>


        <div className={Style.NOTIFICATION_BOX_INFO}>
          <h4>Madhav Gupta</h4>
          <p>ACA Issue Cert #52 to you</p>
          <small>3 minutes ago..</small>
        </div>

        <span className={Style.NOTIFICATION_BOX_NEW}></span>

      </div>

    </div>
  )
}



export default Notification