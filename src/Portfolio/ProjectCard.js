import React from 'react'
import GitHubLinkIcon from './GitHubLink.png'
import LinkIcon from './LinkIcon.png'
const ProjectCard = ({ project, index, direction }) => {
    return (
        <>
            {project ?
                <div className={`ProjectCard Number${index} ${direction}`}>
                    <img
                        className='DeskTopThumbnail'
                        src={project.deskTopThumbnail} />
                    {
                        project.mobileThumbnail ? <img
                            className='MobileThumbnail'
                            src={project.mobileThumbnail} /> : <></>
                    }


                    <div className='ProjectSummaryContainer FlexColumn FlexBetween'>
                        <h3>
                            {project.title}
                        </h3>
                        <h3>
                            {project.subTitle}
                        </h3>
                        <p>
                            {project.description}
                        </p>
                        <div>
                            {
                                project.languages.map(language =>
                                    <img
                                        src={language}
                                        className='LanguageLogos' />)
                            }
                        </div>

                        <div className='ProjectLinks' >
                            <a href={project.githubLink} target='blank'>
                                <img src={GitHubLinkIcon} alt='git hub link' />
                            </a>
                            <a href={project.link} target='blank'>
                                <img src={LinkIcon} alt='git hub link' />
                            </a>
                        </div>

                    </div>
                </div>
                :
                <></>
            }
        </>



    )
}

export default ProjectCard