"use client";

import "../styles/styles.css";
import Container from "react-bootstrap/Container";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";

import Screen from "./components/screen";
import Phone from "./components/phonescreen";

export default function Home() {
  const comp1 = useRef(null);
  const comp2 = useRef(null);
  const comp3 = useRef(null);
  const comp4 = useRef(null);
  const comp5 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      var tl1 = gsap.timeline();
      tl1
        .to("#back", { backgroundColor: "white", duration: 2 })
        .to("#hi", {
          color: "black",
          opacity: 1,
          display: "block",
          duration: 2,
        })
        .to("#hi", {
          opacity: 0,
          duration: 1,
          display: "none",
        })
        .to(["#name", "#desc", "#me"], {
          delay: 0.5,
          color: "black",
          opacity: 1,
          display: "block",
        })
        .to(["#name", "#desc", "#me"], {
          y: -80,
          delay: 0.5,
        })
        .to("#buttns", {
          opacity: 1,
          display: "flex",
        });
    }, comp1);

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx2 = gsap.context(() => {
      var tl2 = gsap.timeline();
      tl2
        .to("#back", { backgroundColor: "white", duration: 2 })
        .to("#hi", {
          color: "black",
          opacity: 1,
          display: "block",
          duration: 2,
        })
        .to("#hi", {
          opacity: 0,
          duration: 1,
          display: "none",
        })
        .to(["#name", "#desc", "#me"], {
          delay: 0.5,
          color: "black",
          opacity: 1,
          display: "block",
        })
        .to(["#name", "#desc", "#me"], {
          y: -80,
          delay: 0.5,
        })
        .to("#buttns", {
          opacity: 1,
          display: "flex",
        });
    }, comp2);
    return () => ctx2.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx3 = gsap.context(() => {
      var tl3 = gsap.timeline();
      tl3
        .to("#back", { backgroundColor: "white", duration: 2 })
        .to("#hi", {
          color: "black",
          opacity: 1,
          display: "block",
          duration: 2,
        })
        .to("#hi", {
          opacity: 0,
          duration: 1,
          display: "none",
        })
        .to(["#name", "#desc", "#me"], {
          delay: 0.5,
          color: "black",
          opacity: 1,
          display: "block",
        })
        .to(["#name", "#desc", "#me"], {
          y: -30,
          delay: 0.5,
        })
        .to("#buttns", {
          opacity: 1,
          display: "flex",
        });
    }, comp3);

    return () => ctx3.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx4 = gsap.context(() => {
      var tl4 = gsap.timeline();
      tl4
        .to("#back", { backgroundColor: "white", duration: 2 })
        .to("#hi", {
          color: "black",
          opacity: 1,
          display: "block",
          duration: 2,
        })
        .to("#hi", {
          opacity: 0,
          duration: 1,
          display: "none",
        })
        .to(["#name", "#desc", "#me"], {
          delay: 0.5,
          color: "black",
          opacity: 1,
          display: "block",
        })
        .to(["#name", "#desc", "#me"], {
          y: -30,
          delay: 0.5,
        })
        .to("#buttns", {
          opacity: 1,
          display: "flex",
        });
    }, comp4);

    return () => ctx4.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx5 = gsap.context(() => {
      var tl5 = gsap.timeline();
      tl5
        .to("#phoneback", { display:"none" , opacity: 0, duration: 3 })
        .to("#hi", {
          color: "black",
          opacity: 1,
          display: "block",
        })
        .to("#hi", {
          opacity: 0,
          duration: 1,
          display: "none",
          delay:1
        })
        .to(["#name", "#desc", "#me"], {
          delay: 0.5,
          color: "black",
          opacity: 1,
          display: "block",
        })
        .to(["#name", "#desc", "#me"], {
          y: -60,
          delay: 0.5,
        })
        .to("#buttns", {
          opacity: 1,
          display: "flex",
        });
    }, comp5);

    return () => ctx5.revert();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <Container
          ref={comp1}
          className="d-none d-xl-block"
          style={{
            backgroundImage: "url(/result.png)",
            height: "600px",
            width: "900px",
          }}
        >
          <Screen
            height={"485px"}
            width={"868px"}
            himt={"180px"}
            contmt={"15px"}
            divmt={"110px"}
            imgHeight={"200px"}
            imgWidth={"200px"}
            fontsize={"38px"}
            btnmt={"30px"}
          />
        </Container>
        <Container
          ref={comp2}
          className="d-none d-lg-block d-xl-none"
          style={{
            backgroundImage: "url(/resultlg.png)",
            height: "500px",
            width: "750px",
          }}
        >
          <Screen
            height={"405px"}
            width={"720px"}
            himt={"180px"}
            contmt={"15px"}
            divmt={"110px"}
            imgHeight={"200px"}
            imgWidth={"200px"}
            fontsize={"34px"}
            btnmt={"0px"}
          />
        </Container>

        <Container
          ref={comp3}
          className="d-none d-md-block d-lg-none"
          style={{
            backgroundImage: "url(/resultmd.png)",
            height: "440px",
            width: "650px",
          }}
        >
          <Screen
            height={"350px"}
            width={"625px"}
            himt={"150px"}
            contmt={"10px"}
            divmt={"60px"}
            imgHeight={"150px"}
            imgWidth={"150px"}
            fontsize={"30px"}
            btnmt={"20px"}
          />
        </Container>

        <Container
           ref={comp4}
          className="d-none d-sm-block d-md-none"
          style={{
            backgroundImage: "url(/resultsm.png)",
            height: "360px",
            width: "520px",
            margin: "0",
            padding: "0",
          }}
        >
          <Screen 
            height={"282px"}
            width={"502px"}
            himt={"120px"}
            contmt={"9px"}
            divmt={"60px"}
            imgHeight={"130px"}
            imgWidth={"130px"}
            fontsize={"25px"}
            btnmt={"10px"}
           />
        </Container>

        <Container
          ref={comp5}
          className="d-block d-sm-none"
          style={{
            backgroundImage: "url(/backgroundphone.png)",
            height: "670px",
            width: "350px",
            margin: "0",
            padding: "0",
          }}
        >
          <Phone />
        </Container>
      </div>
    </>
  );
}
