//eslint-disable-line no-use-before-define
import "./parallax.scss";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"] //eslint-disable-line no-use-before-define
  });

  //
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg , #111132,#c0c1d"
            : "linear-gradient(180deg , #111132,#505064",
      }}
    >
      <motion.h1 style={{ y : yBg }}>
        {type === "services" ? "what we do?" : "what we did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"> </motion.div>
      <motion.div className="stars"> </motion.div>
    </div>
  );
};
export default Parallax;
