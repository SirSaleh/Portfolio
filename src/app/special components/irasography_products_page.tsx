"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import { useEffect } from 'react';
import { animateBrick } from "../utils/animations";
import { SimplePortfolioGallery } from "../common_components/simple_portfolio_gallery";
import SkillItem from "../common_components/SkillItem"

interface IrasographyProductsProps {
}

export default function IrasographyProductsPage(props: IrasographyProductsProps) {
    return (
    <PortfolioSinglePager>
        <div id="base_irasography_products_page" className="base-irasography-products-page w-full h-screen bg-black text-white">
          <div className="h-screen flex flex-col justify-center">
            <SimplePortfolioGallery>
              <div>
                <img src="Pics/Irasography/homePage.png"></img>
                <div>First Page of the Irasography website
                  <div>
                      <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem> &nbsp;
                      <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem> &nbsp;
                      <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem> &nbsp;
                      <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem> &nbsp;
                  </div>
                </div>
              </div>
              <div>
                <img src="Pics/Irasography/menuSidebar.png"></img>
                <div>
                  The sidebar navigation menu on the landing page served as a gateway to essential features such as photo and gallery uploads, liking, commenting, and participation in photography competitions.
                  <div>
                      <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem> &nbsp;
                      <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem> &nbsp;
                      <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem> &nbsp;
                      <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem> &nbsp;
                  </div>
                </div>
              </div>
            </SimplePortfolioGallery>
          </div>
        </div>
    </PortfolioSinglePager>
  );
}
