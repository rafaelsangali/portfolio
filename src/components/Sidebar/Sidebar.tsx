import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import { RedirectButtons } from "./RedirectButtons";
import { SocialButtons } from "./SocialButtons";

export function Sidebar() {
  return (
    <aside 
    className="w-[280px] h-screen grid gap-5 bg-gray-700 p-6 border-x border-gray-600 place-content-center">
      <img
      className="h-32 w-32 rounded-full border-2 border-green-400 m-auto"
      src="https://avatars.githubusercontent.com/u/96629688?v=4" 
      alt="Foto Rafael Sangali" />
      <h1 
      className="font-bold text-2xl mx-auto mt-1">
        Rafael Sangali
      </h1>
      <h2 
      className="pb-6 mx-auto mb-4 border-b border-gray-500 block">Front End Developer</h2>
      <nav 
      className="grid grid-cols gap-4 place-content-center pb-6 mx-auto mb-4 border-b border-gray-500">
        <RedirectButtons text="Home" />
        <RedirectButtons text="About" />
        <RedirectButtons text="Projetcs" />
        <a 
        className="mx-auto cursor-pointer border border-gray-400 rounded-full py-1 px-5 text-sm hover:bg-green-600 hover:border-transparent transition-colors">Download CV</a>
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


