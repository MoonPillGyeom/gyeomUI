import React from "react";
import CarouselImg from "./CarouselImg";

interface CarouselProps {
  /** Carousel의 이미지 리스트 입니다. */
  images: string[];
}

function Carousel({ images }: CarouselProps) {
  console.log(images);

  return (
    <>
      <div style={{width: '370px', height: '500px'}}>
<div style={{display: 'flex', gap: '10px', overflow: "hidden"}}>
      {images.map((img, index) => (
        <CarouselImg src={img} alt={img} key={index} style={{ backgroundColor: 'red',  border: '2px solid green', borderRadius: '20px', width: '370px', height:'500px'}} />
      ))}
      </div>
      </div>
    </>
  );
}

export default Carousel;
