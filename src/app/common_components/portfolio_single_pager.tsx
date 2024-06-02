import { ReactNode } from 'react';

interface PortfolioSinglePagerProps {
    children: ReactNode;
}

export default function PortfolioSinglePager(props: PortfolioSinglePagerProps) {

    return (
    <div className="relative w-screen h-screen w-full flex flex-wrap">
        {props.children}
    </div>
  );
}
