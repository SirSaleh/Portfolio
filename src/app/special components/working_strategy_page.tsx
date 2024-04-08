"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import SkillItem from "../common_components/SkillItem";
import { useEffect } from 'react';
import { animateBrick } from "../utils/animations";

interface WorkingStrategyProps {
}

export default function WorkingStrategyPage(props: WorkingStrategyProps) {

    useEffect(() => {
      let isAnimated = false;
      window.addEventListener("scroll", function() {
        const pageWrapperElement = document.getElementById('base_working_strategy');
        if (pageWrapperElement){
          if(window.scrollY >(pageWrapperElement.offsetHeight - pageWrapperElement.offsetTop / 2)){
            if (!isAnimated){
              isAnimated = true;
              const base_delay = 500;
              const wrapperElement = document.getElementById('soft_skill_holder');
              if (wrapperElement) {
                animateBrick(wrapperElement, base_delay);
              }
              const targetElement = document.getElementById('target_element_holder');
              if (targetElement) {
                animateBrick(targetElement, base_delay);
              }
            }
          }
        }
      });
    }, []);

    return (
    <PortfolioSinglePager>
        <div id="base_working_strategy" className="flex justify-evenly relative flex-col md:flex-row justify-center w-full h-screen bg-black">
          <div id="soft_skill_holder" className="flex flex-row md:flex-col flex-wrap justify-center  w-screen md:w-1/2 [&_*]:opacity-0 [&_*]:z-0 [&_*]:m-auto [&_*]:rounded-lg">
            <div className="text-white">My tools Are</div>
            <SkillItem classNames="strategy-item !p-10 !bg-yellow-300 w-screen md:w-1/2">Team work</SkillItem>
            <SkillItem classNames="strategy-item !p-10 !bg-yellow-300 w-screen md:w-1/2">Programming Skills (language agnostic) </SkillItem>
            <SkillItem classNames="strategy-item !p-10 !bg-yellow-300 w-screen md:w-1/2">Problem solving</SkillItem>
            <SkillItem classNames="strategy-item !p-10 !bg-yellow-300 w-screen md:w-1/2">Math and statistics background</SkillItem>
          </div>
          <div id="target_element_holder" className="flex flex-col flex-wrap justify-center content-center w-screen md:w-1/2 [&_*]:opacity-0 [&_*]:m-auto">
            <div className="text-white">I will create</div>
            <SkillItem classNames="!p-10 !bg-orange-500">Creative tools
and services
            </SkillItem>
            <div>
              
            </div>
          </div>
        </div>
    </PortfolioSinglePager>
  );
}
