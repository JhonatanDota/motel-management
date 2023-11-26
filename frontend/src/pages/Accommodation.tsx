import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccommodationModel from "../models/AccommodationModel";
import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import AddAccommodation from "../components/accommodation/AddAccommodation";
import Add from "../components/Add";
import Collapse from "../components/Collapse";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

import accommodationDumy from "../data/accommodationDumy";
import roomDumy from "../data/roomDumy";
import consumableItemDumy from "../data/consumableItemDumy";

export default function Accommodation() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <PageContainer>
      <PageTitle title="Acomodações" />
      <button onClick={() => setOpenAdd(!openAdd)} className="">
        {openAdd ? (
          <FaSquareMinus className="text-4xl" fill="red" />
        ) : (
          <FaSquarePlus className="text-4xl" fill="green" />
        )}
      </button>

      <AnimatePresence>
        {
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openAdd ? 1 : 0, height: openAdd ? "100%" : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
          >
            <Add
              children={
                <AddAccommodation
                  rooms={roomDumy}
                  consumableItems={consumableItemDumy}
                />
              }
            />
          </motion.section>
        }
      </AnimatePresence>

      <div className="flex flex-col gap-3 w-full">
        {accommodationDumy.map((accommodation: AccommodationModel) => (
          <Collapse
            title={accommodation.alias}
            children={<h1 className="bg-green-400">Testando</h1>}
          />
        ))}
      </div>
    </PageContainer>
  );
}
