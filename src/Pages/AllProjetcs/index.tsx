import CardAllProjects from "../../components/CardAllProject";
import LoadingScreen from "../../components/LoadingScreen";
import TransitionMain from "../../components/TransitionMain";
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
    <TransitionMain className="ml-[80px] flex flex-wrap justify-evenly">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        repositories?.map((repo, index) => (
          <CardAllProjects
            key={repo.name + index}
            title={repo.name}
            description={repo.description}
            url={repo.html_url}
          />
        ))
      )}
    </TransitionMain>
  );
}
