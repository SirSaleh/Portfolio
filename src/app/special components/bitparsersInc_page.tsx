"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import SkillItem from "../common_components/SkillItem";
import { useEffect } from 'react';
import { animateBrick } from "../utils/animations";

interface BitparsersIncProps {
}

export default function BitparsersIncPage(props: BitparsersIncProps) {

    useEffect(() => {
      let isAnimated = false;
      window.addEventListener("scroll", function() {
        const pageWrapperElement = document.getElementById('base_bitparsers_page');
        if (pageWrapperElement){
          if(window.scrollY >(pageWrapperElement.offsetHeight - pageWrapperElement.offsetTop / 2)){
            if (!isAnimated){ //from here
              isAnimated = true;
              const base_delay = 500;
              const wrapperElement = document.getElementById('bitparsers_description');
              if (wrapperElement) {
                animateBrick(wrapperElement, base_delay, 0);
              }
            }
          }
        }
      });
    }, []);

    return (
    <PortfolioSinglePager>
        <div id="base_bitparsers_page" className="base-bitparsers-page w-full h-screen bg-black">
          <div className="w-screen h-screen flex flex-col md:flex-row justify-evenly p-4 text-left">
            <div id="bitparsers_description" className="bg-gray-900 bg-opacity-70 rounded-lg	 item-holder w-screen md:w-1/2 text-white m-auto text-sm flex flex-col justify-center p-10 m-auto">
              <div>
                <p>
                  Bitparsers is a tech company located in Toronto, Canada. As a full-stack web developer and programmer at this company, I had a variety of responsibilities, including:
                </p>
                <ul>
                  <li>Planning customers' use cases,</li>
                  <li>Designing code architecture,</li>
                  <li>Developing customers' websites and APIs,</li>
                  <li>Implementing unit tests,</li>
                  <li>Refactoring code,</li>
                  <li>Reviewing code written by other developers, and</li>
                  <li>Mentoring other developers on different projects.</li>
                </ul>
              </div>
              <div>
                <h3>Services of Bitparsers</h3>
                <ul>
                  <li>
                    Developing Websites and Web Services for other companies. Main Technologies:
                    <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                    <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem>
                    <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                    <SkillItem classNames="!bg-yellow-500 text-black" title="EC2, S3, and lambda">AWS</SkillItem>
                  </li>
                  <li>Maintenance of Services</li>
                </ul>
              </div>
              <div>
                <h3>Products of Bitparsers</h3>
                <ul>
                  <li>2 different Middleware Software for MadMapper (LightShifter and Lumos) with
                    a web-base control-panel; Main Technologies:
                    <SkillItem classNames="!bg-gray-600 text-white">Express.js</SkillItem>
                    <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem>
                    <SkillItem classNames="!bg-lime-300 text-lime-800">Celery</SkillItem>
                    <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                    <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                  </li>
                  <li>A standalone light-mapping Software for RaspberryPi with a web-based control-panel. Main Technologies:
                    <SkillItem classNames="!bg-blue-900 text-yellow-300">Python</SkillItem>
                    <SkillItem classNames="!bg-green-500 text-pink-600">Raspberry Pi</SkillItem>
                    <SkillItem classNames="!bg-gray-500">Flask</SkillItem> </li>
                    <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                  <li>
                    Free Online Services for Calculations, Main Technologies:
                    <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                    <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-screen md:w-1/2">
              {/* <img src="Pics/bitparsers/biparsers_tweb_large.jpg"></img> */}
            </div>

          </div>
        </div>
    </PortfolioSinglePager>
  );
}
