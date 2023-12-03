import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DropDownAnimationProps = {
  isOpen: boolean;
  heightValue: string;
  children: ReactNode;
};

export default function DropDownAnimation(props: DropDownAnimationProps) {
  const { isOpen, heightValue, children } = props;

  return (
    <AnimatePresence>
      {
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? heightValue : 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden"
        >
          {children}
        </motion.section>
      }
    </AnimatePresence>
  );
}
