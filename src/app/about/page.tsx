"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[70vh]">
        {/* import { motion } from 'framer-motion' */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-serif font-semibold px-4 text-center"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-serif text-gray-900 mb-6"
        >
          Our Philosophy
        </motion.h2>

        {[
          "At Styling Co., we believe that a well-designed space is not just visually pleasing, but deeply emotional. We blend timeless aesthetics with functional elegance to create interiors that feel calm, inspiring, and personal.",
          "Every project is a collaboration — a shared vision between our team and our clients. We listen deeply, design intentionally, and focus on craftsmanship, light, texture, and proportion.",
          "Whether styling for living or staging for sale, our approach is rooted in clarity, authenticity, and a deep appreciation for design that lasts.",
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="text-gray-700 text-lg leading-8 mb-6"
          >
            {text}
          </motion.p>
        ))}
      </motion.section>
    </main>
  );
};

export default About;
