
import FirstPage from "./special components/first_page";
import WorkingStrategyPage from "./special components/working_strategy_page";
import BitparsersIncPage from "./special components/bitparsersInc_page"
import BitparsersProductsPage from "./special components/bitparsers_products_page";
import AbrbarPage from "./special components/abrbar_page";
import AbrbarProductsPage from "./special components/abrbar_products_page";
import NextPager from "./special components/nextPager";
import IrasographyPage from './special components/irasography_page';
import IrasographyProductsPage from './special components/irasography_products_page';

export default function Home() {
  return (
    <main>
      <FirstPage></FirstPage>
      <WorkingStrategyPage></WorkingStrategyPage>
      <BitparsersIncPage></BitparsersIncPage>
      <BitparsersProductsPage></BitparsersProductsPage>
      <AbrbarPage></AbrbarPage>
      <AbrbarProductsPage></AbrbarProductsPage>
      <NextPager></NextPager>
      <IrasographyPage></IrasographyPage>
      <IrasographyProductsPage></IrasographyProductsPage>
    </main>
  );
}
