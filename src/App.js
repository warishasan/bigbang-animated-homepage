import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import automation1 from "./images/automation1.svg";
import automation2 from "./images/automation2.svg";
import automation3 from "./images/automation3.svg";
import detection1 from "./images/detection1.svg";
import detection2 from "./images/detection2.svg";
import detection3 from "./images/detection3.svg";
import business1 from "./images/business1.svg";
import business2 from "./images/business2.svg";
import business3 from "./images/business3.svg";
import manufact from "./images/manufacturing.gif";
import prediction from "./images/prediction.gif";
import businessFlow from "./images/businessFlow.gif";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";

function App() {
  const pulsating = pulse;
  /*
  const blob1 = useWebAnimations({ 

    playbackRate: 0.1,

    keyframes: [
      { width:"30px" },
      { width:"350px" },
      { width:"30px" },
      
    ],
    timing: {
      
      easing: 'ease-in',
      delay: 0,
      duration: 1000,
      iterations: Infinity,
    },

    
  });

*/
  const blob = useWebAnimations({
    keyframes: pulsating.keyframes,
    timing: {
      ...pulsating.timing,
      delay: 1000, // Delay 1s
      duration: pulsating.timing.duration * 3, // Speed up the animation
      iterations: Infinity,
    },
  });

  const automation = useWebAnimations({
    playbackRate: 0.08,
    keyframes: [{ transform: "translateY(-100%)" }],
    timing: {
      easing: "steps(3, end)",
      delay: 100,
      duration: 200,
      iterations: Infinity,
    },
  });

  const pattern = useWebAnimations({
    playbackRate: 0.08,
    keyframes: [{ transform: "translateY(-100%)" }],
    timing: {
      easing: "steps(3, end)",
      delay: 100,
      duration: 200,

      iterations: Infinity,
    },
  });

  const business = useWebAnimations({
    playbackRate: 0.08,
    keyframes: [{ transform: "translateY(-100%)" }],
    timing: {
      easing: "steps(3, end)",
      delay: 100,
      duration: 200,

      iterations: Infinity,
    },
  });

  return (
    <div className="App">
      <Navbar></Navbar>
      <div id="container">
        <svg
          ref={blob.ref}
          className="blob"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          id="blobSvg"
        >
          <path
            id="blob"
            d="M399.42793,329.64796Q341.58195,409.29591,241.55994,423.033Q141.53794,436.7701,78.93399,343.38505Q16.33004,250,93.74203,181.11001Q171.15402,112.22003,265.77503,85.26897Q360.39605,58.31791,408.83498,154.15896Q457.27391,250,399.42793,329.64796Z"
            fill="#d1d8e0"
          ></path>
        </svg>

        <span className="mainHeading">
          <b>BIG </b>{" "}
        </span>
        <span className="mainHeading">
          <b> BANG </b>
        </span>
        <span className="subHeading">Say Hello to the future of AI</span>

        <div className="classesContainer">
          <div className="automationContainer">
            <h3 className="classesHeading">Automation Solutions</h3>
            <div ref={automation.ref}>
              <img
                className="automationImg"
                src={automation1}
                alt="automationAnimation1"
              />
              <img
                className="automationImg"
                src={automation2}
                alt="automationAnimation2"
              />
              <img
                className="automationImg"
                src={automation3}
                alt="automationAnimation2"
              />
            </div>
          </div>
          <div className="detectionContainer">
            <h3 className="classesHeading">Pattern Analysis</h3>
            <div ref={pattern.ref}>
              <img
                className="detectionImg"
                src={detection1}
                alt="detectionAnimation1"
              />
              <img
                className="detectionImg"
                src={detection2}
                alt="detectionAnimation2"
              />
              <img
                className="detectionImg"
                src={detection3}
                alt="detectionAnimation3"
              />
            </div>
          </div>

          <div className="businessContainer">
            <h3 className="classesHeading">Business Solutions</h3>
            <div ref={business.ref}>
              <img
                className="businessImg"
                src={business1}
                alt="businessAnimation1"
              />
              <img
                className="businessImg"
                src={business2}
                alt="businessAnimation2"
              />
              <img
                className="businessImg"
                src={business3}
                alt="businessAnimation3"
              />
            </div>
          </div>
        </div>

        <div id="secondContainer">
          <h1 id="subHeading2">Let us help you in reshaping your business !</h1>

          <div id="manufacContainer">
            <div id="manufactText">
              <h3 className="classHeadings2">
                Automate your Manufacturing and Quality Control Systems{" "}
              </h3>
              <p className="classText2">
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text{" "}
              </p>
            </div>

            <div>
              <img id="manufactImage" src={manufact} alt="manufacturing" />
            </div>
          </div>

          <div id="detectionContainer">
            <div id="detectionText">
              <h3 className="classHeadings2">
                Detect Trends, Patterns and Anomalies{" "}
              </h3>
              <p className="classText2">
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text
              </p>
            </div>

            <div>
              <img id="detectionImage" src={prediction} alt="prediction" />
            </div>
          </div>

          <div id="flowContainer">
            <div id="flowText">
              <h3 className="classHeadings2">
                Integrate your Business Platforms and Optimize the Flow{" "}
              </h3>
              <p className="classText2">
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text sample text sample text sample text sample text
                sample text
              </p>
            </div>

            <div>
              <img id="flowImage" src={businessFlow} alt="businessFlow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
