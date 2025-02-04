import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaGit, FaGithub, FaLinkedin, FaSquareTwitter, FaSquareXTwitter, FaTwitter, FaX } from 'react-icons/fa6'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div>
            <h1 className='text-4xl font-bold text-center mb-2'>Vikas<span className='text-red-600 text-4xl font-bold'>.</span></h1>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                <p>vikas.kumar.singh1198@gamil.com</p>
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>©️ 2025 Feel free to copy this, I did the same</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a className='flex items-center gap-2' target='_blank' href="https://github.com/gitVikas898"> <FaGithub/> GitHub</a></li>
                <li><a className='flex items-center gap-2' target='_blank' href="https://www.linkedin.com/in/vikas-kumar-singh-204742332/"> <FaLinkedin fill='#0072b1'/> LinkedIn</a></li>
                <li><a className='flex items-center gap-2' target='_blank' href="https://x.com/DevProgressLogs"><FaSquareXTwitter /> Twitter</a></li>
                <li><a className='flex items-center gap-2' target='_blank' href="https://leetcode.com/u/sonVikas898/"><SiLeetcode fill='orange' /> LeetCode</a></li>
                <li><a className='flex items-center gap-2' target='_blank' href="https://www.geeksforgeeks.org/user/sonvikas898/"><SiGeeksforgeeks fill='green' /> GFG</a></li>

            </ul>
        </div>
    </div>
  )
}

export default Footer