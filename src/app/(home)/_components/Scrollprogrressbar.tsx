"use client"

import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const documentScrollContainer = document.getElementById('scroll-container');
            if (!documentScrollContainer) return;

            // Get the total scrollable height
            const totalHeight = documentScrollContainer.scrollHeight - documentScrollContainer.clientHeight;
            // Get current scroll position of the container
            const currentScroll = documentScrollContainer.scrollTop;
            // Calculate progress percentage
            const scrollPercentage = (currentScroll / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, scrollPercentage)));
        };

        // Get the container element
        const scrollContainer = document.getElementById('scroll-container');
        if (!scrollContainer) return;

        // Add scroll event listener to the container instead of window
        scrollContainer.addEventListener('scroll', calculateScrollProgress);

        // Cleanup listener on component unmount
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', calculateScrollProgress);
            }
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    height: '100%',
                    width: `${scrollProgress}%`,
                    backgroundColor: '#ffffffb9',
                    transition: 'width 0.2s ease-out',
                }}
            />
        </div>
    );
};

export default ScrollProgressBar;