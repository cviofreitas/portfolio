import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import me from "./ProfilePicture.JPG";
import jQuery from "./logos/jQuery.png";
import MaterialUi from "./logos/MaterialUi.png";
import css from "./logos/css.png";
import html from "./logos/html.png";
import js from "./logos/js.png";
import Nodejs from "./logos/Nodejs.png";
import Python from "./logos/Python.png";
import Reactlogo from "./logos/Reactlogo.png";
import Redux from "./logos/Redux.png";
import typescript from "./logos/typescript.png";
import WordPress from "./logos/WordPressLogo.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useClickAway } from "@uidotdev/usehooks";
import Porftolio from "../Portfolio/Porftolio";
const HomePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [aboutSelected, setAboutSelected] = useState(true);


    const languagesArray = [html, css, js, typescript, jQuery, Reactlogo, Redux, Python, Nodejs, MaterialUi, WordPress]

    const ref = useClickAway(() => {
        setAboutSelected(true);
    });
    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function scrollToProjects(num) {
        window.scrollBy({
            top: num,
            behavior: "smooth",
        });
    }

    const navigate = useNavigate()
    function handleNavigate() {
        navigate('/photography')
    }

    return (
        <div className="HomePageContainer">
            <div className="HomePageInfoContainer FlexColumn FlexCenter FlexBetween">
                <div className="FlexRow FlexCenter FlexBetween AboutMeContainer Desktop">
                    <div
                        className="AboutMeInfo MarginRight20"
                        style={{
                            transform: `translateX(${scrollPosition * -1.5}px)`,
                            opacity: `calc(1 - ${scrollPosition * 0.0035})`,
                        }}>
                        <div className="MarginBottom20">
                            <h2>Hi, I'm Caio</h2>
                        </div>
                        <h3 className="MarginBottom20">
                            Software Developer, Photographer, Architect
                        </h3>
                        <p className="MarginBottom20">
                            With over 3 years of software development, design and project management experience, I've worked on several projects including Davey Award Winning websites as well as developing frontend code in collaboration with Webby Award Winning UI/UX teams.
                        </p>

                        <div>
                            {languagesArray.map((img, index) => (
                                <img
                                    key={index}
                                    className="LanguageLogos"
                                    src={img}
                                    style={{
                                        animation: `slideIn ${index / 2}s ease`,
                                    }}
                                    alt='language logo' />
                            ))}

                        </div>


                    </div>

                    <div className="profile-picture card"
                        style={{
                            transform: `translateX(${scrollPosition * 1.5}px)`,
                            opacity: `calc(1 - ${scrollPosition * 0.0035})`,
                        }}>
                        <div className={`card-inner ${!aboutSelected ? 'card-flipped' : ''}`}>
                            <div className="card-front" >
                                <img src={me} alt="Profile" id="HomePagePicture" />
                            </div>
                            <div className="card-back" >
                                <p>
                                    With a blend of <b>architecture</b> and <b>frontend development</b>, I bring the world of design and creativity to the digital realm. My background in architecture and design is a symphony of aesthetics and functionality, enabling me to create digital spaces that seamlessly marry <b>form</b> and <b>function</b>. As an architect designs awe-inspiring buildings, I craft captivating UI/UX, where every line of code is an architectural blueprint, and every user interface is a work of art.
                                </p>
                                <p>
                                    Meticulous attention to detail and appreciation for aesthetics is the foundation of who I am as a Frontend Developer, ensuring that every pixel and interaction is not just code but a masterpiece. Coding isn't just about functionality; it's about orchestrating digital experiences that echo the elegance and precision of architects like Le Corbusier. In the ever-evolving world of frontend development, I want to bring a unique architectural touch, turning web pages into digital masterpieces that <b>invite, captivate, and inspire.</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FlexRow FlexCenter FlexBetween Mobile">
                    <div className="AboutMeInfo MarginRight20">
                        <div className="MarginBottom20">
                            <h2>Hi, I'm Caio</h2>
                        </div>
                        <h3 className="MarginBottom20">
                            Software Developer, Photographer, Architect
                        </h3>
                        <p className="MarginBottom20">
                            With over 3 years of software development, design and project management experience, I've worked on several projects including Davey Award Winning websites as well as developing frontend code in collaboration with Webby Award Winning UI/UX teams.
                        </p>

                        <div>
                            {languagesArray.map(img =>
                                <img className="LanguageLogos"
                                    src={img} />

                            )}
                        </div>
                    </div>

                    <div>
                        <img src={me} alt="Profile" id="HomePagePicture" />
                    </div>
                </div>

                <div className="FlexRow FlexBetween Desktop MarginTop20" style={{ width: '1200px' }}>
                    <button
                        style={{
                            transform: `translateY(${scrollPosition})`,
                            opacity: `calc(1 - ${scrollPosition * 0.01})`,
                        }}
                        className="ProjectsButton FlexColumn FlexCenter Desktop"
                        onClick={() => {
                            handleNavigate()
                        }}
                        ponter>

                        photography

                    </button>
                    <button
                        style={{
                            transform: `translateY(${scrollPosition})`,
                            opacity: `calc(1 - ${scrollPosition * 0.01})`,
                        }}
                        className="ProjectsButton FlexColumn FlexCenter Desktop"
                        onClick={() => { scrollToProjects(350) }}
                        ponter>

                        projects
                        <ArrowDropDownIcon fontSize="large" />
                    </button>
                    <button
                        ref={ref}
                        style={{
                            transform: `translateY(${scrollPosition})`,
                            opacity: `calc(1 - ${scrollPosition * 0.01})`,
                        }}
                        className="ProjectsButton FlexColumn FlexCenter Desktop"
                        onClick={() => setAboutSelected(!aboutSelected)}
                        ponter>

                        about

                    </button>
                </div>



            </div>

            <Porftolio />
        </div>
    );
};

export default HomePage;
