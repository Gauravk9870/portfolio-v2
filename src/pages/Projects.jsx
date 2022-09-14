import React from 'react'
import "./projects.scss"
import {ProjectData} from '../utilities/ProjectData'
import Project from '../components/Project'
import MiscProjects from '../components/MiscProjects'


const Projects = () => {

  return (
    <div className='projects' id='projects'>
      <div className="wrapper">
        <div className="header">
          <span><h1>Projects<span className='dot'>.</span></h1></span>
          <span><p>Some Things<br /> I’ve Built</p></span>
        </div>
        <div className="content">
          {
            ProjectData.map((item, index) => {
              return (
                <Project
                  key={index}
                  title={item.title}
                  image={item.image}
                  tech={item.technology}
                  category={item.category}
                  description={item.description}
                  type={item.type}
                  position={item.position}
                />
              )
            })
          }
        </div>

        <MiscProjects/>
      </div>
    </div>
  )
}

export default Projects