import iconLoading from "../assets/icons/loading.svg"


export function LoadingScreen() {
  return (
    <div 
    className="h-screen w-screen flex justify-center items-center">
      <img 
      src={iconLoading} 
      alt="Icone Tela de Loading" 
      className="animate-spin"
      width={40} 
      />
    </div>
  )
}