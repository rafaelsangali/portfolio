import { useLocation } from "react-router-dom";

export function transformPath(){
  let path = ""
  useLocation().pathname == "/" ?
  path = "home" : path = useLocation().pathname.replace("/","").replace("-"," ")
  console.log(path);
  return path
}

