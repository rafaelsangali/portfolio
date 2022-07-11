import { useEffect, useState } from "react";
import CardTopProjects from "../../components/CardTopProject";
import requestApi from "../../services";

type Repository = {
  full_name: string
}

export default function AllProjetcs() {
  const [info, setInfo] = useState<Repository[]>([]);
  useEffect(() => {
    const i = async () => {
      const response = await requestApi.get("");
      setInfo(response.data);
    };
    i();
  }, []);

  return (
    <main>
      {info.map((element)=> (
        <CardTopProjects title={element.name}/>
      ))}
    </main>
  
  );
}
