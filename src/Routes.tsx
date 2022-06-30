import { BrowserRouter, Route, Routes as RoutesReact} from "react-router-dom";
import { Home } from "./Pages/Home";

export function Routes(){
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={""} />
        <Route path="/event/lesson/:slug" element={""} />
      </RoutesReact>
    </BrowserRouter>
  )
}