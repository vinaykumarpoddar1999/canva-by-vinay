import React from "react";
import canvacover from '../../public/canva-cover.jpg'

const Image = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
    {
        [1,2,3,54,54,54,5,4,6556,54,67,556,5453,43434,3,43434,4].map((img,i)=><div key={i} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
        <img className='w-full h-full overflow-hidden rounded-sm cursor-pointer' src={canvacover} alt="cover" />

        </div>)
    }

    </div>
  );
};

export default Image;
