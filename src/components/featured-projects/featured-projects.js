import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project grabx-platform">
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://www.grab.com/" rel="noreferrer" target="_blank">GrabX Experimentation Platform</a>
          </div>
          <p>Built and perfected Grab's experimentation platform serving the entire company. Implemented natural language search using LLM + RAG with LangGraph, optimised the SDK by 80% on CPU and memory, and restructured data models improving query efficiency by 70%. Led a team of 4 on the config serving workstream.</p>
        </figcaption>
      </div>

      <div className="project invoicing-platform">
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://www.grab.com/" rel="noreferrer" target="_blank">Invoicing Platform at Grab</a>
          </div>
          <p>Built an invoicing platform that reduced manual effort from 80 hours to 1 hour per country, saving manpower costs across all Grab operating countries. Automated invoice and bill generation with 99% success rate and enabled self-onboarding, cutting onboarding time from 1 week to 2 hours.</p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
