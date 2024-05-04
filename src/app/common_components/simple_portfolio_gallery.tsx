"use client"

import { useEffect, useRef } from "react";
import React, { ReactNode } from 'react';

interface SimplePortfolioGalleryProps {
    children: ReactNode;
}

function generateSlide(index: number, slideData: any){
    const imgModifiedCSS = {
        maxWidth: '50vw',
        maxHeight: '50vh',
    };

    if (slideData){
        if (slideData.props.children.length != 2){
            return ""
        }else{
            return (
                <div style={{display: 'none'}}>
                    <div className="flex flex-col justify-center" style={{minHeight: "70vh"}}>
                        {React.cloneElement(slideData.props.children[0], {
                            style: { ...slideData.props.children[0].props.style, ...imgModifiedCSS },
                            key: index,
                        })}
                    </div>
                    <div>
                        {slideData.props.children[1]}
                    </div>
                </div>
            )
        }
    }
}

function goToSlide(holderElement: HTMLElement | null, index: number){
    if (!holderElement){
        return
    }
    const slides = Array.from(holderElement.children) as HTMLElement[];
    for (const slide of slides) {
        if (!slide.style){
            return
        }
        slide.style.display = "none";
    }
    holderElement.setAttribute("data-slide-index", String(index));
    const normalizedIndex = index % slides.length;
    if (slides[normalizedIndex]){
        slides[normalizedIndex].style.display = "block";
    }
}

export function SimplePortfolioGallery(props: SimplePortfolioGalleryProps){
    const imgHolderRef = useRef<HTMLDivElement>(null);
    const prevBtnRef = useRef<HTMLDivElement>(null);
    const nextBtnRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const imgHolderElement = imgHolderRef.current;
        const prevBtnButton = prevBtnRef.current;
        const nextBtnButton = nextBtnRef.current;

        if (!imgHolderElement){
            return
        }

        if (imgHolderElement){
            goToSlide(imgHolderElement, 0);
        }

        if (prevBtnButton){
            prevBtnButton.addEventListener('click', (e) => {
                const currentSlideIndex: number = Number(imgHolderElement.getAttribute('data-slide-index'));
                goToSlide(imgHolderElement, Math.abs(currentSlideIndex-1));
            });
        }

        if (nextBtnButton){
            nextBtnButton.addEventListener('click', (e) => {
                const currentSlideIndex: number = Number(imgHolderElement.getAttribute('data-slide-index'));
                goToSlide(imgHolderElement, currentSlideIndex+1);
            });
        }

    }, []);

    return (
        <div className="w-screen text-center flex flex-row justify-center [&_*]:m-auto">
            <div className="cursor-pointer text-lg" ref={prevBtnRef}>{`◄`}</div>

            <div data-slide-index="0" style={{width: "100vh", minHeight: '50vh'}} ref={imgHolderRef}>
                {React.Children.map(props.children, (child, index) => {
                    return generateSlide(index, child);
                })}
            </div>
            <div className="cursor-pointer text-lg" ref={nextBtnRef}>{`►`}</div>
        </div>
    )
}