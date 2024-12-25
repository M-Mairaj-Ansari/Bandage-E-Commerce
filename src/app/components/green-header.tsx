import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const GreenHeader = () => {
  return (
    <div>
         <div className="lg:block hidden w-full h-[58px] bg-[#23856D]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <LuPhone className="w-[16px] h-[16px] "/>
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <TfiEmail className="w-[16px] h-[16px] "/>
            <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px] text-white">
            <IoLogoInstagram className="w-[16px] h-[16px] "/>
            <IoLogoYoutube className="w-[16px] h-[16px] "/>
            <FaFacebook className="w-[16px] h-[16px] "/>
            <FaTwitter className="w-[16px] h-[16px] "/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GreenHeader