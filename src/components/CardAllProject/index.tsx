import { motion } from "framer-motion";
import { icons } from "../../assets";

interface ICardTopProjectsProps {
  title: string;
  description?: string;
  url: string;
}

export default function CardAllProjects(props: ICardTopProjectsProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className="rounded-lg shadow-lg bg-gray-700 border border-gray-500 m-5 h-auto w-80 break-all shadow-cyan-700 hover:shadow-cyan-300"
    >
      <div className="p-6 ">
        <h3 className="text-white text-xl font-medium mb-2">{props.title}</h3>
        <p className="h-[11ch] text-zinc-300 text-base mb-4 text-ellipsis overflow-hidden">
          {props.description}...
        </p>
        <div className="flex  w-auto justify-center">
          <a
            target={"_blank"}
            className="flex rounded-md p-2 cursor-pointer bg-cyan-600 transition-colors text-sm justify-center font-semibold m-1 w-[80px] hover:bg-cyan-400"
            href={props.url}
          >
            <img className="w-[20px] h-[20px] mr-2" src={icons.iconGithub} />
            Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
