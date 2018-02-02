import Transition from "react-transition-group/Transition";
import React from "react";

function FadeTransition({ children, duration, in: inProp }) {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: "opacity, transform"
  };

  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: "translateY(-10%)"
    },
    entered: {
      opacity: 1,
      transform: "translateY(0)"
    },
    exiting: {
      opacity: 0,
      transform: "translateY(-10%)"
    }
  };

  return (
    <Transition
      in={inProp}
      timeout={{
        enter: 0,
        exit: duration
      }}
    >
      {(state) => {
        if (state === "exited") {
          return null;
        }

        return React.cloneElement(children, {
          style: Object.assign({}, defaultStyle, transitionStyles[state])
        });
      }}
    </Transition>
  );
}

export default FadeTransition;
