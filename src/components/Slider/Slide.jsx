import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectItem } from '../../Redux/Slices/itemSlice';
import { Link } from 'react-router-dom';

function Slide({ slides }) {
  const dispatch = useDispatch();
  const selectingItem = (obj) => {
    dispatch(setSelectItem(obj));
  };
  const defaultBg =
    'https://catherineasquithgallery.com/uploads/posts/2021-02/1612746303_85-p-goluboi-fon-setka-123.jpg';

  return (
    <div>
      <Link
        to={'/bookpage'}
        onClick={() => selectingItem(slides)}
        className="slider-main__item item-slider">
        <div className="item-slider__bg-image">
          {/* <img src={!slideBg ? defaultBg : slideBg} alt="" /> */}
          <img src={slides.imageUrl} alt="" />
        </div>
        <div className="item-slider__images">
          <div className="item-slider__image1">
            <img src={slides.imageUrl} alt="" />
          </div>
          <div className="item-slider__image2">
            <div className="small-book">
              <img src={slides.imageUrl} alt="" />
            </div>
          </div>
        </div>
        <div className="item-slider__text">
          <h1 className="item-slider__title">{slides.title}</h1>
          <p className="item-slider__subtitle">{slides.description.slice(0, 80) + `...`}</p>
          <p className="item-slider__author">{`"` + slides.author + `"`}</p>
        </div>
      </Link>
    </div>
  );
}

export default Slide;
