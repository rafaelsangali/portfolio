import { useLocation } from "react-router-dom";

export function transformPath(){
  var path = ""
  useLocation().pathname == "/" ?
  path = "home" : path = useLocation().pathname.replace("/","").replace("-"," ")
  return path
}

