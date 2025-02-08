import Tagline from "./Tagline";
import { motion } from "framer-motion";
const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-semibold text-white sm:text-3xl">
        {title}
      </motion.div>
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {text && <p className="mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
