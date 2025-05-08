import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = ({ children }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.5 });

    return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
    )
}

export default FadeInSection