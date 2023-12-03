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
          initial={{ height: 0 }}
          animate={{
            height: isOpen ? heightValue : 0,
          }}
          exit={{ height: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full overflow-hidden"
        >
          {children}
        </motion.section>
      }
    </AnimatePresence>
  );
}
