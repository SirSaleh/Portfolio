"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import { useEffect } from 'react';
import { animateBrick } from "../utils/animations";
import { SimplePortfolioGallery } from "../common_components/simple_portfolio_gallery";
import SkillItem from "../common_components/SkillItem"

interface BitparsersProductsProps {
}

export default function BitparsersProductsPage(props: BitparsersProductsProps) {
    return (
    <PortfolioSinglePager>
        <div id="base_bitparsers_products_page" className="base-bitparsers-products-page w-full h-screen bg-black text-white">
          <div className="h-screen flex flex-col justify-center">
            <SimplePortfolioGallery>
              <div>
                <img src="Pics/bitparsers/catVsLightblender.gif"></img>
                <div>A simple effect generated by Light-blender
                   (our light-mapping product) and MeowUser&apos;s reaction to it.
                   <SkillItem classNames="!bg-blue-900 text-yellow-300">Python</SkillItem>
                   <SkillItem classNames="!bg-green-500 text-pink-600">Raspberry Pi</SkillItem>
                   <SkillItem classNames="!bg-white text-black">Jquery</SkillItem>
                   <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                   <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem>
                   <SkillItem classNames="!bg-gray-500">Flask</SkillItem>
                   </div>
              </div>
              <div>
                <img src="Pics/bitparsers/lb1.jpg"></img>
                <p>Light-blender Box. Light-blender has a web-based control-panel to control effects on led

                    <SkillItem classNames="!bg-blue-900 text-yellow-300">Python</SkillItem>
                   <SkillItem classNames="!bg-green-500 text-pink-600">Raspberry Pi</SkillItem>
                   <SkillItem classNames="!bg-white text-black">Jquery</SkillItem>
                   <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                   <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem>
                   <SkillItem classNames="!bg-gray-500">Flask</SkillItem>
                </p>
              </div>
              <div>
                <img src="Pics/bitparsers/dnbuy.png"></img>
                <p>DNBuy is a domain reseller service, which I developed a new backend for them.

                  <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                  <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem>
                  <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                </p>
              </div>
              <div>
                <img src="Pics/bitparsers/biparsers_tweb_large.jpg"></img>
                <p>Bitparsers itself was a website to introduce the company, and also provided some online services.

                  <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                  <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem>
                  <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                  <SkillItem classNames="!bg-yellow-500 text-black" title="EC2, S3, and lambda">AWS</SkillItem>
                </p>
              </div>
            </SimplePortfolioGallery>
          </div>
        </div>
    </PortfolioSinglePager>
  );
}
