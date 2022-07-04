import iconLighting from "./icons/iconLightning.svg"
import iconArrow from "./icons/arrow.svg"
import iconHome from "./icons/home.svg"
import iconDownload from "./icons/download.svg"
import iconEmail from "./icons/email.svg"
import iconGithub from "./icons/github.svg"
import iconLinkedin from "./icons/linkedin.svg"
import iconStar from "./icons/star.svg"
import iconProjects from "./icons/allProjects.svg"
import iconAbout from "./icons/about.svg"
import iconGlobe from "./icons/globe.svg"

export const icons = {
  iconLighting: iconLighting,
  iconArrow: iconArrow,
  iconHome: iconHome,
  iconDownload: iconDownload,
  iconEmail: iconEmail,
  iconGithub: iconGithub,
  iconLinkedin: iconLinkedin,
  iconStar: iconStar,
  iconProjects: iconProjects,
  iconAbout: iconAbout,
  iconGlobe: iconGlobe,
}

export const MainTitle = { title: "Web Developer", src: iconLighting, arrow: iconArrow}

export const Menus = [
  { title: "Home", src: iconHome, href: "/" },
  { title: "About", src: iconAbout, gap: true , href: "/about"},
  { title: "Top Projects", src: iconStar , href: "/top-projects"},
  { title: "All Projects", src: iconProjects, href: "/all-projects" },
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