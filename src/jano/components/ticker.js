import React, { Component } from "react";
export default class Ticker extends Component {
  render() {
    const createTicker = () => {
      return (
        <div className="ticker">
          <div className="ticker__detail">
            <h2 className="ticker__detail--title">Mini boom- win x9</h2>
            <div className="list__winner">
              <h4 className="list__winner--title">Lastest winners</h4>
              <ul className="list__winner--detail">
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
              </ul>
              <div className="view__detail">
                <a href="a"> View detail</a>
              </div>
              <div className="button__order">
              <a className="public__button" href="a"> Order tickets</a>
              </div>
            </div>
          </div>
          <div className="ticker__detail">
            <h2 className="ticker__detail--title">Smart boom - win X90</h2>
            <div className="list__winner">
              <h4 className="list__winner--title">Lastest winners</h4>
              <ul className="list__winner--detail">
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
              </ul>
              <div className="view__detail">
                <a href="a"> View detail</a>
              </div>
              <div className="button__order">
              <a className="public__button" href="a"> Order tickets</a>
              </div>
            </div>
          </div>
          <div className="ticker__detail">
            <h2 className="ticker__detail--title">Big boom- win x900</h2>
            <div className="list__winner">
              <h4 className="list__winner--title">Lastest winners</h4>
              <ul className="list__winner--detail">
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
                <li>
                  <img
                    className="user__avt"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <p className="user__name">Kyllywoong</p>
                  <p className="quantity">8</p>
                  <p className="bonus">$230.000</p>
                </li>
              </ul>
              <div className="view__detail">
                <a href="a"> View detail</a>
              </div>
              <div className="button__order">
              <a className="public__button" href="a"> Order tickets</a>
              </div>
            </div>
          </div>
        </div>
      );
    };
    return <div>{createTicker()}</div>;
  }
}
