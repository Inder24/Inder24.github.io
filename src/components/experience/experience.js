import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Grab",
    "url": "https://www.grab.com/",
    "time": "July 2025 - Dec 2025",
    "position": "Lead Software Engineer"
  },
  {
    "company": "Grab",
    "url": "https://www.grab.com/",
    "time": "June 2022 - June 2025",
    "position": "Senior Software Engineer (Backend)"
  },
  {
    "company": "ST Engineering",
    "url": "https://www.stengg.com/",
    "time": "Jan 2022 - April 2022",
    "position": "Software Engineer Intern"
  },
  {
    "company": "FIS",
    "url": "https://www.fisglobal.com/",
    "time": "Nov 2019 - June 2021",
    "position": "Senior Software Engineer"
  },
  {
    "company": "BNY Mellon Technology",
    "url": "https://www.bnymellon.com/",
    "time": "Sept 2017 - Nov 2019",
    "position": "Application Developer"
  },
  {
    "company": "iNautix Technologies",
    "url": "#",
    "time": "March 2017 - June 2017",
    "position": "Intern"
  },
  {
    "company": "National University of Singapore",
    "url": "https://www.nus.edu.sg/",
    "time": "July 2021 - 2022",
    "position": "MTech, Software Engineering"
  },
  {
    "company": "KIIT University",
    "url": "https://kiit.ac.in/",
    "time": "2013 - 2017",
    "position": "B.Tech, Computer Science"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

      {/* <a href="#" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a> */}
    </div>
  </section>
)

export default Experience
