import React from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import FadeTransition from "../shared/animations/FadeTransition";

import img from "../../assets/images/south-peak-stone.jpg";

import Card from "../shared/Card";
import Board from "../shared/Board";
import Form from "../shared/Form";

import "./Greeting.scss";
import bgm from "../../assets/audio/YURiKA-鏡面の波.mp3";

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      showForm: false
    };

    this.index = 0;
    this.greetings = [
      "hi,子琪,我是南极石",
      "我知道你喜欢我,我也很喜欢你呢",
      "可是我们是不同次元的人",
      "不要伤心,我知道你所在的世界里有一个同样爱你的人",
      "他告诉了我登陆的账号和密码,不信你去看看",
      "账号是:子琪,密码是陈康"
    ];
    this.addCard = this.addCard.bind(this);
  }

  addCard() {
    // const { cards } = this.state;
    // this.id += 1;
    const newCard = {
      id: this.index,
      content: `${this.greetings[this.index]}`
    };

    console.log(this.index);
    if (this.index >= this.greetings.length) {
      // this.setState({showForm : true, cards : []})
      this.setState(
        {
          cards: []
        },
        () => {
          setTimeout(() => {
            console.log("show form");
            this.setState({ showForm: true });
          }, 350);
        }
      );
      return;
    }

    this.index++;
    console.log("trigger");
    this.setState(
      {
        cards: []
      },
      () => {
        setTimeout(() => {
          this.setState({ cards: [newCard] });
          console.log("load new");
        }, 350);
      }
    );
  }

  render() {
    return (
      <div onClick={this.addCard} className="greeting-panel">
        <div className="left-panel">
          {(() => {
            return (
              <TransitionGroup component={Board}>
                {(() => {
                  return this.state.cards.map(card => {
                    return (
                      <FadeTransition duration={150} key={card.id}>
                        <div>
                          <Card isForm={false} history={this.props.history}>
                            {card.content}
                          </Card>
                        </div>
                      </FadeTransition>
                    );
                  });
                })()}
              </TransitionGroup>
            );
          })()}

          <div className="right-panel">
            <div className="nested-img">
              <img
                style={{ margin: "0.5em" }}
                height="300px"
                src={img}
                alt="south-peak-stone"
              />
            </div>
          </div>
        </div>

        <div className="right-panel">
          <TransitionGroup>
            {(() => {
              if (this.state.showForm) {
                return (
                  <FadeTransition duration={1500} key={"__form"}>
                    <main className="container">
                      <h2>登录！！！</h2>
                      <div className="detail">
                        <Form history={this.props.history} />
                      </div>
                    </main>
                  </FadeTransition>
                );
              }
              return "";
            })()}
          </TransitionGroup>
        </div>
        <audio src={bgm} autoplay="autoplay" loop="true" />
      </div>
      
    );
  }
}

export default Greeting;
