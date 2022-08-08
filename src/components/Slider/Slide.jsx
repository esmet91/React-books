import React from 'react';

function Slide({ slideBg, imageUrl, title, description, author }) {
  const defaultBg =
    'https://catherineasquithgallery.com/uploads/posts/2021-02/1612746303_85-p-goluboi-fon-setka-123.jpg';

  return (
    <div>
      <div className="slider-main__item item-slider">
        <div className="item-slider__bg-image">
          {/* <img src={!slideBg ? defaultBg : slideBg} alt="" /> */}
          <img src={imageUrl} alt="" />
        </div>
        <div className="item-slider__images">
          <div className="item-slider__image1">
            <img src={imageUrl} alt="" />
          </div>
          <div className="item-slider__image2">
            <div className="small-book">
              <img src={imageUrl} alt="" />
            </div>
          </div>
        </div>
        <div className="item-slider__text">
          <h1 className="item-slider__title">{title}</h1>
          <p className="item-slider__subtitle">{description.slice(0, 80) + `...`}</p>
          <p className="item-slider__author">{`"` + author + `"`}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
