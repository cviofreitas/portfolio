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
                        <div className='ProjectHeader'>
                            <h3>
                                {project.title}
                            </h3>
                            <div className='ProjectLinks' >
                                <a href={project.githubLink} target='blank'>
                                    <img src={GitHubLinkIcon} alt='git hub link' />
                                    <h3>github</h3>
                                </a>
                                <a href={project.link} target='blank'>
                                    <img src={LinkIcon} alt='git hub link'
                                        style={{
                                            rotate: '-45deg'
                                        }} />
                                    <h3>url</h3>
                                </a>
                            </div>
                        </div>
                        {project.subTitle ? <h2>
                            {project.subTitle}
                        </h2> : <></>}
                        <p>
                            {project.description}
                        </p>
                    </div>


                    <div className='FlexRow FlexCenter FlexBetween Padding20 Gap20'>

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
                                    className='MobileLanguageLogos' />)
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