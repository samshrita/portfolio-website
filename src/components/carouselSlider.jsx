import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselSlider({ isPhone, carouselImg }) {
  const imgClass = isPhone
    ? "max-h-[13.4rem] max-w-[6rem] rounded-[10px] object-contain"
    : "max-w-[18.5rem] max-h-[11.35rem] object-contain mt-[10px]";

  const carouselItems = carouselImg.map((img) => (
    <div key={img}>
      {" "}
      <img
        className={imgClass}
        src={img.imgSrc}
        alt={img.imgTitle}
        title={img.imgTitle}
      />{" "}
    </div>
  ));

  return (
    <Carousel
      autoPlay={2}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      {carouselItems}
    </Carousel>
  );
}
