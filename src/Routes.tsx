import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedComponents/AnimatedRoutes";

export function Routes(){
  
  return (
    <BrowserRouter>      
      <AnimatedRoutes />
    </BrowserRouter>
  )
}