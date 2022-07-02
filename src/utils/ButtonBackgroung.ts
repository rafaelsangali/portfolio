import { useLocation } from "react-router-dom";

export function transformPath(){
  useLocation().pathname == "/" ?
  path = "home" : path = useLocation().pathname.replace("/","").replace("-"," ")
  console.log(path);
  
}
transformPath()
export let path = ""