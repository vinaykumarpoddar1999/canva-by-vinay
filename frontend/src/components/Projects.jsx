import React from 'react'
import canvacover from '../../public/canva-cover.jpg'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
            <div className='h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
        <div className='grid grid-cols-2 gap-2'>
        {
            [1,2,3,54,54,54,5,4,6556,54,67,556,5453,43434,3,43434,4].map((img,i)=><Link key={i} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
            <img className='w-full h-full overflow-hidden rounded-sm cursor-pointer' src={canvacover} alt="cover" />

            </Link>)
        }

        </div>
      </div>
    </div>
  )
}

export default Projects
