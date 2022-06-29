
interface SocialButtonsProps {
  href: string
  children: React.ReactNode
}

export function SocialButtons(props: SocialButtonsProps){
  return(
    <a 
        className="transition duration-500 hover:scale-150 hover:text-cyan-400 "
        href={props.href} 
        target={"_blank"}>
          {props.children}
      </a>
  )
}