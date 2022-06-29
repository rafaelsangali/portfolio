import { Aperture } from "phosphor-react";

export function LoadingScreen() {
  return (
    <div 
    className="h-screen w-screen flex justify-center items-center">
      <Aperture
      className="text-cyan-400 animate-spin" 
      size={40} 
      />
    </div>
  )
}