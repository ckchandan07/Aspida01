import React from "react";
import { motion } from "framer-motion";
import loaderpgn from "../assets/image/what'sapp/loader.gif"; // 👈 apni image ka path yaha change karo

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      {/* Image / Logo */}
      <div className="loder-image">
      <img
        src={loaderpgn}
        alt="Loading..."
        className="mb-4 animate-pulse"
      />
      </div>

      {/* Spinning loader */}
      <motion.div
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
    </div>
  );
};

export default Loader;
