import githubLogo from "../../assets/github.svg";
import "./Projects.css";

interface props
{
    paragraph: string,
    heading: string,
    githubLink: string,
    seeLiveLink: string,
    imageLink: string,
    technologies: string[]
}

export default function ProjectTemplate({
    heading, 
    paragraph,
    githubLink, 
    seeLiveLink,
    imageLink,
    technologies
}: props)
{
    return (
        <div className="project-outer">
                <img src={imageLink} className="project-img"/>
            <div className="text-content">
                <h1>{heading}</h1>
                <p>{paragraph}</p>
                <ul className="technologies">
                    {technologies.map(t => 
                        <li key="t">{t}</li>
                    )}
                </ul>
                <a className="see-live-button" href={seeLiveLink}>See Live</a>
                <a
                    className="logo-link"
                    href={githubLink}
                    target="_blank"
                >
                    <img src={githubLogo} className="nav-logo" />
                </a>
            </div>
        </div>
    )
}