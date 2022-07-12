import CardTopProjects from "../../components/CardTopProject";
import LoadingScreen from "../../components/LoadingScreen";
import useFecth from "../../hooks/useFecth";

interface IRepository {
  name: string;
  description: string;
  html_url: string;
}

export default function AllProjetcs() {
  const { data: repositories, isFecthing: isLoading } = useFecth<IRepository[]>(
    "users/rafaelsangali/repos"
  );

  return (
    <main className="ml-[80px] flex flex-wrap justify-evenly">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        repositories?.map((repo, index) => (
          <CardTopProjects
            key={repo.name + index}
            title={repo.name}
            description={repo.description}
            url={repo.html_url}
          />
        ))
      )}
    </main>
  );
}

// {repositories?.map((repo) => {
//   return (
//     <li key={repo.full_name}>
//       <strong>{repo.full_name}</strong>
//     </li>
//   );
// })}
