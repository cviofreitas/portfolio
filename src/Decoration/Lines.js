import React from 'react'
import { useEffect, useState } from 'react';
import './Lines.css'
const Lines = () => {
    const [circles, setCircles] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const newCircles = [];
        for (let i = 0; i < 100; i++) {
            const size = Math.floor(Math.random() * 100) + 2;
            const x = Math.floor(Math.random() * (window.innerWidth - size * 2)) + size;
            const y = Math.floor(Math.random() * (window.innerHeight - size * 2)) + size;
            const randomX = Math.random() < 0.5 ? -1 : 1;
            const randomY = Math.random() < 0.5 ? -1 : 1;
            newCircles.push({ size, x, y, randomX, randomY });
        }
        setCircles(newCircles);
    }, []);



    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='DecorationContainer' style={{
            opacity: `calc(0 + ${scrollPosition * 0.0035})`,
        }}>
            {circles.map((circle, index) => (
                <div className='Circle'
                    key={index}
                    style={{
                        position: 'absolute',
                        top: circle.y,
                        left: circle.x,
                        width: circle.size,
                        height: circle.size,
                        opacity: `calc(${circle.size} * .0013)`,
                        transform: `translate(${scrollPosition * circle.size * .002 * circle.randomX}px,${scrollPosition * circle.size * .001 * circle.randomY}px )`,
                    }}
                />
            ))}
        </div>
    );
}

export default Lines