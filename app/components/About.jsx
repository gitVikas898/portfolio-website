import { assets, infoList } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { SiHtml5, SiCsswizardry,SiTailwindcss,SiReact  } from "react-icons/si";
import { FaJs } from "react-icons/fa6"
import { SiNextdotjs } from "react-icons/si";
const About = () => {

  const tools = [<SiHtml5 fill="orange" size={80} />,<SiCsswizardry fill="purple" size={80}/>,<FaJs fill="yellow" size={80}/>,<SiTailwindcss fill="cyan" size={80} />,<SiReact fill="blue" size={80}/>,<SiNextdotjs size={80}/>]


  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Aspiring MERN Stack developer with hands-on experience in HTML, CSS,
            JavaScript, and modern libraries like React. Proficient in building
            responsive, user-friendly interfaces and implementing dynamic
            features.
          </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map(({icon,iconDark,title,description},index)=>{
                return (
                  <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500  hover:shadow-black">
                      <Image src={icon} alt={title} className="w-7 mt-3"/>
                      <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                      <p className="text-sm text-gray-600">{description}</p>
                  </li>
                )
              })}
            </ul>

            <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>

              <ul className="flex items-center gap-3 sm:gap-5">
                  {tools.map((tool,index)=>{
                    return (
                      <li className="flex items-center justify-center w-12 sm:w-14 aspect-square  rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-tool" key={index}>{tool}</li>
                    )
                  })}
              </ul>
           
        </div>
      </div>
    </div>
  );
};

export default About;
