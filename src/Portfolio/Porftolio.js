import { React, useState } from 'react'
import { useEffect } from 'react'

import './Portfolio.css'
import Project from './Project'
import ProjectCardMobile from './ProjectCardMobile'

import projectsArray from './projectsArray'

const Porftolio = () => {
    const [count, setCount] = useState(0)
    const [direction, setDirection] = useState('')

    // old code for carousel *not in use*

    // const carouselArray = (array, currValue) => {
    //     let newArray = []

    //     if (currValue == array.length || currValue <= 0 - array.length) { setCount(0) }
    //     newArray.push(array.at(currValue))
    //     newArray.unshift(array.at(currValue - 1))
    //     newArray.unshift(array.at(currValue - 2))
    //     newArray.push(array.at(currValue > array.length - 2 ? 0 : currValue + 1))
    //     newArray.push(array.at(currValue > array.length - 2 ? 1 : currValue + 2))
    //     return (newArray)
    // }

    const [scrollPosition, setScrollPosition] = useState(0);
    const [indexNum, setIndexNum] = useState(-1)

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
            scrollPosition < 100 ? setIndexNum(-1) : setIndexNum(1)
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);




    return (
        <div className={`PortfolioContainer FlexColumn FlexCenter ${scrollPosition > 10 ? '' : 'disableClick'}`}
            style={{
                zIndex: `${indexNum}`,
                opacity: `calc(0 + ${scrollPosition * 0.003})`,
            }}>
            <div class="Desktop">
                <div className='ProjectCardContainer  FlexColumn Gap20 Padding20'>
                    {
                        projectsArray.map((project, index) =>
                            <Project project={project} index={index} direction={direction} />)
                    }
                </div>
            </div>
            <div class="Mobile">
                <div className='ProjectCardContainer'>
                    {
                        projectsArray.map((project, index) =>
                            <ProjectCardMobile project={project} index={index} direction={direction} />)
                    }
                </div>
            </div>
        </div>

    )
}

export default Porftolio