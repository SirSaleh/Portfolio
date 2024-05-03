"use client"

import { useEffect, useRef } from "react";
import React, { ReactNode } from 'react';

interface SimplePortfolioGalleryProps {
    children: ReactNode;
}

function generateSlide(index: number, slideData: HTMLCollectionOf<HTMLElement>){
    const imgModifiedCSS = {
        maxWidth: '70vw',
        maxHeight: '70vh',
        marginBottom: '0.5rem',
    };

    if (slideData){
        if (slideData.props.children.length != 2){
            return ""
        }else{
            return (
                <div style={{display: 'none'}}>
                    {React.cloneElement(slideData.props.children[0], {
                        style: { ...slideData.props.children[0].props.style, ...imgModifiedCSS },
                        key: index,
                    })}
                    {slideData.props.children[1]}
                </div>
            )
        }
    }
}

function goToSlide(holderElement: HTMLDivElement | null, index: number){
    const slides = Array.from(holderElement.children);
    for (const slide of slides) {
        slide.style.display = "none";
    }
    holderElement.setAttribute("data-slide-index", index);
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

            <div data-slide-index="0" ref={imgHolderRef}>
                {React.Children.map(props.children, (child, index) => {
                    return generateSlide(index, child);
                })}
            </div>
            <div className="cursor-pointer text-lg" ref={nextBtnRef}>{`►`}</div>
        </div>
    )
}