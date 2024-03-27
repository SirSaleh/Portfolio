"use client";

import Image from "next/image";
import FirstPage from "./special components/first_page";
import { useEffect } from "react";

export default function Home() {

  useEffect(function(){
    console.log("hi");
  });

  return (
    <main>
      <FirstPage></FirstPage>
    </main>
  );
}
