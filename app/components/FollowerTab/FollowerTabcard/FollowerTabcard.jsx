import React ,{useState} from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti';

import Style from "./FollowerTabcard.module.css";
import images from "../../../img"

const FollowerTabcard = ({index , el}) => {

    const [following , setfollowing] = useState(false);

    const FollowMe = () => {
        if(!following){
            setfollowing(true)
        }else{
            setfollowing(false)
        }
    }


  return (
    <div className={Style.FollowerTabcard}>

      <div className={Style.FollowerTabcard_rank}>
        <p>
            #{index}
        </p>
       </div>

       <div className={Style.FollowerTabcard_box}>
        <div className={Style.FollowerTabcard_box_img}>
            <Image   format="webp"  src={images.creatorbackground1} alt='profile' width={500} height={300}
            className={Style.FollowerTabcard_box_img_img}
            objectFit='cover'
            />

        </div>

        <div className={Style.FollowerTabcard_box_profile}>
            <Image  format="webp" src={el} width={70} height={70}   alt="profile pic" className={Style.FollowerTabcard_box_profile_img} />

        </div>

        <div className={Style.FollowerTabcard_box_info}>
            <div className={Style.FollowerTabcard_box_info_name}>
                <h4>Giada Mann {""} <span><MdVerified className={Style.icon} /></span> </h4>
                <p>12.727 ETH</p>

            </div>

            <div className={Style.FollowerTabcard_box_img_info_following} >
                {following ? (
                   <button onClick={() => FollowMe()} >
                    Follow {""} <span><TiTick className={Style.icon} /></span>
                   </button>
                ) : (
                    <button onClick={() => FollowMe()} >
                    Following {""} <span><TiTick className={Style.icon} /></span>
                   </button>
                ) }

            </div>
        </div>

       </div>


    </div>
  )
}

export default FollowerTabcard