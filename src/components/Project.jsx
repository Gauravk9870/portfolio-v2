import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiCodepen } from "react-icons/fi";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const projectAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 1 },
  },
};

const Project = ({ title, image, tech, category, description, position, github, preview, codesandbox }) => {

    console.log(title);
    console.log(github);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <motion.div
      className={"project " + position}
      ref={ref}
      variants={projectAnimation}
      initial="hidden"
      animate={animation}
    >
      <div className="cateogry">
        <span>{category}</span>
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="tech">
        {tech.map((item, index) => {
          return (
            <span className="techIcon" key={index}>
              {item}
            </span>
          );
        })}
      </div>
      <div className="image">
        <img src={image} alt="chat-app" />
      </div>

      <div className="description">
        <div className="content">
          <p>{description}</p>
        </div>
        <div className="code">
          <a href={github}>
            <button>
              <AiFillGithub />
            </button>
          </a>
          <a href={codesandbox}>
            <button>
              <FiCodepen />
            </button>
          </a>
          <a href={preview}>
            <button>Preview</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
