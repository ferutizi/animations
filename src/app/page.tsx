'use client'

import { useState } from "react"

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"]

  const prevImage = () => {
    const prev = currentImage > 0 ? currentImage -1 : images.length -1;
    setCurrentImage(prev)
  }

  const nextImage = () => {
    const next = currentImage == images.length -1 ? 0 : currentImage +1;
    setCurrentImage(next)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="flex relative">
        <button 
          onClick={() => prevImage()}
          className="flex justify-center items-center w-7 h-12 px-2 absolute m-auto top-0 bottom-0 left-4 bg-black rounded-xl bg-opacity-70 hover:bg-opacity-100 text-5xl -scale-x-100"
        >{"‣"}
        </button>

        <img className="object-cover w-[600px] h-[300px]" src={`/${images[currentImage]}`} alt="cat image" title="cat"></img>

        <button
          onClick={() => nextImage()}
          className="flex justify-center items-center w-7 h-12 px-2 absolute m-auto top-0 bottom-0 right-4 bg-black rounded-xl bg-opacity-70 hover:bg-opacity-100 text-5xl"
        >{"‣"}
        </button>
      </section>
    </main>
  );
}
