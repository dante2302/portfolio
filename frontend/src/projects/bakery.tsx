import bakeryImg from "../assets/bakery.png";
import { Project } from "./project.interface";

const bakery: Project = {
    imageLink: bakeryImg,
    heading: "Bobby's Bakery",
    paragraph: "Bobby's Bakery website is a complete platform designed to make running a bakery easier.\nIt's a personal assignment project, made for a relative.",
    technologies: [".NET", "EF Core", "PostgreSQL", "Azure", "HTML", "CSS/SCSS", "TypeScript", "React",],
    githubLink: "https://github.com/dante2302/bakery",
    seeLiveLink: "https://bakery-six-amber.vercel.app",
    additionalInfo: <>
                    <br></br>
                    <b>Client</b> - Allows customers to browse products and make orders.
                    <br></br>
                    <b>Server</b> - Handles orders and serves information about the products.
                    <br></br>
                    <b>Admin</b> - Lists all orders, gives the right to Change/Add/Delete products.
                    <br></br>
                </>
}

export default bakery;