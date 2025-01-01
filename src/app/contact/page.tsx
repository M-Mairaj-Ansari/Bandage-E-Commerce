import React from 'react'
import Footer from '../components/footer'
import Navbar2 from '../components/navbar2';
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { PiArrowBendRightDownBold } from "react-icons/pi";

const ContactUs = () => {
    return (
        <div>
            <div className="w-full h-auto bg-[#FFFFFF]">
                <div className="w-full max-w-[1322px] mx-auto">
                    <Navbar2 />
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[80px] mt-10 lg:mt-[104px] px-4 lg:px-0 max-w-[1050px] mx-auto">
                    {/* Left Column (Contact Info) */}
                    <div className="flex  flex-col gap-6 w-full lg:w-[599px]">
                        <h5 className="text-[16px] font-bold text-[#252B42]">CONTACT US</h5>

                        {/* Main Heading */}
                        <h1 className="text-[40px] sm:text-[50px] lg:text-[58px] leading-[60px] sm:leading-[70px] lg:leading-[80px] font-bold text-[#252B42] tracking-[0.2px]">
                            Get in touch today!
                        </h1>

                        {/* Description */}
                        <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#737373]">
                            We know how large objects will act, but things on a small scale.
                        </h4>

                        {/* Contact Details */}
                        <div>
                            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#252B42]">
                                Phone: +451 215 215
                            </h3>
                            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#252B42]">
                                Fax: +451 215 215
                            </h3>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-4">
                            <BsTwitter className="text-[#55ACEE] w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]" />
                            <FaFacebookSquare className="text-[#395185] w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]" />
                            <FaInstagram className="text-[#000000] w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]" />
                            <IoLogoLinkedin className="text-[#0A66C2] w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]" />
                        </div>
                    </div>

                    {/* Right Column (Image) */}
                    <div className="w-full mt-6 lg:mt-0">
                        <Image
                            src={require('../../../public/image/background.png')}
                            alt="background"
                            priority
                            className="w-full lg:w-[700px] lg:mr-20 object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center bg-[#FFFFFF] py-8">
                <div className="w-full max-w-[1050px] h-auto flex flex-col gap-[80px] items-center">
                    <div className="w-full max-w-[633px] h-auto flex flex-col gap-[10px] items-center text-center">
                        <h6 className="text-[14px] font-Montserrat font-bold leading-[24px] tracking-[0.2px] text-[#252B42]">
                            VISIT OUR OFFICE
                        </h6>
                        <h2 className="text-[40px] font-Montserrat font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
                            We help small businesses with big ideas
                        </h2>
                    </div>

                    <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
                        <div className="max-w-[327px] w-full h-auto bg-[#F9F9F9] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
                            <div className="w-[72px] h-[72px]">
                                <LuPhone className="w-full h-full text-[#23A6F0]" />
                            </div>
                            <div className="w-full text-center">
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                                    georgia.young@example.com
                                </h6>
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                                    georgia.young@ple.com
                                </h6>
                            </div>
                            <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                                Get Support
                            </div>
                            <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                                    Submit Request
                                </h6>
                            </button>
                        </div>

                        <div className="max-w-[329px] w-full h-auto bg-[#252B42] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
                            <div className="w-[72px] h-[72px]">
                                < FaLocationDot className="w-full h-full text-[#23A6F0]" />
                            </div>
                            <div className="w-full text-center">
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                                    georgia.young@example.com
                                </h6>
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                                    georgia.young@ple.com
                                </h6>
                            </div>
                            <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-white">
                                Get Support
                            </div>
                            <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                                    Submit Request
                                </h6>
                            </button>
                        </div>

                        <div className="max-w-[327px] w-full h-auto bg-[#F9F9F9] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
                            <div className="w-[72px] h-[72px]">
                                < TfiEmail className="w-full h-full text-[#23A6F0]" />
                            </div>
                            <div className="w-full text-center">
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                                    georgia.young@example.com
                                </h6>
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                                    georgia.young@ple.com
                                </h6>
                            </div>
                            <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                                Get Support
                            </div>
                            <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                                    Submit Request
                                </h6>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto bg-white flex justify-center items-center py-[80px]">
                <div className="w-full max-w-[1050px] flex flex-col items-center justify-center gap-[36px] px-4">
                    <div className="w-[72px] h-auto flex justify-center">
                        <PiArrowBendRightDownBold className="text-[#23A6F0] w-[30px] h-[30px]" />
                    </div>

                    <div className="w-full max-w-[607px] h-auto flex flex-col items-center text-center gap-[16px]">
                        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                            WE CAN'T WAIT TO MEET YOU
                        </h5>
                        <h1 className="font-Montserrat font-bold text-[40px] lg:text-[58px] leading-[48px] lg:leading-[80px] tracking-[0.2px] text-[#252B42]">
                            Let,s Talk
                        </h1>
                        <button className="rounded-[5px] py-[12px] px-[20px] lg:py-[15px] lg:px-[40px] bg-[#23A6F0] text-white font-Montserrat font-bold text-[14px] leading-[22px]">
                            Try it free now
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactUs
