import { GoRadioTower } from "react-icons/go"; 
import { BiCodeAlt } from "react-icons/bi"; 

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


export  {Videos,Specializations}