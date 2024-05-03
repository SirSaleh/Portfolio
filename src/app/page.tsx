
import Image from "next/image";
import FirstPage from "./special components/first_page";
import { useEffect } from "react";
import WorkingStrategyPage from "./special components/working_strategy_page";
import BitparsersIncPage from "./special components/bitparsersInc_page"
import BitparsersProductsPage from "./special components/bitparsers_products_page";
import AbrbarPage from "./special components/abrbar_page";

export default function Home() {
  return (
    <main>
      <FirstPage></FirstPage>
      <WorkingStrategyPage></WorkingStrategyPage>
      <BitparsersIncPage></BitparsersIncPage>
      <BitparsersProductsPage></BitparsersProductsPage>
      <AbrbarPage></AbrbarPage>
    </main>
  );
}
