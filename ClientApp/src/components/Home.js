import React, { Component } from "react";
import Slider from "react-slick";

import { Paragraf } from "./Paragraf";
import { Startpage } from "./Startpage";
import { MiniBox } from "./MiniBox";

export class Home extends Component {
  displayName = Home.name;

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        {" "}
        <div id="wrapper" className="divided">
          <Startpage
            header="Mehmet Akif"
            paraf="Eski Elektrik-Elektronik Mühendisi Yeni Coder"
            but="Starter"
          />
          <Startpage direct="right" />
          <Paragraf
            layout="orient-left"
            header="Deneme"
            paraf="Write so much things"
            img="akif"
          />

          <Slider {...settings}>
            <div>
              <img src="images/quaqmre.jpg" alt="" />
            </div>
            <div>
              <img src="images/quaqmre.jpg" alt="" />
            </div>
            <div>
              <img src="images/quaqmre.jpg" alt="" />
            </div>
            <div>
              <img src="images/quaqmre.jpg" alt="" />
            </div>
            <div>
              <img src="images/quaqmre.jpg" alt="" />
            </div>
            <div>
              <img src="images/quaqmre.jpg" alt="" />
            </div>
          </Slider>

          <Paragraf
            layout="orient-right"
            header="Lise"
            paraf="YAÖL"
            img="yeniitemler"
          />

          <section className="wrapper style1 align-center">
            <div className="inner">
              <h2>Massa sed condimentum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                id ante sed ex pharetra lacinia sit amet vel massa. Donec
                facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce
                lorem lectus, pharetra pretium massa et, hendrerit vestibulum
                odio lorem ipsum.
              </p>
            </div>

            <div className="gallery style2 medium lightbox onscroll-fade-in">
              <MiniBox paraf="ali" header="arats" />
            </div>
          </section>

          <footer className="wrapper style1 align-center">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a
                    href="https://twitter.com/haniminihuppenn"
                    className="icon style2 fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
              </ul>
              <p>
                &copy; Untitled. Design:{" "}
                <a href="https://html5up.net">HTML5 UP</a>.
              </p>
            </div>
          </footer>
        </div>{" "}
      </div>
    );
  }
}
