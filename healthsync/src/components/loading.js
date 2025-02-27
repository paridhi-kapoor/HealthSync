import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000); // Simulating a 3-second loading time
  }, []);

  return (
    <div className="loading-container">
      {loading ? (
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="loading-text"
        >
          Wait a moment...
        </motion.h1>
      ) : (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="loading-text"
        >
          WELCOME TO HEALTHSYNC
        </motion.h1>
      )}
    </div>
  );
}