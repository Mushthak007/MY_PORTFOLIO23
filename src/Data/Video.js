import { GoRadioTower } from "react-icons/go"; 
import { BiCodeAlt } from "react-icons/bi"; 
import Html from '../Assets/icon/logos_html-5.svg'
import Css from '../Assets/icon/vscode-icons_file-type-css.svg'
import Tailwind from '../Assets/icon/skill-icons_tailwindcss-dark.svg'
import Js from '../Assets/icon/logos_javascript.svg'
import Reacts from '../Assets/icon/Group 142.svg'
import Node from '../Assets/icon/Group 141.svg'
import Express from '../Assets/icon/skill-icons_expressjs-dark.svg'
import Mongodb from '../Assets/icon/skill-icons_mongodb.svg'

const Videos=[
    {
        id:1,
        video:'https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video1.mp4'
    }
]

const Specializations=[
    {
        id:1,
        title:'Web Development',
        icon:<GoRadioTower size={28}/>,
        subtitle:'I created digital products with unique ideas use react js & Tailwind css',
        Projects:'24 PROJECTS'
    },
    {
        id:2,
        title:'Mobile App Development',
        icon:<BiCodeAlt size={33}/>,
        subtitle:'I created digital products with unique ideas use Figma & Framer',
        Projects:'24 PROJECTS'
    },
]

const Skill=[
    {
        id:1,
        image:Html,
        percentage:'90%'
    },
    {
        id:2,
        image:Css,
        percentage:'90%'
    },
    {
        id:3,
        image:Tailwind,
        percentage:'97%'
    },
    {
        id:4,
        image:Js,
        percentage:'80%'
    },
    {
        id:5,
        image:Reacts,
        percentage:'90%'
    },
    {
        id:6,
        image:Node,
        percentage:'70%'
    },
    {
        id:7,
        image:Express,
        percentage:'70%'
    },
    {
        id:8,
        image:Mongodb,
        percentage:'90%'
    },
]


export  {Videos,Specializations,Skill}