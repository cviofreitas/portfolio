import { React, useState } from 'react'

import './Portfolio.css'
import ProjectCard from '../ProjectCard'
import ProjectCardMobile from '../ProjectCardMobile'

import projectsArray from '../projectsArray'

const CarouselPorftolio = () => {
    const [count, setCount] = useState(0)
    const [direction, setDirection] = useState('')


    const carouselArray = (array, currValue) => {
        let newArray = []
        console.log(currValue)

        if (currValue == array.length || currValue <= 0 - array.length) { setCount(0) }
        newArray.push(array.at(currValue))
        newArray.unshift(array.at(currValue - 1))
        newArray.unshift(array.at(currValue - 2))
        newArray.push(array.at(currValue > array.length - 2 ? 0 : currValue + 1))
        newArray.push(array.at(currValue > array.length - 2 ? 1 : currValue + 2))
        return (newArray)
    }

    const moveRight = () => {

        setDirection('right')
        setTimeout(() => {
            setDirection('');
            setCount(count + 1);
        }, 500)
    }
    const moveLeft = () => {

        setDirection('left')
        setTimeout(() => {
            setDirection('')
            setCount(count - 1);
        }, 500)
    }
    return (
        <div className='PortfolioContainer FlexColumn FlexCenter'>
            <div class="Desktop">
                <button className='ScrollButton Left' onClick={() => moveLeft()} />
                <div className='ProjectCardContainer'>
                    {
                        carouselArray(projectsArray, count).map((project, index) =>
                            <ProjectCard project={project} index={index} direction={direction} />)
                    }
                </div>
                <button className='ScrollButton Right' onClick={() => moveRight()} />
            </div>

            <div className='Mobile'>

            </div>
            <div class="Mobile">
                <div className='ProjectCardContainer'>
                    {
                        projectsArray.map((project, index) =>
                            <ProjectCardMobile project={project} index={index} direction={direction} />)
                    }
                </div>
            </div>

            <div className='Mobile'>

            </div>




        </div>

    )
}

export default CarouselPorftolio