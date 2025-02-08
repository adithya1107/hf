import { subsystem } from "../constants";
import Heading from "./Heading.jsx";
import { motion } from "framer-motion";

const Subsystem = () => {
  return (
    <section id="subsystem" className="py-16 bg-black/15 text-white">
      <div className="relative z-2 max-w-8xl mx-auto px-6">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mx-auto"
          title="Subsystems"
          tag="Our subsystems"
        />

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {subsystem.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
                borderColor: "rgba(0, 255, 255, 0.4)",
              }}
              transition={{ duration: 0.3 }}
              className="relative p-6 bg-black-100 border border-gray-700 rounded-2xl shadow-lg md:max-w-[24rem]"
            >
              <div className="relative z-2 flex flex-col min-h-[18rem]">
                <div className="flex justify-between p-2">
                  <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      filter: "drop-shadow(0px 0px 10px rgba(0, 255, 255, 0.3))",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-black-300">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsystem;