"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import SkillItem from "../common_components/SkillItem";

interface WorkingStrategyProps {
}

export default function WorkingStrategyPage(props: WorkingStrategyProps) {
    return (
    <PortfolioSinglePager>
        <div id="base_working_strategy" className="flex justify-evenly relative flex-col md:flex-row justify-center w-full h-screen items-center bg-black overflow-y-scroll text-white">
          <div>
            <h3 className="text-center">My tools Are</h3>
            <ul id="soft_skill_holder" className="list-none p-0 mt-10 text-center">
              <li><SkillItem classNames="!bg-green-700 !text-lg">Team Work</SkillItem></li>
              <li><SkillItem classNames="!bg-green-600 !text-lg">Problem solving</SkillItem></li>
              <li><SkillItem classNames="!bg-green-400 !text-lg">Programming Skills</SkillItem></li>
              <li><SkillItem classNames="!bg-green-300 !text-lg">Math and statistics background</SkillItem></li>
            </ul>
          </div>
          <div>
            <h3 className="text-center">I will create</h3>
            <ul id="target_element_holder" className="list-none p-0">
              <li><SkillItem classNames="!bg-sky-300 !text-lg">Creative tools and services</SkillItem></li>
            </ul>
          </div>
        </div>
    </PortfolioSinglePager>
  );
}
