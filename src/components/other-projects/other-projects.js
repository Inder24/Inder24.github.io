import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "Company-wide Slack Bot",
    "url": "#",
    "description": "Built a Slack bot at Grab that improved on-call efficiency by 40% for each team. Used RAG + MCPs to gather information and answer user queries, with a multi-agent approach for improved efficiency.",
    "used": [
      {"thing": "Python"},
      {"thing": "LLM / RAG"},
      {"thing": "Multi-Agent"},
      {"thing": "MCP"},
    ]
  },
  {
    "name": "Low Latency RTSP Video Wall",
    "url": "#",
    "description": "Built a low-latency web RTSP video wall for the video analytics team at ST Engineering. Developed a live stream transcoder using ffmpeg and improved the RTSP web player to 0.53s lag using TypeScript. Implemented person identification and face recognition models using deep learning.",
    "used": [
      {"thing": "TypeScript"},
      {"thing": "ffmpeg"},
      {"thing": "Deep Learning"},
      {"thing": "Video Analytics"},
    ]
  },
  {
    "name": "Reducing Peak Memory and CPU Usage for Grab's PCM SDK",
    "url": "#",
    "description": "Optimised Grab's Product Configuration Management SDK, reducing both CPU utilisation and memory consumption by 80% for all client services.",
    "used": [
      {"thing": "Golang"},
      {"thing": "Performance Optimization"},
      {"thing": "SDK Development"},
    ]
  },
  {
    "name": "How We Reduced Initialisation Time of PCM SDK",
    "url": "#",
    "description": "Publication on reducing the initialisation time of Product Configuration Management SDK at Grab, improving startup performance for all consuming services.",
    "used": [
      {"thing": "Golang"},
      {"thing": "System Design"},
      {"thing": "Backend Engineering"},
    ]
  },
  {
    "name": "One-Click Onboarding for Data Analysts",
    "url": "#",
    "description": "Created a one-click onboarding system for data analysts who were not familiar with creating scripts and deploying to Snowflake via Azure pipelines. Reduced creation/update time from 1.5 days to 5 minutes.",
    "used": [
      {"thing": "Azure"},
      {"thing": "Snowflake"},
      {"thing": "DevOps"},
      {"thing": "Automation"},
    ]
  },
  {
    "name": "Quantum - Core Fintech Product at FIS",
    "url": "#",
    "description": "Part of the core development team on Quantum at FIS, one of the Fortune 500 leaders in fintech. Worked on .NET applications, TypeScript, performance issues, and database query optimisation. Awarded Kudos 3 times for feature work.",
    "used": [
      {"thing": "C# / .NET"},
      {"thing": "TypeScript"},
      {"thing": "MSSQL"},
      {"thing": "Fintech"},
    ]
  },
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Notable Work</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
