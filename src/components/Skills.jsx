import React from 'react'
import "./skills.scss"
import ReactIcon from "../images/skill-logo/1.svg"
import nodeIcon from "../images/skill-logo/2.svg"
import expressIcon from "../images/skill-logo/3.svg"
import mongoIcon from "../images/skill-logo/4.svg"
import firebaseIcon from "../images/skill-logo/5.svg"
import sassIcon from "../images/skill-logo/6.svg"
import muiIcon from "../images/skill-logo/7.svg"

const Skills = () => {
  return (
    <div className='skills'>
        <div className="wrapper">
            <div className="icon">
                <img src={ReactIcon} alt="" />
            </div>
            <div className="icon">
                <img src={nodeIcon} alt="" />
            </div>
            <div className="icon">
                <img src={expressIcon} alt="" />
            </div>
            <div className="icon">
                <img src={mongoIcon} alt="" />
            </div>
            <div className="icon">
                <img src={firebaseIcon} alt="" />
            </div>
            <div className="icon">
                <img src={sassIcon} alt="" />
            </div>
            <div className="icon">
                <img src={muiIcon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Skills