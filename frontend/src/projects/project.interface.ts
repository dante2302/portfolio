import { ReactElement } from "react"

export interface Project  
{
    paragraph: string,
    heading: string,
    githubLink: string,
    seeLiveLink?: string,
    imageLink: string,
    technologies: string[]
    additionalInfo?: ReactElement
}