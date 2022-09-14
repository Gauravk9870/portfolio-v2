import { FaReact, FaHtml5 } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import { SiFirebase } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'


import P1 from "../images/projects/chat-app.png"
import P2 from "../images/projects/real-estate.png"
import P3 from "../images/projects/exercise.png"
import P4 from "../images/projects/herbal.png"

export const ProjectData = [
    {
        id: 1,
        title: "chat-app",
        description: "Chat-app is a real-time chat application built with React, Firebase, and Sass. It allows users to create chat rooms and chat with other users in real-time.",
        technology: [<FaReact/>, <SiFirebase/>, <DiSass/>],
        image: P1,
        category: "Featured",
        position:"right"
    },
    {
        id: 2,
        title: "real-estate",
        description: "Real-estate is a real estate website built with HTML, CSS, and JavaScript. It allows users to search for properties and view property details.",
        technology: [<FaHtml5/>, <SiJavascript/>,<DiSass/> ],
        image: P2,
        category: "Featured",
        position:"left"
    },
    {
        id: 3,
        title: "exercise-app",
        description: "Exercise-app is a workout application built with React, Sass, and the OpenWeather API. It allows users to search for exercises and view exercise details.",
        technology: [<FaReact/>, <TbApi/>, <DiSass/>],
        image: P3,
        category: "Featured",
        position:"right"
    },
    {
        id: 4,
        title: "ecommerce-herbal",
        description: "Ecommerce-herbal is an ecommerce website built with React, Sass, and the OpenWeather API. It allows users to search for products and view product details.",
        technology: [<FaReact/>,<DiSass/>],
        image: P4,
        category: "Featured",
        position:"left"
    },

]