import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import Search from './Search';

import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector((state) => state.item.itemCart);
  const totalSum = useSelector((state) => state.item.totalPrice);

  return (
    <header className="header">
      <div className="header__top top-header">
        <ul className="top-header__list container">
          <li>
            <a href="#" className="top-header__link">
              Sign in
            </a>
          </li>
          <li>
            <a href="#" className="top-header__link">
              My Account
            </a>
          </li>
          <li>
            <a href="#" className="top-header__link">
              Order Status
            </a>
          </li>
          <li>
            <a href="#" className="top-header__link">
              Help
            </a>
          </li>
        </ul>
      </div>
      <div className="header__body body-header">
        <div className="body-header__container container">
          <Link to="/">
            <div className="body-header__logo">
              <img src={logo} alt="" />
            </div>
          </Link>

          {window.screen.width > 860 && <Search />}
          <div className="body-header__cart cart-header">
            <div className="cart-header__top">
              <a href="#">
                <svg className="cart-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
                  <circle cx="10.5" cy="19.5" r="1.5" />
                  <circle cx="17.5" cy="19.5" r="1.5" />
                </svg>
              </a>
              <span className="cart-header__cart-count header-items-count">2</span>
              <p className="cart-header__info">
                Your cart <span>(2 items)</span>
              </p>
            </div>
            <div className="cart-header__bottom">
              <p className="cart-header__price">$125.0</p>
              <button className="cart-header__button">Chechout</button>
            </div>
          </div>
          <a href="#" className="body-header__wish wish">
            <svg className="wish-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.194,7.106c-13.689,0-24.826,11.137-24.826,24.826c0,13.69,11.137,24.828,24.826,24.828  c13.689,0,24.826-11.138,24.826-24.828C57.021,18.243,45.884,7.106,32.194,7.106z M45.911,30.117v0.001l-7.187,5.2l2.768,8.46  c0.044,0.132,0.067,0.273,0.067,0.417c0,0.739-0.598,1.339-1.337,1.339c-0.294,0-0.564-0.094-0.784-0.253l-7.243-5.239l-7.243,5.239  c-0.22,0.159-0.49,0.253-0.783,0.253c-0.74,0-1.339-0.599-1.339-1.339c0-0.145,0.024-0.285,0.068-0.417l2.769-8.46l-7.187-5.2  v-0.001c-0.336-0.242-0.554-0.637-0.554-1.083c0-0.739,0.598-1.337,1.338-1.337h8.897l2.755-8.421  c0.168-0.547,0.677-0.945,1.28-0.945c0.602,0,1.112,0.398,1.279,0.945l2.755,8.421h8.897c0.739,0,1.338,0.598,1.338,1.337  C46.464,29.48,46.246,29.875,45.911,30.117z" />
            </svg>
            <p>Wish list</p>

            <span className="wish__item header-items-count">2</span>
          </a>
        </div>
      </div>
      <div className="header__nav nav-header">
        <ul className="nav-header__list container">
          <li>
            <a href="#" className="nav-header__link active-link">
              Computer
            </a>
          </li>
          <li>
            <a href="#" className="nav-header__link">
              Coocking
            </a>
          </li>
          <li>
            <a href="#" className="nav-header__link">
              Education
            </a>
          </li>
          <li>
            <a href="#" className="nav-header__link">
              Fiction
            </a>
          </li>
          <li>
            <a href="#" className="nav-header__link">
              Health
            </a>
          </li>
          <li>
            <a href="#" className="nav-header__link">
              Mathematics
            </a>
          </li>
          <li>
            <a href="#" className="nav-header__link">
              Medical
            </a>
          </li>
          <li>
            <a href="#" className="nav-header__link">
              Reference
            </a>
          </li>
          <li>
            <a href="#" className="nav-header__link">
              Science
            </a>
          </li>
        </ul>
      </div>
    </header>
    // <header className="header">
    //   <div className="header__container">
    //     <div className="header__top top-header">
    //       <ul className="top-header__list container">
    //         <li className="top-header__link">Sign in</li>
    //         <li className="top-header__link">My Account</li>
    //         <li className="top-header__link">Order Status</li>
    //         <li className="top-header__link">Help</li>
    //       </ul>
    //     </div>
    //     <div className="header__body body-header">
    //       <div className="body-header__content container">
    //         <Link to="/">
    //           <div className="body-header__logo">
    //             <img src={logo} alt="" />
    //           </div>
    //         </Link>
    //         <Search />
    //         <div className="body-header__cart cart-header">
    //           <div className="cart-header__top top-cart">
    //             <div className="top-cart__info">
    //               <svg width="27px" height="29px">
    //                 <path d="M26.328,2.220 C26.025,2.878 25.660,3.749 25.231,4.834 C24.799,5.919 24.346,7.086 23.866,8.336 C23.387,9.585 22.914,10.855 22.448,12.143 C21.979,13.430 21.556,14.593 21.178,15.626 C20.798,16.662 20.370,17.836 19.890,19.149 C19.686,19.603 19.462,20.013 19.208,20.378 C18.956,20.745 18.577,20.929 18.070,20.929 L4.970,20.929 C4.465,20.929 4.066,20.739 3.777,20.360 C3.485,19.982 3.278,19.579 3.152,19.149 L0.085,7.674 C-0.044,7.170 0.002,6.739 0.217,6.387 C0.431,6.032 0.991,5.856 1.901,5.856 L21.215,5.856 L23.489,0.934 C23.714,0.454 24.032,0.163 24.435,0.061 C24.840,-0.039 25.218,-0.007 25.569,0.158 C25.924,0.322 26.195,0.587 26.385,0.952 C26.574,1.319 26.555,1.741 26.328,2.220 ZM9.288,26.269 C9.288,27.026 9.020,27.668 8.489,28.199 C7.959,28.729 7.319,28.995 6.561,28.995 C5.777,28.995 5.121,28.729 4.591,28.199 C4.061,27.668 3.796,27.026 3.796,26.269 C3.796,25.512 4.061,24.862 4.591,24.317 C5.121,23.775 5.777,23.504 6.561,23.504 C7.319,23.504 7.959,23.775 8.489,24.317 C9.020,24.862 9.288,25.512 9.288,26.269 ZM18.792,26.269 C18.792,27.026 18.528,27.668 17.998,28.199 C17.467,28.729 16.823,28.995 16.066,28.995 C15.282,28.995 14.625,28.729 14.096,28.199 C13.566,27.668 13.300,27.026 13.300,26.269 C13.300,25.512 13.566,24.862 14.096,24.317 C14.625,23.775 15.282,23.504 16.066,23.504 C16.823,23.504 17.467,23.775 17.998,24.317 C18.528,24.862 18.792,25.512 18.792,26.269 Z"></path>
    //               </svg>
    //               <p>
    //                 Корзина
    //                 {cartItems.length < 1 ? (
    //                   <span>(пусто)</span>
    //                 ) : (
    //                   <span> ({cartItems.length} шт.)</span>
    //                 )}
    //               </p>
    //             </div>
    //           </div>
    //           <div className="cart-header__bottom bottom-cart">
    //             <div className="bottom-cart__price">{totalSum.toFixed(2)}₽</div>
    //             <Link to={'/cart'} style={{ display: 'block' }}>
    //               <button className="bottom-cart__button">Проверить</button>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="body-header__wish wish-header">
    //           <div className="wish-header__icon">
    //             <svg width="25px" height="25px">
    //               <path d="M12.500,-0.002 C5.596,-0.002 -0.002,5.596 -0.002,12.500 C-0.002,19.405 5.596,25.002 12.500,25.002 C19.405,25.002 25.002,19.405 25.002,12.500 C25.002,5.596 19.405,-0.002 12.500,-0.002 ZM17.025,19.453 L12.445,17.044 L7.865,19.453 L8.740,14.353 L5.034,10.741 L10.155,9.997 L12.445,5.357 L14.734,9.997 L19.855,10.741 L16.150,14.353 L17.025,19.453 Z"></path>
    //             </svg>
    //           </div>
    //           <p>
    //             Избранное <span>20</span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <nav className="header__nav nav-header">
    //       <ul className="nav-header__list container">
    //         <li className="nav-header__link active-link">Computers</li>
    //         <li className="nav-header__link">Cooking</li>
    //         <li className="nav-header__link">Education</li>
    //         <li className="nav-header__link active-link">Fiction</li>
    //         <li className="nav-header__link">Health</li>
    //         <li className="nav-header__link">Mathematics</li>
    //         <li className="nav-header__link">Medical</li>
    //         <li className="nav-header__link">Reference</li>
    //         <li className="nav-header__link">Science</li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
}

export default Header;
