import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useRef } from 'react';

const Tabs = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleClick = (index: number) => {
    console.log(index + '---');
  };
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      direction="horizontal"
      slidesPerView="auto"
      centeredSlides
      centeredSlidesBounds
      onSlideChange={(swiper) => {
        console.log(swiper.realIndex);
      }}
      className="w-[300px] h-8 border border-black"
    >
      <SwiperSlide
        className="w-max h-full mr-2 shrink-0"
        onClick={() => {
          handleClick(1);
        }}
      >
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 1</span>
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-max h-full mr-2 shrink-0">
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 2</span>
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-max h-full mr-2 shrink-0">
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 3</span>
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-max h-full mr-2 shrink-0">
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 4</span>
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-max h-full mr-2 shrink-0">
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 5</span>
        </button>
      </SwiperSlide>
      <SwiperSlide
        className="w-max h-full mr-2 shrink-0"
        onClick={() => {
          handleClick(6);
        }}
      >
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 6</span>
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-max h-full mr-2 shrink-0">
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 7</span>
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-max h-full mr-2 shrink-0">
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 8</span>
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-max h-full mr-2 shrink-0">
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 9</span>
        </button>
      </SwiperSlide>
      <SwiperSlide className="w-max h-full mr-2 shrink-0">
        <button className="bg-[#dbdbdb] px-2 h-full">
          <span>거실 10</span>
        </button>
      </SwiperSlide>
    </Swiper>
  );
};

export default Tabs;
