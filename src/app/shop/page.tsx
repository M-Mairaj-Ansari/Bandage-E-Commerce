import React from 'react'
import Image from 'next/image'
import GreenHeader from '../components/green-header'
import Navbar from '../components/navbar1'
import Footer from '../components/footer'
import Card2 from '../components/card2'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import pic1 from "../../../public/image/shop-card-1.jpeg"
import pic2 from "../../../public/image/shop-card-2.jpeg"
import pic3 from "../../../public/image/shop-card-3.jpeg"
import pic4 from "../../../public/image/shop-card-4.jpeg"
import pic5 from "../../../public/image/shop-card-5.jpeg"
import pic6 from "../../../public/image/shop-card-6.jpeg"
import pic7 from "../../../public/image/shop-card-7.jpeg"
import pic8 from "../../../public/image/shop-card-8.jpeg"
import pic9 from "../../../public/image/shop-card-9.jpeg"
import pic10 from "../../../public/image/shop-card-10.jpeg"
import pic11 from "../../../public/image/shop-card-11.jpeg"
import pic12 from "../../../public/image/shop-card-12.png"


const Shop = () => {
  return (
    <div>
      <GreenHeader />
      <Navbar />
      <div className="w-full h-[92px]  flex flex-col items-center mt-[10px]">
        <div className="w-full max-w-screen-xl flex gap-4 items-center py-[40px]">
          <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
          </div>
          <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              < IoIosArrowForward className="w-[15px] h-[20px] text-[#BDBDBD]" />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-[90px] lg:ml-[70px]">
          <Image
            src={require('../../../public/image/img-1.jpg')}
            alt="1"
            className="w-[205px] h-[223px] md:w-full lg:w-full"
          />
          <Image
            src={require('../../../public/image/img-4.jpg')}
            alt="2"
            className="w-[205px] h-[223px] md:w-full lg:w-full"
          />
          <Image
            src={require('../../../public/image/img-2.jpg')}
            alt="3"
            className="w-[205px] h-[223px] md:w-full lg:w-full"
          />
          <Image
            src={require('../../../public/image/img-3.jpg')}
            alt="4"
            className="w-[205px] h-[223px] md:w-full lg:w-full"
          />
          <Image
            src={require('../../../public/image/img-5.jpg')}
            alt="5"
            className="w-[205px] h-[223px] md:w-full lg:w-full"
          />
        </div>
      </div>

      {/* Popularity Section */}
      <div className="w-full h-[98px] flex justify-center items-center mt-12">
        <div className="w-full max-w-screen-xl flex justify-between items-center py-[24px] px-4">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
            Showing all 12 results
          </div>
          <div className="flex gap-4 items-center">
            <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center relative">
              <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
                Popularity
              </p>
              < IoIosArrowDown className="absolute top-[12px] right-[10px]" />
            </button>
            <button className="w-[94px] h-[50px] flex justify-center items-center bg-[#23A6F0]">
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                Filter
              </h6>
            </button>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="relative mt-12">
        <div className="w-full h-auto flex justify-center pt-[50px] pb-[50px]">
          <div className="w-full max-w-[1054px] h-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10 sm:gap-4">
            <div className="flex justify-center">
              <Image
                src={require('../../../public/image/hooli-logo.png')}
                alt="logo"

                className="w-auto h-12"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={require('../../../public/image/lya-logo.png')}
                alt="logo"

                className="w-auto h-12"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={require('../../../public/image/logo.png')}
                alt="logo"

                className="w-auto h-12"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={require('../../../public/image/stripe-logo.png')}
                alt="logo"

                className="w-auto h-12"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={require('../../../public/image/aws-logo.png')}
                alt="logo"

                className="w-auto h-12"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={require('../../../public/image/Vector (1).png')}
                alt="logo"

                className="w-auto h-12"
              />
            </div>
          </div>
        </div>
        {/* Product Cards */}
        <div className="relative w-full px-4 py-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              pic1,
              pic2,
              pic3,
              pic4,
              pic5,
              pic6,
              pic7,
              pic8,
              pic9,
              pic10,
              pic11,
              pic12,
            ].map((pic, index) => (
              <div
                key={index}
                className="w-full max-w-[238px] mx-auto mb-8 flex flex-col items-center"
              >
                <div className="w-[239px] h-[auto] flex flex-col">
                  <div className="flex-grow">
                    <Image
                      src={pic}
                      alt={`product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="">
                    <Card2 />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full max-w-[313px] mx-auto mt-[100px] border border-gray-300 rounded-lg shadow-md">
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-gray-100 text-gray-600 font-extrabold py-2 px-4 border border-gray-300 rounded-l-md shadow-md cursor-pointer">
                First
              </div>
              <div className="bg-white text-blue-600 py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
                1
              </div>
              <div className="bg-blue-600 text-white py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
                2
              </div>
              <div className="bg-white text-blue-600 py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
                3
              </div>
              <div className="bg-white text-blue-600 py-2 px-4 border border-gray-300 rounded-r-md shadow-md cursor-pointer">
                Next
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Shop