// This hook returns an object containing the window's width and height
// If executed server-side (no window object) 
// the value of width and height will be undefined

import { useState, useEffect } from 'react';

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const isClient = typeof window === 'object';
        
        const getSize = () => {
            return {
                width: isClient ? window.innerWidth : undefined,
                height: isClient ? window.innerHeight : undefined
            }
        }

        if(!isClient) {
            return false;
        }

        const handleResize = () => {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

export default useWindowSize;