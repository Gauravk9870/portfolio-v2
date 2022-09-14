import React from 'react'
import "./projects.scss"
import {ProjectData} from '../utilities/ProjectData'
import Project from '../components/Project'


const Projects = () => {

  return (
    <div className='projects'>
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
      </div>
    </div>
  )
}

export default Projects