import { PropsWithChildren } from "react";
import "./Projects.css";

interface Project  
{
    paragraph: string,
    heading: string,
    githubLink: string,
    seeLiveLink: string,
    imageLink: string,
    technologies: string[]
}

interface props extends PropsWithChildren
{
    project: Project,
}

export default function ProjectTemplate({ project, children }: props)
{
    const { 
        imageLink, 
        heading, 
        technologies, 
        paragraph, 
        seeLiveLink, 
        githubLink 
    } = project;

    return (
        <div className="project-outer">
                <img src={imageLink} className="project-img" onClick={() => window.open(seeLiveLink)}/>
            <div className="text-content">
                <h1>{heading}</h1>
                <ul className="technologies">
                    {technologies.map(t => 
                        <li key={t}>{t}</li>
                    )}
                </ul>
                <p>
                    {paragraph}
                    {children}
                </p>
                <div className="project-link-container">
                <a 
                    className="project-link" 
                    href={seeLiveLink} 
                    target="_blank"
                >See Live</a>
                <a
                    className="project-link source-code-link"
                    href={githubLink}
                    target="_blank"
                >Source Code</a>
                </div>
            </div>
        </div>
    )
}