import { useEffect } from "react";

interface PortfolioSinglePagerProps {
    children: ReactNode;
}

export default function PortfolioSinglePager(props: PortfolioSinglePagerProps) {

    return (
    <div className="w-screen h-screen w-full flex flex-wrap">
        {props.children}
    </div>
  );
}
