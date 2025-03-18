import React, { useEffect, useState } from "react";
import CarouselImg from "./CarouselImg";

interface CarouselProps {
  /** Carousel의 이미지 리스트 입니다. */
  images: string[];
}

function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
const nextImg = setInterval(() => {
  nextSlide();
}, 3000)
  return () => clearInterval(nextImg);
  }, [images.length]);

  return (
    <>
      <div style={{width: '370px', height: '500px'}}>
<div style={{display: 'flex', gap: '10px', overflow: "hidden"}}>
<button style={{all: 'unset'}} onClick={prevSlide}>
  <img src='../../assets/_allow-left-all.svg' />
</button>
  <CarouselImg src={images[currentIndex]} alt={`test ${currentIndex}`} style={{ border: '2px solid green', borderRadius: '20px', width: '370px', height:'500px'}} />
  <button style={{all: 'unset'}} onClick={nextSlide}>
<img src='../../assets/_allow-right.svg' />
</button>
      </div>
      </div>
    </>
  );
}

export default Carousel;
