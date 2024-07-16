import ProjectTemplate from "./ProjectTemplate";
import aetherImg from "../../assets/aether.png";
import bakeryImg from "../../assets/bakery.png";
import "./Projects.css";

export default function Projects()
{
    const aether = {
        imageLink: aetherImg,
        heading: "Aether",
        paragraph: "Aether is a live online platform where people can join communities based on their interests to share and discuss content. Users can create posts, rate them, and even comment and have discussions on them.\nEverything is managed entirely on the .NET backend, hosted on Azure. On the frontend, Aether's got an easy-to-use interface and dynamic styling.",
        technologies: [".NET", "PostgreSQL", "Azure" , "JavaScript", "React", "LinkPreviewAPI"],
        githubLink: "https://github.com/dante2302/aether",
        seeLiveLink: "https://aether-zeta.vercel.app/"
    }
    const bakery = {
        imageLink: bakeryImg,
        heading: "Bobby's bakery",
        paragraph: "Bobby's bakery website is a complete platform designed to make running a bakery easier.\nIt's a personal assignment project, made for a relative.",
        technologies: [".NET", "EF Core" , "PostgreSQL", "Azure", "TypeScript", "React", "SASS"],
        githubLink: "https://github.com/dante2302/bakery",
        seeLiveLink: "https://bakery-six-amber.vercel.app"
    }

    return (
        <div id="Projects">
            <h1>PROJECTS</h1>
            <ProjectTemplate project={aether}/>
            <ProjectTemplate project={bakery}>
                <>
                    <br></br>
                    <b>Client</b> - Allows customers to browse products and make orders.
                    <br></br>
                    <b>Server</b> - Handles orders and serves information about the products.
                    <br></br>
                    <b>Admin</b> - Lists all orders, gives the right to Change/Add/Delete products.
                    <br></br>
                    <i style={{fontSize: "12px"}}>Note: Admin Panel is yet to be finished.</i>
                </>
            </ProjectTemplate>
        </div>
    )
}