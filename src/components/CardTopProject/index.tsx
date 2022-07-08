interface ICardTopProjectsProps {
  img?: string;
  title?: string;
  description?: string;
  iconGlobe?: string;
  iconGithub?: string;
}

export default function CardTopProjects(props: ICardTopProjectsProps) {
  return (
    <div className="rounded-lg shadow-lg bg-gray-700 h-min w-min border border-gray-500 m-5">
      <a href="#!">
        <img
          className="rounded-t-lg hover:opacity-50 transition-opacity"
          src={""}
          alt=""
        />
      </a>
      <div className="p-6">
        <h3 className="text-white text-xl font-medium mb-2">Card title</h3>
        <p className="text-zinc-300 text-base mb-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. lore
        </p>
        <div className="flex  w-auto items-center ">
          <a
            className="flex justify-center rounded-md p-2 cursor-pointer bg-cyan-600 hover:bg-cyan-400 transition-colors text-sm font-semibold m-1 w-[80px]"
            href=""
          >
            <img className="w-[20px] h-[20px] mr-2" src={props.iconGlobe} />
            Site
          </a>
          <a
            className="flex rounded-md p-2 cursor-pointer bg-cyan-600 transition-colors text-sm justify-center font-semibold m-1 w-[80px] hover:bg-cyan-400"
            href={""}
          >
            <img className="w-[20px] h-[20px] mr-2" src={props.iconGithub} />
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}
