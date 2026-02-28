import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["C#", ".NET Core", "Golang", "Python", "JavaScript", "TypeScript", "SQL"],
  "frameworksTitle": "Frameworks & Tools",
  "frameworks": ["AWS", "Azure", "Docker", "Jenkins", "DynamoDB", "Elastic Search", "Git", "DevSecOps"],
  "toolsTitle": "Tools",
  "tools": ["SonarQube", "Postman", "Veracode", "Snowflake", "Linux/Unix"],
  "designTitle": "Specializations",
  "design": ["System Design", "Cloud Architecture", "Backend Engineering", "Experimentation Platforms", "LLM / RAG", "Performance Optimization", "Distributed Systems", "Scrum & Agile"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        {/* <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div> */}
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
