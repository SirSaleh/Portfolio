"use client"

import PortfolioSinglePager from "../common_components/portfolio_single_pager"
import SkillItem from "../common_components/SkillItem";
import Credit from "../common_components/Credit";


interface BitparsersIncProps {
}

export default function BitparsersIncPage(props: BitparsersIncProps) {
    return (
    <PortfolioSinglePager>
        <Credit>
          Photo Credit: <a  target="_blank"
            href="https://unsplash.com/photos/city-view-during-nighttime-photography-uhn-U0sSxFQ">
              Alex Shutin - Unsplash
            </a>
        </Credit>
        <div id="base_bitparsers_page" className="base-bitparsers-page w-full h-screen bg-black">
          <div className="w-screen h-screen flex flex-col justify-center items-center p-4 text-left">
            <div id="bitparsers_description" className="bg-gray-900 bg-opacity-70 rounded-lg overflow-x-hidden overflow-y-scroll w-3/4 text-white m-auto text-sm p-1">
              <div>
                <p>
                  Bitparsers is a tech company located in Toronto, Canada. As a full-stack web developer and programmer at this company, I had a variety of responsibilities, including:
                </p>
                <ul style={{ listStyleType: 'disc' }}>
                  <li>Planned customers&apos; use cases,</li>
                  <li>Designed code architecture,</li>
                  <li>Developed customers&apos; websites and APIs,</li>
                  <li>Implemented unit tests,</li>
                  <li>Refactored code,</li>
                  <li>Reviewed code written by other developers, and</li>
                  <li>Mentored other developers on different projects.</li>
                </ul>
              </div>
              <div>
              <h3>Services of Bitparsers</h3>
              <ul>
                <li>
                  Developing Websites and Web Services for other companies. Main Technologies:
                  <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-yellow-500 text-black" title="EC2, S3, and lambda">AWS</SkillItem>
                </li>
                <li>Maintenance of Services</li>
              </ul>
            </div>
            <div>
              <h3>Products of Bitparsers</h3>
              <ul>
                <li>Developing 2 different Middleware Software for MadMapper (LightShifter and Lumos) with
                  a web-base control-panel; Main Technologies:
                  <SkillItem classNames="!bg-gray-600 text-white">Express.js</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-green-600 text-white">NginX</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-lime-300 text-lime-800">Celery</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem> &nbsp;
                  <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem>
                </li>
                <li>Developing a standalone light-mapping Software for RaspberryPi with a web-based control-panel. Main Technologies:
                  <SkillItem classNames="!bg-blue-900 text-yellow-300">Python</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-green-500 text-pink-600">Raspberry Pi</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-gray-500">Flask</SkillItem> &nbsp;
                  <SkillItem classNames="!bg-white text-yellow-600">Linux</SkillItem>
                </li>
                <li>
                  Developing Free Online Services for Calculations, Main Technologies:
                  <SkillItem classNames="!text-white !bg-green-700">Django</SkillItem> &nbsp;
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
