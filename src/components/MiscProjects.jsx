import React, { useEffect } from 'react'
import "./miscProjects.scss"
import { MiscProjectData } from '../utilities/ProjectData'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const projectAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.2, duration: 1 }
    }
}

const MiscProjects = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
        else {
            animation.start("hidden")
        }


    }, [animation, inView]);
    return (
        <motion.div className='misc'
            ref={ref}
            variants={projectAnimation}
            initial="hidden"
            animate={animation}
        >
            <div className="header">
                <span>
                    <h1>miscellaneous projects<span className='dot'>.</span></h1>
                </span>
                <span>
                    <p>Some others worthy projects</p>
                </span>
            </div>
            <div className="content">
                {
                    MiscProjectData.map((item, index) => {
                        return (
                            <div className="miscproject" key={index}>
                                <div className="img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="info">
                                    <h3>{item.title}</h3>
                                    <button>view</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default MiscProjects