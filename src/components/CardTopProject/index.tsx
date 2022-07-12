import { motion } from "framer-motion";
import { icons } from "../../assets";

interface ICardTopPropjectProps {
  title: string;
  text: string;
  img: string;
  urlWeb: string;
  urlGit: string;
}

export default function CardTopProject(props: ICardTopPropjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className="max-w-xl bg-gray-700 border border-gray-500 rounded-lg shadow-md lg:flex md:flex md:flex-row-reverse shadow-cyan-700 hover:shadow-cyan-300 m-5"
    >
      <img
        className="object-cover w-full md:w-1/2 lg:w-1/3"
        src={props.img}
        alt={`Imagem ${props.title}`}
      />
      <div className="px-6 py-4">
        <h3 className="mb-3 text-base font-semibold tracking-tight text-white">
          {props.title}
        </h3>
        <p className="mb-2 text-sm leading-normal text-justify text-zinc-300 text-ellipsis overflow-hidden h-[11ch]">
          {props.text}
        </p>
        <div className="flex">
          <a
            target={"_blank"}
            className="flex rounded-md p-2 cursor-pointer bg-cyan-600 transition-colors text-sm justify-center font-semibold m-1 w-[80px] hover:bg-cyan-400"
            href={props.urlGit}
          >
            <img className="w-[20px] h-[20px] mr-2" src={icons.iconGithub} />
            Repo
          </a>
          <a
            target={"_blank"}
            className="flex rounded-md p-2 cursor-pointer bg-cyan-600 transition-colors text-sm justify-center font-semibold m-1 w-[80px] hover:bg-cyan-400"
            href={props.urlWeb}
          >
            <img className="w-[20px] h-[20px] mr-2" src={icons.iconGlobe} />
            Site
          </a>
        </div>
      </div>
    </motion.div>
  );
}
