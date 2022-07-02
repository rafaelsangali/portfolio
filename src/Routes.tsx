import { BrowserRouter, Route, Routes as RoutesReact} from "react-router-dom";
import { About } from "./Pages/About";
import { AllProjetcs } from "./Pages/AllProjetcs";
import { Home } from "./Pages/Home";
import { TopProjetcs } from "./Pages/TopProjetcs";

export function Routes(){
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/top-projects" element={<TopProjetcs />} />
        <Route path="/all-projects" element={<AllProjetcs />} />
      </RoutesReact>
    </BrowserRouter>
  )
}