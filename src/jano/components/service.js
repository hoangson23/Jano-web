import React, { Component } from "react";
export default class Service extends Component {
  render() {
    const createService = () => {
      return (
        <div className="service">
          <div className="all__services">
            <div className="service__item">
              <img
                className="service__item--avt"
                src={require("../assets/img/deposit.png")}
                alt=""
              />
              <h3 className="service__item--name">Deposit in euros</h3>
              <p className="service__item--desc">
                Cubits allows players to make deposits in Euros and then play in
                Bitcoin! Players can also withdraw in Euros. Now players can
                play in whatever currency they prefer!
              </p>
            </div>
            <div className="service__item">
              <img
                className="service__item--avt"
                src={require("../assets/img/suport.png")}
                alt=""
              />
              <h3 className="service__item--name">24/7 suport</h3>
              <p className="service__item--desc">
                Cubits allows players to make deposits in Euros and then play in
                Bitcoin! Players can also withdraw in Euros. Now players can
                play in whatever currency they prefer!
              </p>
            </div>
            <div className="service__item">
              <img
                className="service__item--avt"
                src={require("../assets/img/sercure.png")}
                alt=""
              />
              <h3 className="service__item--name">Safe & sercure</h3>
              <p className="service__item--desc">
                Cubits allows players to make deposits in Euros and then play in
                Bitcoin! Players can also withdraw in Euros. Now players can
                play in whatever currency they prefer!
              </p>
            </div>
            <div className="service__item">
              <img
                className="service__item--avt"
                src={require("../assets/img/provably.png")}
                alt=""
              />
              <h3 className="service__item--name">Provably fair</h3>
              <p className="service__item--desc">
                Cubits allows players to make deposits in Euros and then play in
                Bitcoin! Players can also withdraw in Euros. Now players can
                play in whatever currency they prefer!
              </p>
            </div>
          </div>
          <div className="signup__button">
            <a className="public__button" href="a">Sign up now & start winning</a>
          </div>
        </div>
      );
    };
    return <div>{createService()}</div>;
  }
}
