import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CollapseProps = {
  title: string;
  children: ReactNode;
};

export default function Collapse(props: CollapseProps) {
  const { title, children } = props;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 bg-[#111827] p-4">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <div className="flex justify-between">
          <p className="text-white font-bold">{title}</p>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
