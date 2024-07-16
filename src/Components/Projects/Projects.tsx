import ProjectTemplate from "./ProjectTemplate";
import aether from "../../assets/aether.png";
import "./Projects.css";

export default function Projects()
{
    return (
        <div id="Projects">
            <ProjectTemplate 
                heading="Aether" 
                paragraph="asd" 
                githubLink="https://github.com/dante2302/aether" 
                imageLink={aether} 
                seeLiveLink={"https://aether-zeta.vercel.app/"}
                technologies={["C#", "PostgreSQL", "Azure" ,"HTML", "CSS", "JavaScript", "React", "LinkPreviewAPI"]}
            />
        </div>
    )
}