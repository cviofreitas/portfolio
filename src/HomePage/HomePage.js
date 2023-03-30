import React from 'react'
import './HomePage.css'
import me from './ProfilePicture.JPG'
import jQuery from './logos/jQuery.png'
import MaterialUi from './logos/MaterialUi.png'
import css from './logos/css.png'
import html from './logos/html.png'
import js from './logos/js.png'
import Nodejs from './logos/Nodejs.png'
import Python from './logos/Python.png'
import Reactlogo from './logos/Reactlogo.png'
import Redux from './logos/Redux.png'
import typescript from './logos/typescript.png'
const HomePage = () => {
    return (
        <div className='HomePageContainer'>

            <div className='HomePageInfoContainer FlexRow FlexCenter FlexBetween'>
                <div className='AboutMeInfo MarginRight20' >
                    <div className='MarginBottom20'>
                        <h2>
                            Hi, I'm Caio
                        </h2>
                    </div>
                    <h3 className='MarginBottom20'>
                        Software Developer, Photographer, Architect
                    </h3>
                    <p className='MarginBottom20'>
                        Creative problem solver with a focus on Frontend Development and over six years of design experience.
                    </p>

                    <div>
                        <img className='LanguageLogos' src={Reactlogo} alt='React Logo' />
                        <img className='LanguageLogos' src={Redux} alt='Redux Logo' />
                        <img className='LanguageLogos' src={typescript} alt='TypeScript Logo' />
                        <img className='LanguageLogos' src={Nodejs} alt='Node Logo' />
                        <img className='LanguageLogos' src={html} alt='HTML Logo' />
                        <img className='LanguageLogos' src={css} alt='CSS Logo' />
                        <img className='LanguageLogos' src={js} alt='JS Logo' />
                        <img className='LanguageLogos' src={jQuery} alt='jQuery Logo' />
                        <img className='LanguageLogos' src={MaterialUi} alt='Material UI Logo' />
                        <img className='LanguageLogos' src={Python} alt='Material UI Logo' />
                    </div>
                </div>

                <div className='outline'>
                    <img src={me} alt="Picture of me" id='HomePagePicture' />
                </div>





            </div>
        </div>
    )
}

export default HomePage

