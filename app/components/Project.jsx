import { assets, workData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { SiGithub } from 'react-icons/si'

const Project = () => {
  return (
    <div id='projects'  className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Work</h4>
        <h2 className='text-center text-5xl font-Ovo'>Recent Projects</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development</p>

        <div className='grid grid-cols-auto  my-10 gap-5'>
            {workData.map((work,index)=>{
                return(
                    <div className='w-full aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={work.title} style={{backgroundImage:`url(${work.bgImage})`}}>
                        <div className=' bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex gap-4 items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold '>{work.title}</h2>
                                <p className='text-sm text-gray-700'>{work.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <a href={work.live_url} target='_blank'>
                                    <Image src={assets.send_icon}  alt='send' className='w-5'/>
                                </a>
                            </div>
                            <div>
                                <a href={work.repo} target='_blank'><SiGithub size={30} className=' rounded-full  hover:bg-lime-300 duration-500'/></a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
            <a className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500' href="https://vercel.com/gitvikas898s-projects?view=grid" target='_blank'>Show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4'/></a>
    </div>
  )
}

export default Project