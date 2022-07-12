import { motion } from "framer-motion";

interface ICardTopProjectsProps {
  title: string;
  description?: string;
  url: string;
  topics: Array<string>;
}

export default function CardAllProjects(props: ICardTopProjectsProps) {
  return (
    <motion.a
      href={props.url}
      target={"_blank"}
      whileHover={{ scale: 1.1 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className="rounded-lg shadow-lg bg-gray-700 border border-gray-500 m-5 h-auto w-80 break-all shadow-cyan-700 hover:shadow-cyan-300"
    >
      <div className="p-6 ">
        <h3 className="text-white text-xl font-medium mb-2">{props.title}</h3>
        <p className="h-[11ch] text-zinc-300 text-base text-ellipsis overflow-hidden">
          {props.description}...
        </p>
      </div>
      <div className="px-4  pb-2">
        {props.topics.map((topic, index) => (
          <span
            key={topic + index}
            className="inline-block bg-gray-500  rounded-full px-3 py-1 text-sm font-semibold text-zinc-300 hover:bg-gray-600 mr-2 mb-2"
          >
            {topic}
          </span>
        ))}
      </div>
      <span className="text-[0.5rem] sm:text-xs text-zinc-600 flex justify-center p-2">
        *Ao clicar será redirecionado ao repositório*
      </span>
    </motion.a>
  );
}
