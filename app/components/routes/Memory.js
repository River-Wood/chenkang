import React from "react";
import { Animate } from "react-move";
import TransitionGroup from "react-transition-group/TransitionGroup";

import naruto from "../../assets/images/naruto.png";
import rose from "../../assets/images/rose.png";
import loveHeart from "../../assets/images/love_heart.png";
import CustomSlider from "../shared/CustomSlider";
import FadeTransition from "../shared/animations/FadeTransition";

import "./Memory.scss";

const FULL_MESSAGE =
  "当  你说，无论怎么样你都喜欢我的时候，我真的发现自己很幸福。不是因为你那么爱我，而是我那么爱你。我不能删除爱的记忆体，是因为和你爱得太美丽。别 怀疑我为什么爱你，就像云恋着风风恋着雨，其实我也不太懂这是什么道理。我想这就好像呼吸，不用练习。";

const DIALOGS = [
  " 1.1和子琪一起看鬼片，招魂一点都不恐怖，不过子琪看到恐怖镜头就侧身过去",
  " 1.2我们坐一起商量meta分析的方法，我感觉我们的关系好像进了一步，哪怕是微小的一步",
  " 1.5我做网页遇到了困难，心情低到了极点，谢谢你给我鼓励，我一定会完成这个网页，给你一个很棒的礼物",
  " 1.7号，我不小心把你照片删掉了，但是你发了自己的照片给我，还称呼我为我家康康，恩，我希望我永远都是你家的，顿时幸福的要死，子琪我好爱你",
  "1.9号，我们在一起待了一天，那是我第一次同你一起吃早饭，我在你楼下等了一会，外面很冷，但我的内心却很开心，我好希望能够每天都能够在你楼下等你(阿哩，我喜欢受虐吗)才怪"
];

class Memory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      showSlider: false,
      leftDistance: 0,
      rightDistance: 0,
      stories: (() => {
        return DIALOGS.map(() => {
          return "";
        });
      })()
    };
  }

  componentDidMount() {
    let index = 0;
    function typing() {
      let updated_msg = this.state.msg + FULL_MESSAGE.charAt(index);
      index++;
      this.setState({
        msg: updated_msg
      });
      if (index < FULL_MESSAGE.length) {
        setTimeout(typing.bind(this), 100);
      } else {
        //do move operation
        let leftDistance = document.querySelector("#love").offsetLeft;
        console.log(leftDistance);
        this.setState(
          {
            leftDistance
          },
          () => {
            console.log("after moved");
            const indexes = DIALOGS.map(() => 0);

            function typingInner({ dialog, i }) {
              let updated_msg = `${this.state.stories[i]}${dialog.charAt(
                indexes[i]
              )}`;
              indexes[i]++;
              this.setState({
                stories: this.state.stories.map((item, j) => {
                  return j === i ? updated_msg : item;
                })
              });
              if (indexes[i] < dialog.length) {
                setTimeout(typingInner.bind(this, { dialog, i }), 100);
              }

              let isFinished = indexes.every((indexItem, _index) => {
                return indexItem === DIALOGS[_index].length;
              });
              if (isFinished) {
                console.log("done");
                let rightDistance =
                  document.querySelector("body").offsetWidth -
                  document.querySelector("#memories").offsetLeft -
                  document.querySelector("#memories").offsetWidth;
                //  = document.querySelector("#memories").offsetRight;
                console.log(rightDistance);

                this.setState(
                  {
                    rightDistance
                  },
                  () => {
                    console.log("after move to right");
                    setTimeout(() => {
                      this.setState({
                        showSlider: true
                      });
                    }, 3000);
                  }
                );
              }
            }
            // typingInner.bind(this, { dialog: DIALOGS[0], i: 0 })();
            // typingInner.bind(this, { dialog: DIALOGS[1], i: 1 })();
            DIALOGS.forEach((dialog, i) => {
              typingInner.bind(this, { dialog, i })();
            });
          }
        );
      }
    }
    typing.bind(this)();
  }

  render() {
    const memories = (
      <div className="memory-panel">
        <Animate
          data={{
            left: this.state.leftDistance
          }}
          default={{
            left: 0
          }}
          duration={1000}
          easing="easeQuadIn"
        >
          {data => (
            <div
              id="love"
              className="story-part"
              style={{ transform: `translate(-${data.left}px, 0)` }}
            >
              <h1>
                致我最喜欢的<span>子琪</span>
              </h1>
              <h2>只愿得一人心,白首不分离</h2>
              <p>{this.state.msg}</p>
              <h2>康康❤子琪</h2>
            </div>
          )}
        </Animate>

        <Animate
          data={{
            right: this.state.rightDistance
          }}
          default={{
            right: 0
          }}
          duration={1000}
          easing="easeQuadIn"
        >
          {data => (
            <div
              id="memories"
              className="story-part"
              style={{ transform: `translate(${data.right}px, 0)` }}
            >
              {(() => {
                return DIALOGS.map((dialog, index) => {
                  return (
                    <div key={index.toString()}>
                      <span className={`dialog-${index}`}>
                        {this.state.stories[index]}
                      </span>{" "}
                      <br />
                    </div>
                  );
                });
              })()}
            </div>
          )}
        </Animate>
        <div>
          <img className="img1 move" src={naruto} />
        </div>
        <div>
          <img className="loveHeart1 toTopA" src={loveHeart} />
        </div>
        <div>
          <img className="loveHeart2 toTopB" src={loveHeart} />
        </div>
        <div>
          <img className="Rose1 runTopRose" src={rose} />
          <img className="Rose2 runTopRoseDlayA" src={rose} />
          <img className="Rose3 runTopRoseDlay" src={rose} />
          <img className="Rose4 runTopRose" src={rose} />
          <img className="Rose5 runTopRoseDlayA" src={rose} />
          <img className="Rose6 runTopRoseDlay" src={rose} />
          <img className="Rose7 runTopRose" src={rose} />
          <img className="Rose8 runTopRoseDlayA" src={rose} />
          <img className="Rose9 runTopRose" src={rose} />
          <img className="Rose10 runTopRoseDlay" src={rose} />
          <img className="Rose11 runTopRoseDlayA" src={rose} />
          <img className="Rose12 runTopRose" src={rose} />
          <img className="Rose13 runTopRoseDlay" src={rose} />
          <img className="Rose14 runTopRose" src={rose} />
          <img className="Rose15 runTopRoseDlay" src={rose} />
          <img className="Rose16 runTopRoseDlayB" src={rose} />
          <img className="Rose17 runTopRoseDlayB" src={rose} />
          <img className="Rose18 runTopRoseDlayB" src={rose} />
        </div>
      </div>
    );

    const slider = <CustomSlider history={this.props.history} />;
    return (
      <TransitionGroup>
        {(() => {
          if (!this.state.showSlider) {
            return <FadeTransition duration={1000} key="_memories">{memories}</FadeTransition>;
          }
          return <FadeTransition duration={2500} key="_slider">{slider}</FadeTransition>;
        })()}
      </TransitionGroup>
    );
  }
}

export default Memory;
