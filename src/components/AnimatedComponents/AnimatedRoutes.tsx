import { Route as RouteWrapper, Routes, useLocation } from "react-router-dom";
import { About } from "../../Pages/About";
import { AllProjetcs } from "../../Pages/AllProjetcs";
import { Home } from "../../Pages/Home";
import { TopProjetcs } from "../../Pages/TopProjetcs";
// import { AnimatePresence } from "framer-motion"

export function AnimatedRoutes(){
  const location = useLocation()
  return(
    // <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <RouteWrapper path="/" element={<Home />} />
        <RouteWrapper path="/about" element={<About />} />
        <RouteWrapper path="/top-projects" element={<TopProjetcs />} />
        <RouteWrapper path="/all-projects" element={<AllProjetcs />} />
      </Routes>
    // </AnimatePresence>
  )
}