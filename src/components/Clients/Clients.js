import React, { useState } from 'react';
// Antd Components
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBefore = (current, next) => {
    setCurrentSlide(next);
  };
  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextClick = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="mt-[50px] px-[15px]">
      <h2 className="text-[22px] tablet:text-[30px] font-bold">Our Clients</h2>
      <Carousel
        {...settings}
        autoplay
        beforeChange={handleBefore}
        className="h-[60px] text-center mt-[50px]"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Carousel>
      <div className='flex justify-left mt-[16px] text-sky-400 border-solid rounded-full'>
        <LeftOutlined onClick={handlePrevClick} className='text-[10px] px-[20px]'  />
        <RightOutlined onClick={handleNextClick} className='text-[10px]' />
      </div>
    </div>
  );
}
export default Clients;
