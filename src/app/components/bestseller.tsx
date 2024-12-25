import React from 'react'
import Image from 'next/image'
import Card1 from './card1'

const BestSeller = () => {
  return (
    <div>
         <div className="relative bg-[#FAFAFA] w-full">
      <div className="max-w-[1440px] h-auto mx-auto">
        <div className="max-w-[1124px] py-[48px] flex flex-col gap-[24px] mx-auto">
          {/* Heading */}
          <div className="flex gap-[10px]">
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.2px] text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
          </div>
          {/* Line under the heading */}
          <div className="w-full h-[2px] bg-[#dbdbdb]"></div>
          {/* Products Section */}
          <div className="flex lg:flex-row gap-[30px] flex-col lg:ml-[0px] ml-[100px]">
            {/* Card 1 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={require('../../../public/image/product-cover-5 (18).png')} alt="pic" className="w-full h-full object-cover" />
              </div>
              <Card1 />
            </div>
            {/* Card 2 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={require('../../../public/image/product-cover-5 (19).png')} alt="pic" className="w-full h-full object-cover" />
              </div>
              <Card1 />
            </div>
            {/* Card 3 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={require('../../../public/image/product-cover-5 (20).png')} alt="pic" className="w-full h-full object-cover" />
              </div>
              <Card1 />
            </div>
            {/* Card 4 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={require('../../../public/image/product-cover-5 (21).png')} alt="pic" className="w-full h-full object-cover" />
              </div>
              <Card1 />
            </div>
          </div>
          {/* Second Row */}
          <div className="flex lg:flex-row gap-[30px] flex-col lg:ml-[0px] ml-[100px]">
            {/* Card 5 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={require('../../../public/image/product-cover-5 (22).png')} alt="pic" className="w-full h-full object-cover" />
              </div>
              <Card1 />
            </div>
            {/* Card 6 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={require('../../../public/image/product-cover-5 (23).png')} alt="pic" className="w-full h-full object-cover" />
              </div>
              <Card1 />
            </div>
            {/* Card 7 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={require('../../../public/image/product-cover-5 (24).png')} alt="pic" className="w-full h-full object-cover" />
              </div>
              <Card1 />
            </div>
            {/* Card 8 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={require('../../../public/image/product-cover-5 (20).png')} alt="pic" className="w-full h-full object-cover" />
              </div>
              <Card1 />
            </div>
          </div>
        </div>
      </div>
    {/* Companies Logo*/}
<div className="w-full bg-[#FAFAFA] py-8">
  <div className="max-w-[1124px] mx-auto">
    {/* Logo Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
      <div className="flex justify-center">
        <Image src={require('../../../public/image/hooli-logo.png')} alt="Client 1 Logo" className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src={require('../../../public/image/lya-logo.png')} alt="Client 2 Logo" className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src={require('../../../public/image/logo.png')} alt="Client 3 Logo" className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src={require('../../../public/image/stripe-logo.png')} alt="Client 4 Logo" className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src={require('../../../public/image/aws-logo.png')} alt="Client 5 Logo" className="h-12 w-auto" />
      </div>
      <div className="flex justify-center">
        <Image src={require('../../../public/image/Vector (1).png')} alt="Client 6 Logo" className="h-12 w-auto" />
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default BestSeller