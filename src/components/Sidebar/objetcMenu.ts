import { icons } from "../../assets";

export const MainTitle = {
  title: "Web Developer",
  src: icons.iconLighting,
  arrow: icons.iconArrow,
};

export const Menus = [
  { title: "Home", src: icons.iconHome, href: "/" },
  { title: "About", src: icons.iconAbout, gap: true, href: "/about" },
  { title: "Top Projects", src: icons.iconStar, href: "/top-projects" },
  { title: "All Projects", src: icons.iconProjects, href: "/all-projects" },
];

export const Links = [
  {
    title: "Github",
    src: icons.iconGithub,
    gap: true,
    href: "https://github.com/rafaelsangali",
    target: "_blank",
  },
  {
    title: "Likedin",
    src: icons.iconLinkedin,
    href: "https://www.linkedin.com/in/rafael-sangali-0b2675229/",
    target: "_blank",
  },
  {
    title: "Email",
    src: icons.iconEmail,
    href: "mailto:rafaelsangali@outlook.com",
    target: "_blank",
  },
  {
    title: "Download CV",
    src: icons.iconDownload,
    gap: true,
    href: "", // add curriculum file
    download: "curriculumRafael",
  },
];
