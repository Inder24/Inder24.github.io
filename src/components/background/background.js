import * as React from "react"


const backgroundData = {
  title: "Background",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        I'm a Lead Software Engineer at&nbsp;
        <a className="underline-link" href="https://www.grab.com/" target="_blank" rel="noreferrer">Grab</a>, where I build and perfect the GrabX experimentation platform. I've led efforts in natural language search using LLM and RAG, optimised the SDK by 80% on both CPU and memory consumption, and restructured data models to improve query efficiency by 70%.
      </p>

      <p>
        At Grab, I also built the&nbsp;
        <strong>Invoicing Platform</strong> that reduced manual effort from 80 hours to 1 hour per country with a 99% success rate, and worked on a company-wide Slack bot using RAG and multi-agent approaches that improved on-call efficiency by 40% across teams.
      </p>

      <p>
        Previously, I worked at&nbsp;
        <a className="underline-link" href="https://www.stengg.com/" target="_blank" rel="noreferrer">ST Engineering</a> building low-latency video analytics systems,&nbsp;
        <a className="underline-link" href="https://www.fisglobal.com/" target="_blank" rel="noreferrer">FIS</a> on core fintech products, and&nbsp;
        <a className="underline-link" href="https://www.bnymellon.com/" target="_blank" rel="noreferrer">BNY Mellon</a> as a full-stack developer on migration and greenfield projects.
      </p>

      <p>
        I hold a Master of Technology in Software Engineering from the&nbsp;
        <a className="underline-link" href="https://www.nus.edu.sg/" target="_blank" rel="noreferrer">National University of Singapore</a> and a B.Tech in Computer Science from&nbsp;
        <a className="underline-link" href="https://kiit.ac.in/" target="_blank" rel="noreferrer">KIIT University</a>. I'm passionate about system design, cloud architecture, and building platforms that scale.
      </p>
    </div>
  </section>
)

export default Background
