import { motion } from "framer-motion";

interface ITrasitionProps {
  children: JSX.Element | any;
  className?: string;
}

export default function TransitionMain(props: ITrasitionProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={props.className}
    >
      {props.children}
    </motion.main>
  );
}
