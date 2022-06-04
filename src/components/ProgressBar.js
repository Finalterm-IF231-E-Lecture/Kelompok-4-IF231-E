import React, { useState } from "react";
import { animated, useSpring, config } from "react-spring";

// Example progress bar taken from https://css-tricks.com/css3-progress-bars/

import "./styles.css";

export default function ProgressBar() {
  const [progress, setProgress] = useState("0%");
  const props = useSpring({ width: progress, config: config.slow });
  return (
    <div className="ProgressBar">
      <div className="button-bar">
        <button onClick={() => setProgress("0%")}>0%</button>
        <button onClick={() => setProgress("25%")}>25%</button>
        <button onClick={() => setProgress("50")}>50%</button>
        <button onClick={() => setProgress("75")}>75%</button>
        <button onClick={() => setProgress("100")}>100%</button>
      </div>
      <div className="meter">
        <animated.span style={props} />
      </div>
    </div>
  );
}
