import React from "react";
import "../../styles/bubbles/index.css";
import { useEffect, useState } from "react";

const Bubbles = () => {
  const [stateBubbles, setStateStars] = useState<any>([]);

  const resposive00 = window.innerWidth > 600
  let topResponsiveBubbles= resposive00 ? 65 : 150;
  useEffect(() => {
    let array = [];
    for (let i = 0; i < 50; i++) {
      let coordinatedLeftBubbles = Math.floor(Math.random() * 99 + 1);
      let coordinatedToptBubbles =  Math.floor(Math.random() * 70 + 1);
      let coordinatedSizeBubbles = Math.floor(Math.random() * 4 + 1);
      let randomAnimationDuration = Math.floor(Math.random() * 6 + 1);
      let randomAnimationDelay = Math.floor(Math.random() * 5 + 1);
      let randomIndexBubbles = Math.floor(Math.random() * 2 + 1);
      array.push([
        [i],
        [coordinatedLeftBubbles],
        [coordinatedToptBubbles],
        [coordinatedSizeBubbles],
        [randomAnimationDuration],
        [randomAnimationDelay],
        [randomIndexBubbles == 1 ? '21' : '23'],
      ]);
    }
    setStateStars(array);
  }, []);
  return (
    <React.Fragment>
      {stateBubbles.map((bubbles: any) => (
        <div
          key={bubbles[0]}
          className="divBubbles00 animationCountTiming"
          style={{
            animationName:resposive00 ? 'movementBubbles00': 'movementBubblesresponsive00',
            animationDuration: ` ${2 + parseInt(bubbles[4])}s, ${1}s`,
            animationDelay: `${bubbles[5]}s ,${bubbles[5]}s`,
            zIndex: `${[bubbles[6]]}`,
            left: `${bubbles[1]}vw`,
            top: `${ topResponsiveBubbles + parseInt(bubbles[2])}rem`,
          }}
        >
          <div
            style={{
              width: `0.${bubbles[3]}rem`,
              height: `0.${bubbles[3]}rem`,
              animationDelay: `${bubbles[5]}s`,
            }}
            className="divBubbles01"
          ></div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Bubbles;
