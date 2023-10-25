import React from 'react'

import Classic from './images/Classic.jpg'
import Coastal from './images/Coastal.jpg'
import CreekBridge from './images/CreekBridge.jpg'
import Ferry from './images/Ferry.jpg'
import Frozen from './images/Frozen.jpg'
import GoldenGateBridge from './images/GoldenGateBridge.jpg'
import hawaii from './images/hawaii.jpg'
import Heavenly from './images/Heavenly.jpg'
import Horse from './images/Horse.jpg'
import HouseOfRefuge from './images/HouseOfRefuge.jpg'
import HouseOnAPrarie from './images/HouseOnAPrarie.jpg'
import Isolated from './images/Isolated.jpg'
import LaurenCanonBeach from './images/LaurenCanonBeach.jpg'
import LaurenHillside from './images/LaurenHillside.jpg'
import LightBreak from './images/LightBreak.jpg'
import Lot from './images/Lot.jpg'
import ManOnABoat from './images/ManOnABoat.jpg'
import NewYorkWorker from './images/NewYorkWorker.jpg'
import NYGrind from './images/NYGrind.jpg'
import OldTown from './images/OldTown.jpg'
import Pond from './images/Pond.jpg'
import Reflection from './images/Reflection.jpg'
import Riding from './images/Riding.jpg'
import Sign from './images/Sign.jpg'
import StarryNight from './images/StarryNight.jpg'
import TheRock from './images/TheRock.jpg'

import ThroughTheTrees from './images/ThroughTheTrees.jpg'
import TurquoiseSunset from './images/TurquoiseSunset.jpg'
import Waiting from './images/Waiting.jpg'
import Waterfall from './images/Waterfall.jpg'
import WTC from './images/WTC.jpg'
import Foggy from './images/Foggy.JPG'
import StormRising from './images/StormRising.jpg'

import './PhotographyPage.css'
const PhotographyPage = () => {
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


                <img loading='lazy' src={Classic} alt='Classic' />
                <img loading='lazy' src={Ferry} alt='Ferry' />
                <img loading='lazy' src={NYGrind} alt='New york Worker' />

                <img loading='lazy' src={WTC} alt='World Trade Center' />
                <img loading='lazy' src={NewYorkWorker} alt='New York Worker' />
                <img loading='lazy' src={GoldenGateBridge} alt='Golden Gate Bridge' />

                <img loading='lazy' src={ThroughTheTrees} alt='Tree sunrise' />
                <img loading='lazy' src={Lot} alt='Lot' />
                <img loading='lazy' src={Coastal} alt='Coastal' />

                <img loading='lazy' src={LaurenHillside} alt='Lauren Hillside' />
                <img loading='lazy' src={Isolated} alt='Isolated' />
                <img loading='lazy' src={Heavenly} alt='Heavenly' />

                <img loading='lazy' src={CreekBridge} alt='Creek Bridge' />
                <img loading='lazy' src={HouseOnAPrarie} alt='House On A Prarie' />
                <img loading='lazy' src={Horse} alt='Horse' />

                <img loading='lazy' src={OldTown} alt='Old Town' />
                <img loading='lazy' src={LightBreak} alt='Light Break' />
                <img loading='lazy' src={Pond} alt='Pond' />

                <img loading='lazy' src={Sign} alt='Signs' />
                <img loading='lazy' src={Reflection} alt='Reflection' />
                <img loading='lazy' src={Riding} alt='Riding' />

                <img loading='lazy' src={TurquoiseSunset} alt='Coastal sunset' />
                <img loading='lazy' src={TheRock} alt='Rock' />
                <img loading='lazy' src={StarryNight} alt='Milky Way' />

                <img loading='lazy' src={Waterfall} alt='Waterfall' />
                <img loading='lazy' src={hawaii} alt='Golden Gate Bridge' />
                <img loading='lazy' src={Waiting} alt='Waiting' />

                <img loading='lazy' src={LaurenCanonBeach} alt='Lauren Canon Beach' />
                <img loading='lazy' src={Frozen} alt='Frozen' />
                <img loading='lazy' src={Foggy} alt='Foggy path' />


                <img loading='lazy' src={ManOnABoat} alt='Man on a boat' />
                <img loading='lazy' src={StormRising} alt='Stormy beach' />
                <img loading='lazy' src={HouseOfRefuge} alt='House Of Refuge' />
            </div>


        </div>
    )
}

export default PhotographyPage