"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import { useEffect } from 'react';
import { animateBrick } from "../utils/animations";
import Credit from "../common_components/Credit";

interface AbrbarProps {
}

export default function AbrbarPage(props: AbrbarProps) {

    useEffect(() => {
      let isAnimated = false;
      window.addEventListener("scroll", function() {
        const pageWrapperElement = document.getElementById('base_abrbar_page');
        if (pageWrapperElement){
          if(window.scrollY >(pageWrapperElement.offsetHeight - pageWrapperElement.offsetTop / 2)){
            if (!isAnimated){ //from here
              isAnimated = true;
              const base_delay = 500;
              const wrapperElement = document.getElementById('abrbar_description');
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
        <Credit>
          Photo Credit: 
          <a target="_blank" href="https://unsplash.com/photos/white-and-blue-truck-on-road-during-daytime-mVqTumQH-c0">
            Zetong Li - Unsplash
          </a>
        </Credit>
        <div id="base_abrbar_page" className="base-abrbar-page w-full h-screen bg-black">
          <div className="w-screen h-screen flex flex-col justify-center items-center p-4 text-left">
            <div id="abrbar_description" className="bg-gray-900 bg-opacity-70 rounded-lg overflow-x-hidden overflow-y-scroll w-3/4 text-white m-auto text-sm p-1">
              <div>
                <p>
                Abrbar was a transportation company highly active in the transportation industry, specializing in heavy-scaled cargo, truck, drivers, and customer management.
                </p>
                <ul>
                  <li>Maintained clean code in the Django web framework,</li>
                  <li>Acted as the connecting rope in the team, translating the needs of the product
owner into the technical roadmap used by myself and mobile developers in the
team,</li>
                  <li>Conducted unit testing with more than 80% test coverage.,</li>
                  <li>Developed a user-friendly and functional PWA control panel for admins, drivers,
and customers (cargo owners),</li>
                  <li>Refactored legacy components of the Abrbar system,</li>
                  <li>Implemented a fully-documented deployment pipeline</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
    </PortfolioSinglePager>
  );
}
