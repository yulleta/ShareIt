import React, { useState, useEffect } from "react";
import Snowfall from "react-snowfall";

const Main = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          background: "linear-gradient( #A6DCFF, #E7ECFF )",
        }}
      >
        <Snowfall
          color="white"
          snowflakeCount={parseInt(
            (windowDimensions.width * windowDimensions.height) / 1800
          )}
        ></Snowfall>
        <div
          style={{
            display: "flex",
            margin: "auto",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "400px",
            }}
            alt="logo"
            src="img/logo.png"
          />
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "15%",
              fontFamily: "var(--font-Delius)",
              color: "white",
              fontSize: "60px",
            }}
          >
            SHARE IT!
          </div>
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "29%",
              fontFamily: "var(--font-Delius)",
              color: "#969696",
              fontSize: "25px",
            }}
          >
            for Sookmyung
          </div>
          {/* <div
            style={{
              position: "absolute",
              width: "150px",
              top: "72%",
              left: "30%",
            }}
          >
            <img
              style={{ width: "150px" }}
              src="img/signin_pressed.png"
              alt="signin"
            />
          </div> */}
          <div
            style={{
              position: "absolute",
              width: "150px",
              top: "72%",
              left: "30%",
            }}
          >
            <img style={{ width: "150px" }} src="img/signin.png" alt="signin" />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            zIndex: "1",
            width: "100%",
            height: "30%",
            borderRadius: "100%",
            transform: "scaleX(1.1)",
            backgroundColor: "white",
          }}
        ></div>
      </div>
    </>
  );
};

export default Main;
