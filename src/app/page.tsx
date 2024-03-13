"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(function(){
    console.log("hi");
  });

  return (
    <main>
      <div className="w-screen h-screen w-full flex flex-wrap">
        <div className="flex relative flex-col justify-center w-full md:w-4/5 h-4/5 md:h-screen bg-black">
          <div className="text-white relative text-5xl align-middle text-center">
            Saleh Salehizadeh
          </div>
          <div className="text-white text-2xl align-middle text-center">
            Full-stack developer
          </div>
          <div className="absolute bottom-0 left-1/2 md:left-auto md:right-0 md:top-1/2 translate-y-1/2 md:-translate-y-1/2 -translate-x-1/2 md:translate-x-1/2">
            <img src="1.jpg" className="rounded-full"></img>
          </div>
        </div>
        <div className="w-screen md:w-1/5 h-1/5 md:h-screen bg-gray-600">
        </div>
      </div>
    </main>
  );
}
