import React from 'react'
import GitHubLinkIcon from './GitHubLink.png'
import LinkIcon from './LinkIcon.png'
const ProjectCardMobile = ({ project, index, direction }) => {
    return (
        <>
            {project ?
                <div className='ProjectCard'>
                    <img
                        className='DeskTopThumbnail'
                        src={project.deskTopThumbnail} />

                    <div class="MobileProjectHeader">
                        <h3>
                            {project.title}
                        </h3>
                        {project.subTitle ? <h3>
                            {project.subTitle}
                        </h3> : <></>}
                    </div>

                    <div className='FlexRow FlexCenter FlexBetween Padding20 Gap20'>
                        <div className='ProjectSummaryContainer FlexColumn FlexBetween'>

                            <div className='ProjectLinks' >
                                <a href={project.githubLink} target='blank'>
                                    <img src={GitHubLinkIcon} alt='git hub link' />
                                </a>
                                <a href={project.link} target='blank'>
                                    <img src={LinkIcon} alt='git hub link' />
                                </a>
                            </div>
                            <p>
                                {project.description}
                            </p>


                        </div>
                        {
                            project.mobileThumbnail ? <img
                                className='MobileThumbnail'
                                src={project.mobileThumbnail} /> : <></>
                        }
                    </div>
                    <div className='Padding20'>
                        {
                            project.languages.map(language =>
                                <img
                                    src={language}
                                    className='LanguageLogos' />)
                        }
                    </div>
                </div>
                :
                <></>
            }
        </>



    )
}

export default ProjectCardMobile