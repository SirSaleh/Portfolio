"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import SkillItem from "../common_components/SkillItem";
import Credit from "../common_components/Credit";

interface IrasographyProps {
}

export default function IrasographyPage(props: IrasographyProps) {

    return (
    <PortfolioSinglePager>
        <Credit>
          Photo Credit: <a target="_blank"
            href="https://unsplash.com/photos/woman-taking-a-high-angle-photo-selective-focus-closeup-photo-AGy0SxTzqr8">
            Li Shanting - unsplash
          </a>
        </Credit>
        <div id="base_irasography_page" className="base-irasography-page w-full h-screen bg-black">
          <div className="w-screen h-screen flex flex-col justify-center items-center p-4 text-left">
            <div id="bitparsers_description" className="bg-gray-900 bg-opacity-70 rounded-lg overflow-x-hidden overflow-y-scroll w-3/4 text-white m-auto text-sm p-1">
              <div>
                <p>
                  Souban Company, was a popular company that provides customers with the ability to upload their professional or amateur photos in a web-service named Irasography.
                </p>
                <h3>My responsibilities:</h3>
                <ul>
                  <li>Developed services for photographers, initially as a backend developer in the first year, and as a full-stack developer in the second year.</li>
                  <li>Refactored legacy code in the system to enhance performance.</li>
                  <li>Implemented a fully RESTful API for all services, including accounts, gallery management, and photography competitions.</li>
                  <li>Designed a user-friendly UI for infinite scrolling in the gallery section of the Irasography website (front-end)</li>
                  <li>Created bash scripts for deployment purposes.</li>
                  <li>Guided co-developers on concepts such as asynchronous and synchronous programming, AJAX, and more in JavaScript.</li>
                </ul>
                <h3>Technologies</h3>
                <div>
                    <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem> &nbsp;
                    <SkillItem classNames="!bg-yellow-200 text-black">Javascript</SkillItem> &nbsp;
                    <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem> &nbsp;
                    <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem> &nbsp;
                </div>
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
