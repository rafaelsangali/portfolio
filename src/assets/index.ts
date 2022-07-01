import iconLighting from "./iconLightning.svg"
import iconArrow from "./arrow.svg"
import iconHome from "./home.svg"
import iconDownload from "./download.svg"
import iconEmail from "./email.svg"
import iconGithub from "./github.svg"
import iconLinkedin from "./linkedin.svg"
import iconStar from "./star.svg"
import iconProjects from "./allProjects.svg"
import iconAbout from "./about.svg"



export const MainTitle = { title: "Web Developer", src: iconLighting, arrow: iconArrow}

export const Menus = [
  { title: "Home", src: iconHome, href: "/" },
  { title: "About", src: iconAbout, gap: true , href: "/about"},
  { title: "Top Projetcs ", src: iconStar , href: "/top-projects"},
  { title: "All Projetcs", src: iconProjects, href: "/all-projects" },
];

export const Links = [
{ 
  title: "Github", 
  src: iconGithub, 
  gap: true, 
  href: "https://github.com/rafaelsangali",
  target: "_blank",
},
{ 
  title: "Likedin", 
  src: iconLinkedin, 
  href: "https://www.linkedin.com/in/rafael-sangali-0b2675229/",
  target: "_blank", 
},
{ 
  title: "Email", 
  src: iconEmail, 
  href: "mailto:rafaelsangali@outlook.com",
  target: "_blank",
},
{
  title: "Download CV", 
  src: iconDownload ,
  gap: true,  
  href: "", 
  download: iconDownload },
]