import React from "react";
import { useState, useEffect } from "react";
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
const HomePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const languagesArray = [html, css, js, typescript, jQuery, Reactlogo, Redux, Python, Nodejs, MaterialUi, WordPress]

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

                        {/* <div>
                            {languagesArray.map((img, index) =>
                                <img className="LanguageLogos"
                                    src={img}
                                    style={{
                                        animation: slideIn
                                    }}
                                    alt='language logo' />

                            )}

                        </div> */}
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

                    <div
                        style={{
                            transform: `translateX(${scrollPosition * 1.5}px)`,
                            opacity: `calc(1 - ${scrollPosition * 0.0035})`,
                        }}>
                        <img src={me} alt="Profile" id="HomePagePicture" />
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
                        <img src={me} alt="Picture of me" id="HomePagePicture" />
                    </div>
                </div>

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


            </div>

        </div>
    );
};

export default HomePage;
