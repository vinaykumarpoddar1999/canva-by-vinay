import React from 'react'
import canvacover from "../../../public/canva-cover.jpg"
const TemplateDesign = () => {
  return (
    <>
      {
[1,2,3,4].map((d,i)=><div className='group w-full rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer'>
    <img className='w-full h-full rounded-sm overflow-hidden' src={canvacover} alt="" />
</div>)
      }
    </>
  )
}

export default TemplateDesign
