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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex relative">
        <button onClick={() => prevImage()} className="text-5xl absolute m-auto top-0 bottom-0 left-2">{"\<"}</button>
        <div className="">
          <img className="object-cover w-[600px] h-[300px]" src={`/${images[currentImage]}`} alt="cat image" title="cat"></img>
        </div>
        <button onClick={() => nextImage()} className="text-5xl absolute m-auto top-0 bottom-0 right-2">{"\>"}</button>
      </div>
    </main>
  );
}
