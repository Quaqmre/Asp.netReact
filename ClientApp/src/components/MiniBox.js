import React, { Component } from "react";

export class MiniBox extends Component {
  render() {
    const image = this.props.img || "01";
    const header = this.props.header;
    const paraf = this.props.paraf;
    const imgLink = "images/gallery/thumbs/" + { image } + ".jpg";
    return (
      <article>
        <a href="images/gallery/fulls/01.jpg" className="image">
          <img src="images/gallery/thumbs/01.jpg" alt="" />
        </a>
        <div className="caption">
          <h3>{header}</h3>
          <p>{paraf}</p>
          <ul className="actions fixed">
            <li>
              <span className="button small">Details</span>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}
