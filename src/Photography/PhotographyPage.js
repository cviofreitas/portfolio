import React, { useState } from 'react'
import { useClickAway } from "@uidotdev/usehooks";

import Classic from './images2/Classic.jpg'
import Coastal from './images2/Coastal.jpg'
import CreekBridge from './images2/CreekBridge.jpg'
import Ferry from './images2/Ferry.jpg'
import Frozen from './images2/Frozen.jpg'
import GoldenGateBridge from './images2/GoldenGateBridge.jpg'
import hawaii from './images2/hawaii.jpg'
import Heavenly from './images2/Heavenly.jpg'
import Horse from './images2/Horse.jpg'
import HouseOfRefuge from './images2/HouseOfRefuge.jpg'
import HouseOnAPrarie from './images2/HouseOnAPrarie.jpg'
import Isolated from './images2/Isolated.jpg'
import LaurenCanonBeach from './images2/LaurenCanonBeach.jpg'
import LaurenHillside from './images2/LaurenHillside.jpg'
import LightBreak from './images2/LightBreak.jpg'
import Lot from './images2/Lot.jpg'
import ManOnABoat from './images2/ManOnABoat.jpg'
import NewYorkWorker from './images2/NewYorkWorker.jpg'
import NYGrind from './images2/NYGrind.jpg'
import OldTown from './images2/OldTown.jpg'
import Pond from './images2/Pond.jpg'
import Reflection from './images2/Reflection.jpg'
import Riding from './images2/Riding.jpg'
import Sign from './images2/Sign.jpg'
import StarryNight from './images2/StarryNight.jpg'
import TheRock from './images2/TheRock.jpg'
import ThroughTheTrees from './images2/ThroughTheTrees.jpg'
import TurquoiseSunset from './images2/TurquoiseSunset.jpg'
import Waiting from './images2/Waiting.jpg'
import Waterfall from './images2/Waterfall.jpg'
import WTC from './images2/WTC.jpg'
import Foggy from './images2/Foggy.JPG'
import StormRising from './images2/StormRising.jpg'

import './PhotographyPage.css'
const PhotographyPage = () => {
    const [largeImgIndex, setLargeImageIndex] = useState(null)

    function handleClick(index) {
        console.log('clicked')
        setLargeImageIndex(index)
    }

    const ref = useClickAway(() => {
        setLargeImageIndex(null);
    });
    const portfolio = [
        {
            src: Ferry,
            alt: 'Ferry',
        },
        {
            src: NYGrind,
            alt: 'New York Worker',
        },
        {
            src: WTC,
            alt: 'World Trade Center',
        },
        {
            src: Classic,
            alt: 'Classic',
        },
        {
            src: GoldenGateBridge,
            alt: 'Golden Gate Bridge',
        },
        {
            src: NewYorkWorker,
            alt: 'New York Worker',
        },
        {
            src: ThroughTheTrees,
            alt: 'Tree sunrise',
        },
        {
            src: Lot,
            alt: 'Lot',
        },
        {
            src: Coastal,
            alt: 'Coastal',
        },
        {
            src: LaurenHillside,
            alt: 'Lauren Hillside',
        },
        {
            src: Isolated,
            alt: 'Isolated',
        },
        {
            src: Heavenly,
            alt: 'Heavenly',
        },
        {
            src: CreekBridge,
            alt: 'Creek Bridge',
        },
        {
            src: HouseOnAPrarie,
            alt: 'House On A Prarie',
        },
        {
            src: Horse,
            alt: 'Horse',
        },
        {
            src: OldTown,
            alt: 'Old Town',
        },
        {
            src: LightBreak,
            alt: 'Light Break',
        },
        {
            src: Pond,
            alt: 'Pond',
        },
        {
            src: Sign,
            alt: 'Signs',
        },
        {
            src: Reflection,
            alt: 'Reflection',
        },
        {
            src: Riding,
            alt: 'Riding',
        },
        {
            src: TurquoiseSunset,
            alt: 'Coastal sunset',
        },
        {
            src: TheRock,
            alt: 'Rock',
        },
        {
            src: StarryNight,
            alt: 'Milky Way',
        },
        {
            src: Waterfall,
            alt: 'Waterfall',
        },
        {
            src: hawaii,
            alt: 'Hawaii Beach',
        },
        {
            src: Waiting,
            alt: 'Waiting',
        },
        {
            src: LaurenCanonBeach,
            alt: 'Lauren Canon Beach',
        },
        {
            src: Frozen,
            alt: 'Frozen',
        },
        {
            src: Foggy,
            alt: 'Foggy path',
        },
        {
            src: ManOnABoat,
            alt: 'Man on a boat',
        },
        {
            src: StormRising,
            alt: 'Stormy beach',
        },
        {
            src: HouseOfRefuge,
            alt: 'House Of Refuge',
        },
    ];


    return (
        <div className='photography-portfolio'>
            <div className='photography-summary'>
                <h3>
                    These are some of my favorite photos I've taken over the years.
                </h3>
                <h3>
                    Enjoy!
                </h3>
            </div>
            <div className='container'>
                {portfolio.map((image, index) =>
                    <img
                        onClick={() => handleClick(index)}
                        src={image.src}
                        alt={image.alt}
                    />)}
            </div>
            {largeImgIndex != null ?
                <div className='high-lighted-image-container'>

                    {portfolio.filter((image, index) => index === largeImgIndex).map(image =>
                        <img
                            ref={ref}
                            src={image.src}
                            alt={image.alt} />
                    )}
                </div>
                :
                <></>}



        </div>
    )
}

export default PhotographyPage