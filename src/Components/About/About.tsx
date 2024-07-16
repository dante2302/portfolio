import  react  from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import css from "../../assets/css3.svg";
import html from "../../assets/html5.svg";

import csharp from "../../assets/csharp.svg";
import dotnet from "../../assets/dotnet.svg";
import azure from "../../assets/azure.svg";
import postgres from "../../assets/postgres.svg";
import sqlserver from "../../assets/sqlserver.svg";
import git from "../../assets/git.svg";

import "./About.css";

export default function About()
{
    return(
        <div id="About">
            <h1>ABOUT ME</h1>
            <div className="p-div">
                <p>
                    My name is Darin Penchev. I'm a <b>.NET</b> developer based in Varna, Bulgaria.
                    <br></br>
                    I Specialize in building <b>.NET Web API</b> solutions and <b>React + Typescript</b> Applications.
                    <br></br>
                    At the moment I'm pursuing a <b>Bachelor's degree</b> in Software And Internet Technologies at <b>Technical University Varna</b>
                </p>
                <a className="header-button" href="">RESUME</a>
            </div>
            <div className="technology-div">
                <h2>Technologies I'm proficient in: </h2>
                <ul>
                    <li><img src={csharp} alt="C#"/></li>
                    <li><img src={dotnet} alt=".NET"/></li>
                    <li><img src={azure} alt="Azure" /></li>
                    <li><img src={html} alt="HTML" /></li>
                    <li><img src={css} alt="CSS" /></li>
                    <li><img src={javascript} alt="JavaScript" /></li>
                    <li><img src={typescript} alt="TypeScript" /></li>
                    <li><img src={react} alt="React"/></li>
                    <li><img src={postgres} alt="PostgreSQL"/></li>
                    <li><img src={sqlserver} alt="SQL Server"/></li>
                    <li><img src={git} alt="Git" /></li>
                </ul>
            </div>
        </div>
    )
}
