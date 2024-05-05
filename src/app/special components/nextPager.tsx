"use client"

import { useEffect, useRef } from 'react';

function scrollToPosition(position: number){
    window.scrollTo({top: position, behavior: 'smooth'});
}

interface nextPagerProps {
}

export default function NextPager(props: nextPagerProps) {
    const nextPagerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!nextPagerRef.current){
            return
        }
        // window.innerHeight
        nextPagerRef.current.addEventListener("click", ()=>{
            const currentPage = Math.floor(Math.abs(document.body.getBoundingClientRect().top) / window.innerHeight);
            scrollToPosition(window.innerHeight * (currentPage+1));
        });
    }, []);

    return (
        <div className="fixed bottom-5 left-4 bg-white hover:bg-gray-600 hover:shadow-lg transition duration-500 ease-in-out rounded-full p-5 cursor-pointer" ref={nextPagerRef}>
            &#x25BC;
        </div>
  );
}
