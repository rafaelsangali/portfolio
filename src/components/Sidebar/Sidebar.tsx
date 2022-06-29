import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import { RedirectButtons } from "./RedirectButtons";
import { SocialButtons } from "./SocialButtons";

export function Sidebar() {
  return (
    <aside 
    className="text-2xl md:w-[250px] h-screen grid gap-4 bg-gray-700 border-x border-gray-600 place-content-center">
      <img
      className="h-16 w-16 md:h-32 md:w-32 rounded-full border-2 border-cyan-400 m-auto"
      src="https://avatars.githubusercontent.com/u/96629688?v=4" 
      alt="Foto Rafael Sangali" />
      <h1 
      className="font-bold text-2xl mx-auto mt-1">
        Rafael Sangali
      </h1>
      <h2 
      className="pb-6 mx-auto mb-4 border-b border-gray-500 block md:text-sm">Front End Developer</h2>
      <nav 
      className="my-2 text-center grid gap-4 place-content-center pb-6 mx-auto mb-4 border-b border-gray-500">
        <RedirectButtons text="Home" />
        <RedirectButtons text="About" />
        <RedirectButtons text="Projetcs" />
        <a 
        className="text-2xl first-letter:md:mx-auto cursor-pointer border border-gray-400 rounded-full py-1 px-5 mb-4 md:text-sm hover:bg-cyan-400 hover:border-transparent hover:text-gray-700 transition-colors">Download CV</a>
      </nav>
      <footer className="flex justify-evenly">
        <SocialButtons 
        href="https://github.com/rafaelsangali">
           <GithubLogo size={23} />
        </SocialButtons >
        <SocialButtons 
        href="https://www.linkedin.com/in/rafael-sangali-0b2675229/">
           <LinkedinLogo size={23} />
        </SocialButtons >
        <SocialButtons 
        href="mailto:rafaelsangali@outlook.com">
           <Envelope size={23} />
        </SocialButtons >
      </footer>
    </aside>
  )
}


