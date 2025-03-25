import { ComponentProps } from "react";

interface CarouselImgProps extends ComponentProps <"img"> {
  src?: string;
  alt: string;
}

function CarouselImg({src, alt, ...porps}: CarouselImgProps) {
  return (
  <img src={src} alt={alt} {...porps}  />
  )
}

export default CarouselImg

