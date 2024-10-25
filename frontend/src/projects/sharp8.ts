import { Project } from "./project.interface";
import sharp8img from "../assets/sharp8.png";

const sharp8: Project = {
    imageLink: sharp8img,
    heading: "Sharp8",
    paragraph: "This is a simple Chip8 emulator written in C#. It replicates the functionality of the original Chip8, initially designed for 8-bit microcomputers in the 1980s. The emulator interprets and executes opcodes that allow playing classic Chip8 games. Also includes alternate keymaps for different games!",
    technologies: ["C#", "OpenGL", "OpenTK", "Virtualization"],
    githubLink: "https://github.com/dante2302/sharp8",
}

export default sharp8;