import React from 'react';
import SliderSlick from 'react-slick';
import Slide from './Slide';

function Slider({ items }) {
  const defaultBg =
    'https://catherineasquithgallery.com/uploads/posts/2021-02/1612746303_85-p-goluboi-fon-setka-123.jpg';

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    //autoplay: true,
    //autoplaySpeed: 5000,
  };
  return (
    <div>
      <SliderSlick {...settings} className="main-slider">
        {items.map((obj) => obj.slider && <Slide key={obj.id} slides={obj} />)}
      </SliderSlick>
    </div>
  );
}

export default Slider;
