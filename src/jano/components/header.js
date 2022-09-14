import React, { Component, useRef, useState } from "react";
import "../assets/style.css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./scroll_header"

import { Swiper, SwiperSlide } from "swiper/react";
export default class Header extends Component {
  render() {
    const createHeader = () => {
      return (
        <div className="container-header">
          <div className="header">
            <div className="header__logo">
              <a href="a">
                <img src={require("../assets/img/logomain.png")} alt="" />
              </a>
            </div>
            <ul className="header__menu">
              <li className="header__nav-list">
                <a href="a">Jackpot</a>
              </li>
              <li className="header__nav-list">
                <a href="a">Casino games</a>
              </li>
              <li className="header__nav-list">
                <a href="a">Affilates</a>
              </li>
              <li className="header__nav-list">
                <a href="a">Tnocoin</a>
              </li>
            </ul>
            <ul className="header__user">
              <li className="header__menu-list">
                <a href="a">
                  <img
                    className="img-user"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <span>Kellywoong</span>
                </a>
              </li>
              <li className="header__menu-list">
                <a href="a">
                  <img
                    className="img-coin"
                    src={require("../assets/img/coin.png")}
                    alt=""
                  />
                  <span>$200000</span>
                </a>
              </li>
              <li className="header__menu-list">
                <a href="a">
                  <img
                    className="img-flag"
                    src={require("../assets/img/flag.png")}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slider">
                  <div className="phone">
                    <img
                      className=""
                      src={require("../assets/img/phone.png")}
                      alt=""
                    />
                  </div>
                  <div className="megaboom">
                    <h3 className="megaboom__title">Megaboom</h3>
                    <h1 className="megaboom__price">$100,000,000</h1>
                    <a className="public__button megaboom__btn" href="a">
                      Order ticket
                    </a>
                  </div>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide><div className="slider">
                  <div className="phone">
                    <img
                      className=""
                      src={require("../assets/img/phone2.png")}
                      alt=""
                    />
                  </div>
                  <div className="megaboom">
                    <h3 className="megaboom__title">Megaboom</h3>
                    <h1 className="megaboom__price">$100,000,000</h1>
                    <a className="public__button megaboom__btn" href="a">
                      Order ticket
                    </a>
                  </div>
                </div>{" "}</SwiperSlide>
              <SwiperSlide><div className="megaboom">
                    <h3 className="megaboom__title">Megaboom</h3>
                    <h1 className="megaboom__price">$100,000,000</h1>
                    <a className="public__button megaboom__btn" href="a">
                      Order ticket
                    </a>
                  </div></SwiperSlide>
            </Swiper>
          </div>
        </div>
      );
    };
    return <div>{createHeader()}</div>;
  }
}
