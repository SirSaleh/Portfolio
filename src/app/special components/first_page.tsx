"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import SkillItem from "../common_components/SkillItem";
import Credit from "../common_components/Credit";
import { ReactNode, useEffect } from 'react';
import { animateBrick } from "../utils/animations";
import ContactBar from "./contact_bar";

interface PortfolioFirstPageProps {
}

export default function FirstPage(props: PortfolioFirstPageProps) {

    useEffect(() => {
      const wrapperElement = document.getElementById('skill_holder');
      if (wrapperElement) {
        animateBrick(wrapperElement, 200, 0);
      }
    }, []);

    return (
    <PortfolioSinglePager>
        <div className="flex relative flex-col justify-center w-full md:w-4/5 h-4/5 md:h-screen bg-black">
            <Credit>
              Credit Saleh Salehizadeh
            </Credit>
            <div className="text-white text-4xl align-middle text-center">
              Saleh Salehizadeh
            </div>
            <div className="text-white text-2xl align-middle text-center">
              Full-stack developer
            </div>
            <div id="skill_holder" className="skillCloudBox w-1/2 md:w-1/4  flex flex-wrap justify-center content-center mt-3 text-white text-1xl align-middle text-center w-1/2 mx-auto [&_*]:opacity-0">
                <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                <SkillItem classNames="!bg-gray-500">Flask</SkillItem>
                <SkillItem classNames="!bg-blue-900 text-yellow-300">Python</SkillItem>
                <SkillItem classNames="!bg-lime-300 text-lime-800">Celery</SkillItem>
                <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem>
                <SkillItem classNames="!bg-white text-sky-600">R</SkillItem>
                <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                <SkillItem classNames="!bg-yellow-500 text-black" title="EC2, S3, and lambda">AWS</SkillItem>
                <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem>
                <SkillItem classNames="!bg-gray-600 text-white">Express.js</SkillItem>
                <SkillItem classNames="!bg-white text-black">NextJS</SkillItem>
                <SkillItem classNames="!bg-white text-black">Jquery</SkillItem>
                <SkillItem classNames="!bg-sky-600 text-white">Tailwind CSS</SkillItem>
                <SkillItem classNames="!bg-violet-600 text-white">Bootstrap CSS</SkillItem>
                <SkillItem classNames="!bg-green-500 text-pink-600">Raspberry Pi</SkillItem>
                <SkillItem classNames="!bg-white text-black bg-gradient-to-r from-blue-600 via-green-500 to-yellow-400">NeoPixel</SkillItem>
            </div>
            <div className="absolute bottom-0 left-1/2 md:left-auto md:right-0 md:top-1/2 translate-y-1/2 md:-translate-y-1/2 -translate-x-1/4 md:translate-x-1/2">
              <img src="1.jpg" className="rounded-full w-1/2 md:w-full"></img>
            </div>
        </div>
        <div className="w-screen md:w-1/5 h-1/5 md:h-screen bg-gray-800">
          <ContactBar></ContactBar>
        </div>
    </PortfolioSinglePager>
  );
}
