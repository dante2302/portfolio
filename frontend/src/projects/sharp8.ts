import { Project } from "./project.interface";
import sharp8img from "../assets/chip8.png";

const sharp8: Project = {
    imageLink: sharp8img,
    heading: "Aether",
    paragraph: "Aether is a live online platform where people can join communities based on their interests to share and discuss content. Users can create posts, rate them, and even comment and have discussions on them.\nEverything is managed entirely on the .NET backend, hosted on Azure. On the frontend, Aether's got an easy-to-use interface and dynamic styling.",
    technologies: [".NET", "PostgreSQL", "Azure", "HTML", "CSS", "JavaScript", "React", "LinkPreviewAPI"],
    githubLink: "https://github.com/dante2302/aether",
    seeLiveLink: "https://aether-zeta.vercel.app/"
}

export default sharp8;