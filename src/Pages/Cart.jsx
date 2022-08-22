import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state) => state.item.itemCart);

  return (
    <div className="cart">
      {cartItems.length < 1 ? (
        <h1 className="cart__title title-page"> Пусто </h1>
      ) : (
        <>
          {' '}
          <div className="cart__header">
            <h1 className="cart__title title-page">
              В корзине книг: <span>{cartItems.length}</span>
            </h1>
            <button className="cart__clear">Удалить все товары</button>
          </div>
          <div className="cart__items">
            {cartItems.map((obj) => (
              <div className="cart__item item-cart">
                <div className="item-cart__image">
                  <img src={obj.imageUrl} alt="" />
                </div>
                <div className="item-cart__description">
                  <h2 className="item-cart__title">{obj.title}</h2>
                  <p className="item-cart__author">{obj.author}</p>
                </div>
                <div className="item-cart__counter counter-cart">
                  <div className="counter-cart__container">
                    <button className="counter-cart__button btn -minus">-</button>
                    <span>1</span>
                    <button className="counter-cart__button btn -plus">+</button>
                  </div>
                </div>
                <div className="item-cart__price">
                  <p className="item-cart__price-for-one">{obj.price} ₽</p>
                  <p className="item-cart__price-total">{obj.price} ₽ x 1 шт.</p>
                </div>
                <div className="item-cart__buttons buttons-cart">
                  <div className="buttons-cart__container">
                    <button className="buttons-cart__add-wish btn">
                      <svg x="0px" y="0px" viewBox="0 0 490.667 490.667">
                        <g>
                          <g>
                            <path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333    S380.608,0,245.333,0z M402.219,210.219l-70.635,70.635l19.648,98.24c0.768,1.472,1.195,3.136,1.195,4.907    c0,5.973-5.525,10.624-10.88,10.667h-0.213c-1.771,0-3.563-0.448-5.184-1.344l-90.816-50.453l-90.816,50.453    c-3.627,2.027-8.107,1.771-11.477-0.704c-3.349-2.453-4.971-6.635-4.16-10.709l20.203-101.056l-70.635-70.635    c-2.901-2.901-3.883-7.211-2.517-11.072c1.344-3.861,4.821-6.613,8.896-7.083l90.539-10.048l50.667-91.179    c3.755-6.763,14.891-6.763,18.645,0l50.667,91.179l90.539,10.048c4.075,0.448,7.531,3.2,8.896,7.083    C406.101,203.008,405.099,207.317,402.219,210.219z"></path>
                          </g>
                        </g>
                      </svg>
                      В избранное
                    </button>
                    <button className="buttons-cart__remove">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"></path>
                      </svg>
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="cart__item item-cart">
              <div className="item-cart__image">
                <img src="https://img-gorod.ru/29/219/2921973_preview.jpg" alt="" />
              </div>
              <div className="item-cart__description">
                <h2 className="item-cart__title">Люблю и понимаю</h2>
                <p className="item-cart__author">Лабковский М.</p>
              </div>
              <div className="item-cart__counter counter-cart">
                <div className="counter-cart__container">
                  <button className="counter-cart__button btn -minus">-</button>
                  <span>1</span>
                  <button className="counter-cart__button btn -plus">+</button>
                </div>
              </div>
              <div className="item-cart__price">
                <p className="item-cart__price-for-one">789 ₽</p>
                <p className="item-cart__price-total">789 ₽ x 1 шт.</p>
              </div>
              <div className="item-cart__buttons buttons-cart">
                <div className="buttons-cart__container">
                  <button className="buttons-cart__add-wish btn">
                    <svg x="0px" y="0px" viewBox="0 0 490.667 490.667">
                      <g>
                        <g>
                          <path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333    S380.608,0,245.333,0z M402.219,210.219l-70.635,70.635l19.648,98.24c0.768,1.472,1.195,3.136,1.195,4.907    c0,5.973-5.525,10.624-10.88,10.667h-0.213c-1.771,0-3.563-0.448-5.184-1.344l-90.816-50.453l-90.816,50.453    c-3.627,2.027-8.107,1.771-11.477-0.704c-3.349-2.453-4.971-6.635-4.16-10.709l20.203-101.056l-70.635-70.635    c-2.901-2.901-3.883-7.211-2.517-11.072c1.344-3.861,4.821-6.613,8.896-7.083l90.539-10.048l50.667-91.179    c3.755-6.763,14.891-6.763,18.645,0l50.667,91.179l90.539,10.048c4.075,0.448,7.531,3.2,8.896,7.083    C406.101,203.008,405.099,207.317,402.219,210.219z"></path>
                        </g>
                      </g>
                    </svg>
                    Add to wish
                  </button>
                  <button className="buttons-cart__remove">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="cart__item item-cart">
              <div className="item-cart__image">
                <img src="https://img-gorod.ru/29/132/2913283_preview.jpg" alt="" />
              </div>
              <div className="item-cart__description">
                <h2 className="item-cart__title">Стальной Алхимик. Книга 17</h2>
                <p className="item-cart__author">Аракава Х.</p>
              </div>
              <div className="item-cart__counter counter-cart">
                <div className="counter-cart__container">
                  <button className="counter-cart__button btn -minus">-</button>
                  <span>1</span>
                  <button className="counter-cart__button btn -plus">+</button>
                </div>
              </div>
              <div className="item-cart__price">
                <p className="item-cart__price-for-one">989 ₽</p>
                <p className="item-cart__price-total">989 ₽ x 1 шт.</p>
              </div>
              <div className="item-cart__buttons buttons-cart">
                <div className="buttons-cart__container">
                  <button className="buttons-cart__add-wish btn">
                    <svg x="0px" y="0px" viewBox="0 0 490.667 490.667">
                      <g>
                        <g>
                          <path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333    S380.608,0,245.333,0z M402.219,210.219l-70.635,70.635l19.648,98.24c0.768,1.472,1.195,3.136,1.195,4.907    c0,5.973-5.525,10.624-10.88,10.667h-0.213c-1.771,0-3.563-0.448-5.184-1.344l-90.816-50.453l-90.816,50.453    c-3.627,2.027-8.107,1.771-11.477-0.704c-3.349-2.453-4.971-6.635-4.16-10.709l20.203-101.056l-70.635-70.635    c-2.901-2.901-3.883-7.211-2.517-11.072c1.344-3.861,4.821-6.613,8.896-7.083l90.539-10.048l50.667-91.179    c3.755-6.763,14.891-6.763,18.645,0l50.667,91.179l90.539,10.048c4.075,0.448,7.531,3.2,8.896,7.083    C406.101,203.008,405.099,207.317,402.219,210.219z"></path>
                        </g>
                      </g>
                    </svg>
                    Add to wish
                  </button>
                  <button className="buttons-cart__remove">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="cart__item item-cart">
              <div className="item-cart__image">
                <img src="https://img-gorod.ru/29/107/2910705_preview.jpg" alt="" />
              </div>
              <div className="item-cart__description">
                <h2 className="item-cart__title">Благословение небожителей. Том 2</h2>
                <p className="item-cart__author">Мосян Тунсю</p>
              </div>
              <div className="item-cart__counter counter-cart">
                <div className="counter-cart__container">
                  <button className="counter-cart__button btn -minus">-</button>
                  <span>3</span>
                  <button className="counter-cart__button btn -plus">+</button>
                </div>
              </div>
              <div className="item-cart__price">
                <p className="item-cart__price-for-one">3750 ₽</p>
                <p className="item-cart__price-total">1250 ₽ x 1 шт.</p>
              </div>
              <div className="item-cart__buttons buttons-cart">
                <div className="buttons-cart__container">
                  <button className="buttons-cart__add-wish btn">
                    <svg x="0px" y="0px" viewBox="0 0 490.667 490.667">
                      <g>
                        <g>
                          <path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333    S380.608,0,245.333,0z M402.219,210.219l-70.635,70.635l19.648,98.24c0.768,1.472,1.195,3.136,1.195,4.907    c0,5.973-5.525,10.624-10.88,10.667h-0.213c-1.771,0-3.563-0.448-5.184-1.344l-90.816-50.453l-90.816,50.453    c-3.627,2.027-8.107,1.771-11.477-0.704c-3.349-2.453-4.971-6.635-4.16-10.709l20.203-101.056l-70.635-70.635    c-2.901-2.901-3.883-7.211-2.517-11.072c1.344-3.861,4.821-6.613,8.896-7.083l90.539-10.048l50.667-91.179    c3.755-6.763,14.891-6.763,18.645,0l50.667,91.179l90.539,10.048c4.075,0.448,7.531,3.2,8.896,7.083    C406.101,203.008,405.099,207.317,402.219,210.219z"></path>
                        </g>
                      </g>
                    </svg>
                    Add to wish
                  </button>
                  <button className="buttons-cart__remove">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="total">
            <p className="total__tota-count">
              <span>Товаров -</span> 3
            </p>
            <p className="total__tota-price">
              <span>Сумма к оплате -</span> 2503 ₽
            </p>
            <button className="total__send btn">Перейти к оплате</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
