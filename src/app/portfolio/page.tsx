"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ImageLightbox from "@/Components/ImageLightbox";

const imageCount = {
  Residential: 5,
  Commercial: 4,
  Office: 2,
};

const getImagesForCategory = (category: keyof typeof imageCount) => {
  const count = imageCount[category];
  return Array.from(
    { length: count },
    (_, i) => `/portfolio/${category.toLowerCase()}/${i + 1}.jpg`
  );
};

export const PortfolioPage = () => {
  const categories = Object.keys(imageCount) as (keyof typeof imageCount)[];
  const [selectedCategory, setSelectedCategory] = useState<
    keyof typeof imageCount | null
  >(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = selectedCategory ? getImagesForCategory(selectedCategory) : [];

  const handleBack = () => {
    setSelectedCategory(null);
    setLightboxIndex(null);
  };

  const handleCloseLightbox = () => setLightboxIndex(null);
  const handlePrev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + images.length - 1) % images.length : null
    );
  const handleNext = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Portfolio</h1>

      {!selectedCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <div
              key={category}
              className="cursor-pointer group"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="overflow-hidden rounded-lg shadow hover:shadow-xl transition">
                <Image
                  src={`/portfolio/${category.toLowerCase()}/cover.jpg`}
                  alt={category}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center mt-2 font-medium text-lg">{category}</p>
            </div>
          ))}
        </motion.div>
      )}

      {selectedCategory && (
        <>
          <button
            onClick={handleBack}
            className="mb-6 px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-100 transition cursor-pointer"
          >
            ← Back to Categories
          </button>

          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full h-60 rounded-lg shadow overflow-hidden cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              >
                <Image
                  src={src}
                  alt={`${selectedCategory} image ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </>
      )}

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </main>
  );
};

export default PortfolioPage;
