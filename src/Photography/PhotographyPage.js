import React from 'react'

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


                <img src={Ferry} alt='Ferry' />
                <img src={NYGrind} alt='New york Worker' />
                <img src={WTC} alt='World Trade Center' />

                <img src={Classic} alt='Classic' />
                <img src={GoldenGateBridge} alt='Golden Gate Bridge' />
                <img src={NewYorkWorker} alt='New York Worker' />

                <img src={ThroughTheTrees} alt='Tree sunrise' />
                <img src={Lot} alt='Lot' />
                <img src={Coastal} alt='Coastal' />

                <img src={LaurenHillside} alt='Lauren Hillside' />
                <img src={Isolated} alt='Isolated' />
                <img src={Heavenly} alt='Heavenly' />

                <img src={CreekBridge} alt='Creek Bridge' />
                <img src={HouseOnAPrarie} alt='House On A Prarie' />
                <img src={Horse} alt='Horse' />

                <img src={OldTown} alt='Old Town' />
                <img src={LightBreak} alt='Light Break' />
                <img src={Pond} alt='Pond' />

                <img src={Sign} alt='Signs' />
                <img src={Reflection} alt='Reflection' />
                <img src={Riding} alt='Riding' />

                <img src={TurquoiseSunset} alt='Coastal sunset' />
                <img src={TheRock} alt='Rock' />
                <img src={StarryNight} alt='Milky Way' />

                <img src={Waterfall} alt='Waterfall' />
                <img src={hawaii} alt='Golden Gate Bridge' />
                <img src={Waiting} alt='Waiting' />

                <img src={LaurenCanonBeach} alt='Lauren Canon Beach' />
                <img src={Frozen} alt='Frozen' />
                <img src={Foggy} alt='Foggy path' />


                <img src={ManOnABoat} alt='Man on a boat' />
                <img src={StormRising} alt='Stormy beach' />
                <img src={HouseOfRefuge} alt='House Of Refuge' />


            </div>


        </div>
    )
}

export default PhotographyPage