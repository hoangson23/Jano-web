import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    const createFooter = () => {
      return (
        <div className="footer">
          <div className="contact">
            <a className="logo__contact" href="a">
              <img src={require("../assets/img/logomain.png")} alt='' />
            </a>
            <p className="infor__contact">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="infor-tano__contact">
              <h3>Infor tano</h3>
              <ul>
                <li>
                  <a href="a">Privacy policy</a>
                </li>
                <li>
                  <a href="a">Privacy policy</a>
                </li>
                <li>
                  <a href="a">Privacy policy</a>
                </li>
                <li>
                  <a href="a">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="about__contact">
              <ul className="media">
                <li>
                  <a href="a">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="a">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="a">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="a">
                    <i className="fa fa-pinterest-p" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <p className="mail">Contact: info@tano.io</p>
            </div>
          </div>
        </div>
      );
    };
    return <div>{createFooter()}</div>;
  }
}
