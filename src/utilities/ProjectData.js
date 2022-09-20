import { FaReact, FaHtml5 } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import { SiFirebase } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'


import chat from "../images/projects/chat-app.png"
import realEstate from "../images/projects/real-estate.png"
import exercise from "../images/projects/exercise.png"
import jwellery from "../images/projects/jwellery.png"
import meditation from "../images/projects/meditation.png"
import realEstate2 from "../images/projects/real-estate-2.png"
import youtube from "../images/projects/youtube.png"
import herbal from "../images/projects/herbal.png"

export const ProjectData = [
    {
        id: 1,
        title: "chat-app",
        description: "Chat-app is a real-time chat application built with React, Firebase, and Sass. It allows users to create chat rooms and chat with other users in real-time.",
        technology: [<FaReact/>, <SiFirebase/>, <DiSass/>],
        image: chat,
        category: "Featured",
        position:"right",
        sourcecode: "",
        preview: "https://i61hwt.csb.app/login"
    },
    {
        id: 2,
        title: "real-estate",
        description: "Real-estate is a real estate website built with HTML, CSS, and JavaScript. It allows users to search for properties and view property details.",
        technology: [<FaHtml5/>, <SiJavascript/>,<DiSass/> ],
        image: realEstate,
        category: "Featured",
        position:"left",
        sourcecode: "",
        preview: ""
    },
    {
        id: 3,
        title: "exercise-app",
        description: "Exercise-app is a workout application built with React, Sass, and the OpenWeather API. It allows users to search for exercises and view exercise details.",
        technology: [<FaReact/>, <TbApi/>, <DiSass/>],
        image: exercise,
        category: "Featured",
        position:"right",
        sourcecode: "",
        preview: "https://wk534u.csb.app/"
    },
   

]

export const MiscProjectData = [
    {
        id:1,
        title:"jwellery-website",
        description:"Jwellery-website is a jwellery website built with HTML, CSS, and JavaScript. It allows users to view products and add products to their cart.",
        technology: [<FaHtml5/>, <SiJavascript/>,<DiSass/> ],
        image: jwellery,
        category: "Miscellaneous",
        sourcecode: "",
        preview: ""
    },
    {
        id:2,
        title:"e-commerce-website",
        description:"Meditation-app is a meditation application built with React, Sass, and the OpenWeather API. It allows users to search for meditations and view meditation details.",
        technology: [<FaReact/>, <TbApi/>, <DiSass/>],
        image: meditation,
        category: "Miscellaneous",
        sourcecode: "",
        preview: ""
    },
    {
        id:3,
        title:"real-estate-website",
        description:"Real-estate-website is a real estate website built with HTML, CSS, and JavaScript. It allows users to search for properties and view property details.",
        technology: [<FaHtml5/>, <SiJavascript/>,<DiSass/> ],
        image: realEstate2,
        category: "Miscellaneous",
        sourcecode: "",
        preview: ""
    },
    {
        id:4,
        title:"youtube-ui-clone",
        description:"Youtube-website is a youtube website built with HTML, CSS, and JavaScript. It allows users to search for videos and view video details.",
        technology: [<FaHtml5/>, <SiJavascript/>,<DiSass/> ],
        image: youtube,
        category: "Miscellaneous",
        sourcecode: "",
        preview: ""
    },
    {
        id:5,
        title:"herbal-website",
        description:"Herbal-website is a herbal website built with HTML, CSS, and JavaScript. It allows users to view products and add products to their cart.",
        technology: [<FaReact/>,<DiSass/> ],
        image: herbal,
        category: "Miscellaneous",
        sourcecode: "",
        preview: ""
    }

]

