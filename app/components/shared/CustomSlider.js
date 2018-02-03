import Slider from "react-slick";
import React from "react";

import "./slick.scss";
import "./slick-theme.scss";
import "./slick-style.scss";

import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";

import img1 from "../../assets/images/wechat/1.jpg";
import img2 from "../../assets/images/wechat/2.jpg";
import img3 from "../../assets/images/wechat/3.jpg";
import img4 from "../../assets/images/wechat/4.jpg";
import img5 from "../../assets/images/wechat/5.jpg";
import img6 from "../../assets/images/wechat/6.jpg";
import img7 from "../../assets/images/wechat/7.jpg";
import img8 from "../../assets/images/wechat/8.jpg";
import img9 from "../../assets/images/wechat/9.jpg";
import img10 from "../../assets/images/wechat/10.jpg";
import img11 from "../../assets/images/wechat/11.jpg";
import img12 from "../../assets/images/wechat/12.jpg";
import img13 from "../../assets/images/wechat/13.jpg";
import img14 from "../../assets/images/wechat/14.jpg";
import img15 from "../../assets/images/wechat/15.jpg";
import img16 from "../../assets/images/wechat/16.jpg";
import img17 from "../../assets/images/wechat/17.jpg";
import img18 from "../../assets/images/wechat/18.jpg";
import img19 from "../../assets/images/wechat/19.jpg";
import img20 from "../../assets/images/wechat/20.jpg";

export default class CustomSlider extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <RightArrow />,
      prevArrow: <LeftArrow />,
      afterChange: function(index) {
        console.log(`index is${index}`);
        // if (index === 19) {
        //   if (window.confirm("Do you really want to leave?")) {
        //     // window.open("exit.html", "Thanks for Visiting!");
        //     console.log("next page");
        //     this.props.history.push('/ending');
        //   } else {
        //     console.log("go back");
        //   }
        // }
      }.bind(this)
    };

    let style = this.props.customStyle || {};
    return (
      <div className="content" style={style}>
        <Slider {...settings}>
          <div>
            <img src={img1} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img2} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img3} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img4} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img5} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img6} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img7} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img8} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img9} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img10} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img11} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img12} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img13} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img14} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img15} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img16} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img17} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img18} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img19} style={{ width: "20%" }} />
          </div>
          <div>
            <img src={img20} style={{ width: "20%" }} />
          </div>
        </Slider>

        <h1><a href = "http://t.cn/R8XjZhj" style= {{textDecoration:"none"}}>不要点击我 (´・ω・｀)</a></h1>
      </div>
    );
  }
}
