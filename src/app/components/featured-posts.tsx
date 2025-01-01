import React from 'react'
import Image from 'next/image';
import { CgAlarm } from "react-icons/cg";
import { FaChartArea } from "react-icons/fa";


const FeaturedPosts = () => {
  return (
    <div>
        <section className='bg-[#FFFFFF] py-[20px]'>
        <div>
          <div className='text-center py-10'>
            <h4 className='font-[700] text-[14px] text-[#23A6F0]'>Practice Advice</h4>
            <h2 className='font-[700] text-[40px] text-[#252B42]'>Featured Posts</h2>
            <p className='font-[400] text-[14px] text-[#737373]'>
              Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-6 pb-10'>
            <div className='w-[350px] sm:w-[300px] md:w-[350px]'>
              <Image src={require('../../../public/image/umbrella-img.png')} alt='' width={200} height={200} className='w-full h-52' />
              <div className='py-5 px-4 border border-[1] border-gray-300'>
                <h6>
                  <span className='font-[400] text-12px text-[#8EC2F2] mr-3'>Google</span>
                  <span className='font-[400] text-12px text-[#737373] mr-3'>Trending</span>
                  <span className='font-[400] text-12px text-[#737373] mr-3'>New</span>
                </h6>
                <h4 className='font-[400] text-[20px] text-[#252B42] py-2'>Loudest a la Madison #1 (L'integral)</h4>
                <p className='font-[400] text-[14px] text-[#737373] py-2'>
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className='flex justify-between py-2'>
                  <div className='flex'>
                    <CgAlarm className='text-[#23A6F0] w-[18px] h-[18px]' />
                    <h6 className='font-[400] text-[15px] text-[#737373] ml-2'>22 April 2021</h6>
                  </div>
                  <div className='flex'>
                    <FaChartArea className='text-[#23856D] w-[18px] h-[18px]' />
                    <h6 className='font-[400] text-[15px] text-[#737373] ml-2'>10 comments</h6>
                  </div>
                </div>
                <div className='flex items-center'>
                  <h4 className='font-[700] text-[16px] text-[#737373] py-2'>Learn More <span className="text-[#23A6F0] text-lg">→</span></h4>
                </div>
              </div>
            </div>

            <div className='w-[350px] sm:w-[300px] md:w-[350px]'>
              <Image src={require('../../../public/image/car-img.png')} alt='' width={200} height={200} className='w-full h-52' />
              <div className='py-5 px-4 border border-[1] border-gray-300'>
                <h6>
                  <span className='font-[400] text-12px text-[#8EC2F2] mr-3'>Google</span>
                  <span className='font-[400] text-12px text-[#737373] mr-3'>Trending</span>
                  <span className='font-[400] text-12px text-[#737373] mr-3'>New</span>
                </h6>
                <h4 className='font-[400] text-[20px] text-[#252B42] py-2'>Loudest a la Madison #1 (L'integral)</h4>
                <p className='font-[400] text-[14px] text-[#737373] py-2'>
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className='flex justify-between py-2'>
                  <div className='flex'>
                    <CgAlarm className='text-[#23A6F0] w-[18px] h-[18px]' />
                    <h6 className='font-[400] text-[15px] text-[#737373] ml-2'>22 April 2021</h6>
                  </div>
                  <div className='flex'>
                    <FaChartArea className='text-[#23856D] w-[18px] h-[18px]' />
                    <h6 className='font-[400] text-[15px] text-[#737373] ml-2'>10 comments</h6>
                  </div>
                </div>
                <div className='flex items-center'>
                  <h4 className='font-[700] text-[16px] text-[#737373] py-2'>Learn More <span className="text-[#23A6F0] text-lg">→</span></h4>
                </div>
              </div>
            </div>

            <div className='w-[350px] sm:w-[300px] md:w-[350px]'>
              <Image src={require('../../../public/image/place-img.png')} alt='' width={200} height={200} className='w-full h-52' />
              <div className='py-5 px-4 border border-[1] border-gray-300'>
                <h6>
                  <span className='font-[400] text-12px text-[#8EC2F2] mr-3'>Google</span>
                  <span className='font-[400] text-12px text-[#737373] mr-3'>Trending</span>
                  <span className='font-[400] text-12px text-[#737373] mr-3'>New</span>
                </h6>
                <h4 className='font-[400] text-[20px] text-[#252B42] py-2'>Loudest a la Madison #1 (L'integral)</h4>
                <p className='font-[400] text-[14px] text-[#737373] py-2'>
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className='flex justify-between py-2'>
                  <div className='flex'>
                    <CgAlarm className='text-[#23A6F0] w-[18px] h-[18px]' />
                    <h6 className='font-[400] text-[15px] text-[#737373] ml-2'>22 April 2021</h6>
                  </div>
                  <div className='flex'>
                    <FaChartArea  className='text-[#23856D] w-[18px] h-[18px]' />
                    <h6 className='font-[400] text-[15px] text-[#737373] ml-2'>10 comments</h6>
                  </div>
                </div>
                <div className='flex items-center'>
                  <h4 className='font-[700] text-[16px] text-[#737373] py-2'>Learn More <span className="text-[#23A6F0] text-lg">→</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedPosts