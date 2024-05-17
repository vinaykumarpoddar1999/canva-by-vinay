import React, { useRef } from 'react'
import {useLocation} from 'react-router-dom'
import CreateComponents from './CreateComponents'
const CreateDesign = () => {
    const {state} =useLocation()
    console.log(state);
    const ref=useRef()
    const obj = {
        name: "main_frame",
        type :"rect",
        id : Math.floor((Math.random()*100)+1),
        height: state.height,
        width: state.width,
        z_index:1,
        color:"#ccc",
        images:""
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
    <div ref={ref} className='relative w-auto h-auto overflow-auto'>
<CreateComponents info={obj} current_component={{}} removeComponent="" />
    </div>
      
    </div>
  )
}

export default CreateDesign
