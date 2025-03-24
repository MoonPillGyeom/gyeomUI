import { useEffect, useState } from "react";
import CarouselImg from "./CarouselImg";
import Button from "../Button";

interface CarouselProps {
  /** Carousel의 이미지 리스트 입니다. */
  images: string[];
}

function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
const nextImg = setInterval(() => {
  handleNextSlide();
}, 3000)
  return () => clearInterval(nextImg);
  }, [images.length]);

  return (
    <>
  <div style={{width: '370px', height: '500px'}}>
    <div style={{display: 'flex', gap: '10px', overflow: "hidden"}}>

  <CarouselImg src={images[currentIndex]} alt={`test ${currentIndex}`} style={{ borderRadius: '20px', width: '370px', height:'500px'}} />
    </div>
      <div style={{display: 'flex', gap: '20px', marginTop: '10px'}}>
    <Button onClick={handlePrevSlide}>이전</Button>
    <Button onClick={handleNextSlide}>다음</Button>
      </div>
  </div>
    </>
  );
}

export default Carousel;
