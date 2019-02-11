import React, { Component } from "react";

export class Paragraf extends Component {
  render() {
    const containerclassa =
      "spotlight style1 " +
      this.props.layout +
      " orient-left content-align-left image-position-center onscroll-image-fade-in";
    const img = "images/" + this.props.img + ".jpg";
    return (
      <section className={containerclassa} id="first">
        <div className="content">
          <h2>{this.props.header}</h2>
          <p>{this.props.paraf}</p>
          <ul className="actions stacked">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div className="image">
          <img src={img} alt="" />
        </div>
      </section>
    );
  }
}
