import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
}

const animations = {
    initial: { opacity: 0, y: 10 }, // Starts slightly lower & transparent
    animate: { opacity: 1, y: 0 },  // Moves up and fades in
};

const Animation = ({ children }: AnimationProps) => {
  return (
    <motion.div 
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.4, ease: "easeOut" }}>
        {children}
    </motion.div>
  )
};

export default Animation;
