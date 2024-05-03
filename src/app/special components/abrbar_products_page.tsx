"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import { SimplePortfolioGallery } from "../common_components/simple_portfolio_gallery";
import SkillItem from "../common_components/SkillItem"

interface AbrbarProductsProps {
}

export default function AbrbarProductsPage(props: AbrbarProductsProps) {
    return (
    <PortfolioSinglePager>
        <div id="base_bitparsers_products_page" className="base-bitparsers-products-page w-full h-screen bg-black text-white">
          <div className="h-screen flex flex-col justify-center">
            <SimplePortfolioGallery>
              <div>
                <img src="Pics/abrbar/main_web_large.png"></img>
                <div>The main web page of the Abrbar system in Persian
                  <div>
                    <SkillItem classNames="!bg-blue-900 text-yellow-300">Python</SkillItem>
                    <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                    <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem>
                    <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                  </div>
                </div>
              </div>
              <div>
                <img src="Pics/abrbar/abrbar_app_tracking.jpg"></img>
                <div>An example of the mobile application. I was the backend developer to generate required data
                    <div>
                      <SkillItem classNames="!bg-blue-900 text-yellow-300">Python</SkillItem>
                      <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                      <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem>
                      <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                    </div>
                   </div>
              </div>
              <div>
                <img src="Pics/abrbar/abrbar_app_stats.jpg"></img>
                <div>Another example of the mobile application. I was the backend developer to generate required data
                    <div>
                      <SkillItem classNames="!bg-blue-900 text-yellow-300">Python</SkillItem>
                      <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                      <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem>
                      <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                    </div>
                   </div>
              </div>
            </SimplePortfolioGallery>
          </div>
        </div>
    </PortfolioSinglePager>
  );
}
