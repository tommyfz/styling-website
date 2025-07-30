"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("mnnzvajy");
  const formRef = useRef<HTMLFormElement>(null);

  const handleModalClose = () => {
    reset();
    if (formRef.current) formRef.current.reset();
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative w-full h-[50vh] md:h-[65vh]">
        {/* <Image
          src="/contact-hero.jpg" // You can add your own image to public/
          alt="Contact us"
          fill
          priority
          className="object-cover"
        /> */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-serif font-semibold px-4 text-center"
          >
            Let’s Connect
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 text-lg mb-8 leading-8"
        >
          Whether you're ready to start a project or simply want to ask a
          question, we'd love to hear from you.
        </motion.p>

        {/* Form */}
        <motion.form
          ref={formRef}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="grid gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-2 text-sm text-gray-600">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              pattern="[0-9+\- ]*"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className={`bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-all duration-300 ${
              state.submitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800 hover:scale-105 cursor-pointer"
            }`}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Contact Details */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-gray-600 text-sm"
        >
          <p>📍 Sydney, Australia</p>
          <p>📧 hello@stylingco.com.au</p>
          <p>📞 +61 400 000 000</p>
        </motion.div>
      </motion.section>

      {/* ✅ Modal Popup */}
      <AnimatePresence>
        {state.succeeded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center"
            >
              <h2 className="text-2xl font-semibold mb-3">Thank You!</h2>
              <p className="text-gray-700 mb-6">
                Your message has been submitted successfully.
              </p>
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Contact;
