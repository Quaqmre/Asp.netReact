import React, { Component } from "react";

export class Startpage extends Component {
  render() {
    const header = this.props.header || "Akif";
    const paraf = this.props.paraf || "tatar";
    const button = this.props.but || "Başlarken";
    const maindirect =
      "banner style1 orient-" +
      this.props.direct +
      " content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right";

    return (
      <section className={maindirect}>
        <div className="content">
          <h1>{header}</h1>
          <p className="major">{paraf}</p>
          <ul className="actions stacked">
            <li>
              <a href="#first" className="button big wide smooth-scroll-middle">
                {button}
              </a>
            </li>
          </ul>
        </div>
        <div className="image">
          <img src="images/quaqmre.jpg" alt="" />
        </div>
      </section>
    );
  }
}
