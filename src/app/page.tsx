'use client'

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"]

  const prevImage = () => {
    const prev = currentImage > 0 ? currentImage -1 : images.length -1;
    setCurrentImage(prev)
  }

  const nextImage = () => {
    const next = currentImage == images.length -1 ? 0 : currentImage +1;
    setCurrentImage(next)
  }

  const variants = {
    initial: {
      x: 200,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -200,
      opacity: 0
    },
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="flex-col relative">
        <motion.img
          className="object-cover w-[600px] h-[300px] rounded-xl"
          key={images[currentImage]}
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          src={`/${images[currentImage]}`}
          alt="cat image"
          title="cat"
        /> 
        <button 
          onClick={() => prevImage()}
          className="flex justify-center items-center w-7 h-12 px-2 absolute m-auto top-0 bottom-0 left-4 bg-black rounded-xl bg-opacity-70 hover:bg-opacity-100 text-4xl"
        >
          <motion.span whileTap={{x: -6}}>{"◂"}</motion.span>
        </button>
        <button
          onClick={() => nextImage()}
          className="flex justify-center items-center w-7 h-12 px-2 absolute m-auto top-0 bottom-0 right-4 bg-black rounded-xl bg-opacity-70 hover:bg-opacity-100 text-4xl"
        >
          <motion.span whileTap={{x: 6}}>{"▸"}</motion.span>
        </button>
        <div className="flex items-center justify-center text-center gap-4 text-3xl">
          {images.map((e, index) => 
            <span key={e} className={`${currentImage !== index && "opacity-60"} cursor-pointer transition-all ease-in-out duration-300`} onClick={() => setCurrentImage(index)}>•</span>
          )}
        </div>
      </section>
    </main>
  );
}
