import { motion } from "framer-motion";
import { useContext } from "react";
import { TabsContext } from "../../../contexts/TabsContext";

interface ITabNavProps {
  img?: string;
  index: number;
}

export default function TabNav(props: ITabNavProps) {
  const { toggle, setToggle } = useContext(TabsContext);
  return (
    <li
      className={`mr-2 rounded-t-lg cursor-pointer ${
        toggle == props.index ? "bg-zinc-700" : ""
      }`}
      onClick={() => setToggle(props.index)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        src={props.img}
        width={40}
        className="inline-block p-2"
      />
    </li>
  );
}
