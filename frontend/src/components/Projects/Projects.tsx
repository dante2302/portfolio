import { aether, sharp8, bakery } from "../../projects";
import ProjectTemplate from "./ProjectTemplate";

import "./Projects.css";

export default function Projects()
{
    return (
        <div id="Projects">
            <h1>PROJECTS</h1>
            <i>Some Live projects May need a little time before loading fully - Azure Cold Start to reduce costs</i>
            <ProjectTemplate project={aether}/>
            <ProjectTemplate project={bakery}>
                {bakery.additionalInfo}
            </ProjectTemplate>
            <ProjectTemplate project={sharp8}/>
        </div>
    )
}