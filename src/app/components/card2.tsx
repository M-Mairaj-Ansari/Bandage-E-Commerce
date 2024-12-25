import React from 'react'

const Card2 = () => {
  return (
    <div>
        <div className="w-full h-full px-[25px] py-[25px] flex flex-col gap-[10px]">
            <h5 className="font-Montserrat font-bold text-[24px] tracking-[0.1px] text-[#252B42]">Graphic Design</h5>
            <h5 className="font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] text-center">English Department</h5>
            <div className="flex justify-center gap-[5px]">
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] flex text-[#BDBDBD]">$16.48</h5>
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D] ">$6.48</h5>
            </div>
             <div className="flex justify-center gap-3">
              <div className='bg-[#23A6F0] w-[15px] h-[15px] rounded-full'></div>
               <div  className='bg-[#23856D] w-[15px] h-[15px] rounded-full'></div> 
               <div  className='bg-[#E77C40] w-[15px] h-[15px] rounded-full'></div>
                <div  className='bg-[#252B42] w-[15px] h-[15px] rounded-full'></div>
             </div>
        </div>
    </div>
  )
}

export default Card2