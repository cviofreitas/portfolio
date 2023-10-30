import React from "react";
import { useState, useEffect } from "react";
import LinkIcon from "./LinkIcon.png";
import "./Project.css";
const Project = ({ project }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

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
        <>
            {project ?
                <div>
                    <div className="ProjectDisplayContainer">
                        <div className="imagesContainer">
                            <div className="DesktopImageContainer">
                                <a href={project.link} target='blank'>
                                    <img src={project.deskTopThumbnail}
                                        className='ProjectImage' />
                                </a>

                            </div>
                            {project.mobileThumbnail ?
                                <div className="MobileImageContainer">
                                    <img
                                        src={project.mobileThumbnail}
                                        className='MobileImage ProjectImage'
                                    />
                                </div> : <></>}

                        </div>
                        <div className="TitleContainer">
                            <div className="FlexRow FlexBetween">
                                <h3 className="MarginTop20">{
                                    project.title}
                                </h3>
                                <div>
                                    <a href={project.githubLink}
                                        target='blank'
                                        className="githubLink FlexRow">
                                        <img src={LinkIcon} />

                                        <h3 className="MarginTop20">
                                            github
                                        </h3>
                                    </a>
                                </div>

                            </div>

                            <h4>
                                {project.subTitle}
                            </h4>
                            <p>
                                {project.description}
                            </p>
                        </div>
                        <div>
                            {project.languages.map(language =>
                                <img className='LanguageLogos' src={language} />)}
                        </div>

                    </div>
                </div>
                : (
                    <></>
                )}
        </>
    );
};

export default Project;
