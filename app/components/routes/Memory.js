import React from "react";
import { Animate } from "react-move";
import TransitionGroup from "react-transition-group/TransitionGroup";

import naruto from "../../assets/images/naruto.png";
import rose from "../../assets/images/rose.png";
import loveHeart from "../../assets/images/love_heart.png";
import CustomSlider from "../shared/CustomSlider";
import FadeTransition from "../shared/animations/FadeTransition";

import "./Memory.scss";
import bgm from "../../assets/audio/吴建飞 - 偏偏爱上你.mp3";

const FULL_MESSAGE =
  "对不起, 子琪! 上次火车站的事情,你说你心情很槽糕. 我没办法安慰你. 因为我确实没有想过如何处理这些事情. 我一般每天只想着两件事,一件是学习上的事,一件就是你(两件正事!!!).其它都是琐事,所有对于这些琐事,我基本上都是属于鱼的记忆,没有什么深刻的情感上的体会. 但我会认真聆听你说的话, 会想拥抱你. 但显然当时不太合适.不过呢我还是希望你能够跟我分享生活中的点滴. 因为,说出来肯定比憋在心理好过,对吧..., 另外也可以让我认识到更加生动,更加具体的子琪. 还有一件不得不说,关于昨晚的事, 实在是对不起, 一不小心我就开溜了. 我只是想看看旁边有什么吸引人的东西.emnm...为了下次有个好的体验,我一定待在你的身边,也不知道你是真不介意还是假不介意,女人心海底针,我还是希望你不要介意,我会改的, 锵锵锵...就酱!!! ";

const DIALOGS = [
  " ",
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

        <CustomSlider history={this.props.history} customStyle = {this.state.showSlider ? {
          position : "fixed",
          top : "0"
        } : {}}/>
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
				<audio src={bgm} autoplay="autoplay" loop="true" />
      </div>
    );

    const slider = <CustomSlider history={this.props.history} />;
    return (
      // <TransitionGroup>
      //   {(() => {
      //     if (!this.state.showSlider) {
      //       return <FadeTransition duration={1000} key="_memories">{memories}</FadeTransition>;
      //     }
      //     return <FadeTransition duration={2500} key="_slider">{slider}</FadeTransition>;
      //   })()}
      // </TransitionGroup>

      memories
    );
  }
}

export default Memory;
