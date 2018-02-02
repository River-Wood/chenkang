import React from "react";

import "./Ending.scss";
import img from "../../assets/images/chart.png";
import FadeTransition from "../shared/animations/FadeTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";

class Ending extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      showCode: false
    };
  }

  componentDidMount() {
    function increaseSec() {
      setTimeout(() => {
        let newSec = this.state.sec + 1;
        let newMin = this.state.min;
        let newHour = this.state.hour;
        let newDay = this.state.day;
        let newMonth = this.state.month;
        let newYear = this.state.year;
        if (newSec && newSec % 60 === 0) {
          newSec = 0;
          newMin += 1;
          console.log(newSec);
        }
        if (newMin && newMin % 60 === 0) {
          newMin = 0;
          newHour += 1;
        }
        if (newHour && newHour % 24 === 0) {
          newHour = 0;
          newDay += 1;
        }
        if (newDay && newDay % 30 === 0) {
          newDay = 0;
          newMonth += 1;
        }
        if (newMonth && newMonth % 12 === 0) {
          newMonth = 0;
          newYear += 1;
        }
        this.setState(
          {
            sec: newSec,
            min: newMin,
            hour: newHour,
            day: newDay,
            month: newMonth,
            year: newYear
          },
          () => {
            increaseSec.bind(this)();
          }
        );
      }, 1000);
    }

    increaseSec.bind(this)();

    setTimeout(() => {
      this.setState(
        {
          showCode: true
        },
        () => {
          console.log(this.state.showCode);
        }
      );
    }, 5000);
  }

  render() {
    return (
      <div className="ending-panel">
        <h1 style={{ fontSize: "4vh" }}>亲爱的子琪,我喜欢你已经是...</h1>
        <h1>
          {this.state.year}年
          {this.state.month}月
          {this.state.day}天
          {this.state.hour}时
          {this.state.min}分
          {this.state.sec}秒
        </h1>
        <h1>
          <TransitionGroup>
            {(() => {
              if (this.state.showCode) {
                return (
                  <FadeTransition duration={1500} key="_barcode">
                    <img style={{ margin: "0.5em" }} src={img} alt="barcode" />
                  </FadeTransition>
                );
              }

              return (
                <FadeTransition duration={1500} key="_barcode-loading">
                  <h2 />
                </FadeTransition>
              );
            })()}
            
          </TransitionGroup>
        </h1>
      </div>
    );
  }
}

export default Ending;
