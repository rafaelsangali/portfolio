interface RedirectButtonsProps{
  text:string
}
export function RedirectButtons(props: RedirectButtonsProps) {
  return (
    <a 
        className="mx-auto cursor-pointer  text-sm relative group">
          {props.text}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full" />
    </a>
  )
}
