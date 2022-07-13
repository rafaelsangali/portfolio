import { motion } from "framer-motion";
import { useContext } from "react";
import { TabsContext } from "../../../contexts/TabsContext";

interface ITabContentProps {
  title: string;
  text: string;
  index: number;
}

export default function TabContent(props: ITabContentProps) {
  const { toggle } = useContext(TabsContext);

  return (
    <motion.div
      animate={toggle == props.index ? { opacity: [0.7, 1] } : {}}
      className={
        toggle == props.index
          ? "h-auto p-4 bg-zinc-900 border border-zinc-700 rounded-b-xl"
          : "hidden"
      }
    >
      <h3 className="text-xl font-semibold">{props.title}</h3>
      <p>{props.text}</p>
    </motion.div>
  );
}
