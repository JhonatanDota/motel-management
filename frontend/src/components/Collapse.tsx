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
        {
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
          >
            {children}
          </motion.section>
        }
      </AnimatePresence>
    </div>
  );
}
