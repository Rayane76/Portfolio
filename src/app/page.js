"use client";

import "../styles/styles.css";
import Container from "react-bootstrap/Container";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

  const [clicked, setClicked] = useState(false);
  const [numClick, setNumClick] = useState(0);
  const [whichClicked, setWhichClicked] = useState("");
  const [whichClicked2, setWhichClicked2] = useState("");

  const handleClicked = (value) => {
    setClicked(value);
    setNumClick((prev) => prev + 1);
  };

  const handleWhichONe = (whichOne) => {
    setWhichClicked(whichOne);
  };

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
    let ctx1 = gsap.context(() => {
      var tl11 = gsap.timeline();
      if (clicked && numClick === 1) {
        tl11.to(["#name", "#desc", "#me", "#buttns"], {
          opacity: 0,
          duration: 1,
          display: "none",
        });
      }

      function startAnother() {
        if (whichClicked === "about2") {
          setWhichClicked2(whichClicked);
          tl11.to(["#aboutAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -400
          }).to(["#tech2", "#projects2"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }
        if (whichClicked === "tech2") {
          setWhichClicked2(whichClicked);
          tl11.to(["#techAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -460
          }).to(["#about2", "#projects2"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }

        if (whichClicked === "projects2") {
          setWhichClicked2(whichClicked);
          tl11.to(["#projectsAfterClick", "#about2", "#tech2"], {
            display: "block",
            opacity: 1,
            duration: 1,
          });
        }
      }
      if (whichClicked === "about") {
        setWhichClicked2(whichClicked);
        tl11.to(["#aboutAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -400
        }).to(["#tech2", "#projects2"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "about" && whichClicked2 === "about") ||
        (whichClicked != "about2" && whichClicked2 === "about2")
      ) {
        tl11.to(["#aboutAfterClick", "#tech2", "#projects2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "tech") {
        setWhichClicked2(whichClicked);
        tl11.to(["#techAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -460
        }).to(["#about2", "#projects2"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "tech" && whichClicked2 === "tech") ||
        (whichClicked != "tech2" && whichClicked2 === "tech2")
      ) {
        tl11.to(["#techAfterClick", "#about2", "#projects2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "projects") {
        setWhichClicked2(whichClicked);
        tl11.to(["#projectsAfterClick", "#about2", "#tech2"], {
          display: "block",
          opacity: 1,
          duration: 1,
        });
      }
      if (
        (whichClicked != "projects" && whichClicked2 === "projects") ||
        (whichClicked != "projects2" && whichClicked2 === "projects2")
      ) {
        tl11.to(["#projectsAfterClick", "#about2", "#tech2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }
    }, comp1);
  }, [clicked,whichClicked,whichClicked2]);

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
    let ctx22 = gsap.context(() => {
      var tl22 = gsap.timeline();
      if (clicked && numClick === 1) {
        tl22.to(["#name", "#desc", "#me", "#buttns"], {
          opacity: 0,
          duration: 1,
          display: "none",
        });
      }

      function startAnother() {
        if (whichClicked === "about2") {
          setWhichClicked2(whichClicked);
          tl22.to(["#aboutAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -380
          }).to(["#tech2", "#projects2"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }
        if (whichClicked === "tech2") {
          setWhichClicked2(whichClicked);
          tl22.to(["#techAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -380
          }).to(["#about2", "#projects2"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }

        if (whichClicked === "projects2") {
          setWhichClicked2(whichClicked);
          tl22.to(["#projectsAfterClick", "#about2", "#tech2"], {
            display: "block",
            opacity: 1,
            duration: 1,
          });
        }
      }
      if (whichClicked === "about") {
        setWhichClicked2(whichClicked);
        tl22.to(["#aboutAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -380
        }).to(["#tech2", "#projects2"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "about" && whichClicked2 === "about") ||
        (whichClicked != "about2" && whichClicked2 === "about2")
      ) {
        tl22.to(["#aboutAfterClick", "#tech2", "#projects2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "tech") {
        setWhichClicked2(whichClicked);
        tl22.to(["#techAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -380
        }).to(["#about2", "#projects2"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "tech" && whichClicked2 === "tech") ||
        (whichClicked != "tech2" && whichClicked2 === "tech2")
      ) {
        tl22.to(["#techAfterClick", "#about2", "#projects2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "projects") {
        setWhichClicked2(whichClicked);
        tl22.to(["#projectsAfterClick", "#about2", "#tech2"], {
          display: "block",
          opacity: 1,
          duration: 1,
        });
      }
      if (
        (whichClicked != "projects" && whichClicked2 === "projects") ||
        (whichClicked != "projects2" && whichClicked2 === "projects2")
      ) {
        tl22.to(["#projectsAfterClick", "#about2", "#tech2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }
    }, comp2);
  }, [clicked,whichClicked,whichClicked2]);

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
    let ctx33 = gsap.context(() => {
      var tl33 = gsap.timeline();
      if (clicked && numClick === 1) {
        tl33.to(["#name", "#desc", "#me", "#buttns"], {
          opacity: 0,
          duration: 1,
          display: "none",
        });
      }

      function startAnother() {
        if (whichClicked === "about2") {
          setWhichClicked2(whichClicked);
          tl33.to(["#aboutAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -330
          }).to(["#tech2", "#projects2"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }
        if (whichClicked === "tech2") {
          setWhichClicked2(whichClicked);
          tl33.to(["#techAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -350
          }).to(["#about", "#projects2"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }

        if (whichClicked === "projects2") {
          setWhichClicked2(whichClicked);
          tl33.to(["#projectsAfterClick", "#about2", "#tech2"], {
            display: "block",
            opacity: 1,
            duration: 1,
          });
        }
      }
      if (whichClicked === "about") {
        setWhichClicked2(whichClicked);
        tl33.to(["#aboutAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -330
        }).to(["#tech2", "#projects2"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "about" && whichClicked2 === "about") ||
        (whichClicked != "about2" && whichClicked2 === "about2")
      ) {
        tl33.to(["#aboutAfterClick", "#tech2", "#projects2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "tech") {
        setWhichClicked2(whichClicked);
        tl33.to(["#techAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -350
        }).to(["#about", "#projects2"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "tech" && whichClicked2 === "tech") ||
        (whichClicked != "tech2" && whichClicked2 === "tech2")
      ) {
        tl33.to(["#techAfterClick", "#about2", "#projects2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "projects") {
        setWhichClicked2(whichClicked);
        tl33.to(["#projectsAfterClick", "#about2", "#tech2"], {
          display: "block",
          opacity: 1,
          duration: 1,
        });
      }
      if (
        (whichClicked != "projects" && whichClicked2 === "projects") ||
        (whichClicked != "projects2" && whichClicked2 === "projects2")
      ) {
        tl33.to(["#projectsAfterClick", "#about2", "#tech2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }
    }, comp3);
  }, [clicked,whichClicked,whichClicked2]);

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
    let ctx44 = gsap.context(() => {
      var tl44 = gsap.timeline();
      if (clicked && numClick === 1) {
        tl44.to(["#name", "#desc", "#me", "#buttns"], {
          opacity: 0,
          duration: 1,
          display: "none",
        });
      }

      function startAnother() {
        if (whichClicked === "about2") {
          setWhichClicked2(whichClicked);
          tl44.to(["#aboutAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -275
          }).to(["#tech2", "#projects2"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }
        if (whichClicked === "tech2") {
          setWhichClicked2(whichClicked);
          tl44.to(["#techAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -270
          }).to(["#about2", "#projects2"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }

        if (whichClicked === "projects2") {
          setWhichClicked2(whichClicked);
          tl44.to(["#projectsAfterClick", "#about2", "#tech2"], {
            display: "block",
            opacity: 1,
            duration: 1,
          });
        }
      }
      if (whichClicked === "about") {
        setWhichClicked2(whichClicked);
        tl44.to(["#aboutAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -275
        }).to(["#tech2", "#projects2"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "about" && whichClicked2 === "about") ||
        (whichClicked != "about2" && whichClicked2 === "about2")
      ) {
        tl44.to(["#aboutAfterClick", "#tech2", "#projects2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "tech") {
        setWhichClicked2(whichClicked);
        tl44.to(["#techAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -270
        }).to(["#about2", "#projects2"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "tech" && whichClicked2 === "tech") ||
        (whichClicked != "tech2" && whichClicked2 === "tech2")
      ) {
        tl44.to(["#techAfterClick", "#about2", "#projects2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "projects") {
        setWhichClicked2(whichClicked);
        tl44.to(["#projectsAfterClick", "#about2", "#tech2"], {
          display: "block",
          opacity: 1,
          duration: 1,
        });
      }
      if (
        (whichClicked != "projects" && whichClicked2 === "projects") ||
        (whichClicked != "projects2" && whichClicked2 === "projects2")
      ) {
        tl44.to(["#projectsAfterClick", "#about2", "#tech2"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }
    }, comp4);
  }, [clicked, whichClicked, whichClicked2]);

  useLayoutEffect(() => {
    let ctx5 = gsap.context(() => {
      var tl5 = gsap.timeline();
      tl5
        .to("#phoneback", { display: "none", opacity: 0, duration: 3 })
        .to("#hi", {
          color: "black",
          opacity: 1,
          display: "block",
        })
        .to("#hi", {
          opacity: 0,
          duration: 1,
          display: "none",
          delay: 1,
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

  useLayoutEffect(() => {
    let ctx6 = gsap.context(() => {
      var tl6 = gsap.timeline();
      if (clicked && numClick === 1) {
        tl6.to(["#name", "#desc", "#me", "#buttns"], {
          opacity: 0,
          duration: 1,
          display: "none",
        });
      }

      function startAnother() {
        if (whichClicked === "about2") {
          setWhichClicked2(whichClicked);
          tl6.to(["#aboutAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -80
          }).to(["#tech2", "#projects2","#home"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }
        if (whichClicked === "tech2") {
          setWhichClicked2(whichClicked);
          tl6.to(["#techAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -100
          }).to(["#about2", "#projects2","#home"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }

        if (whichClicked === "projects2") {
          setWhichClicked2(whichClicked);
          tl6.to(["#projectsAfterClick", "#about2", "#tech2","#home"], {
            display: "block",
            opacity: 1,
            duration: 1,
          });
        }

        if (whichClicked === "home") {
          setWhichClicked2(whichClicked);
          tl6.to(["#name","#desc","#me"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -80
          }).to("#buttns",{
            display: "flex",
            opacity: 1,
            duration: 1,
          })
        }

        if (whichClicked === "about" && numClick !=1) {
          setWhichClicked2(whichClicked);
          tl6.to(["#aboutAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -80
          }).to(["#tech2", "#projects2","#home"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }

        if (whichClicked === "tech" && numClick != 1) {
          setWhichClicked2(whichClicked);
          tl6.to(["#techAfterClick"], {
            display: "block",
            opacity: 1,
            duration: 1,
            y: -100
          }).to(["#about2", "#projects2","#home"],{
            display: "block",
            opacity: 1,
            duration: 1,
          })
        }
      }
      if (whichClicked === "about" && numClick === 1) {
        setWhichClicked2(whichClicked);
        tl6.to(["#aboutAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -80
        }).to(["#tech2", "#projects2","#home"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }

      if (
        whichClicked != "home" && whichClicked2 === "home"
      ) {
        tl6.to(["#name", "#desc", "#me", "#buttns"], {
          opacity: 0,
          duration: 1,
          display: "none",
          onComplete: startAnother,
        });
      }

      if (
        (whichClicked != "about" && whichClicked2 === "about") ||
        (whichClicked != "about2" && whichClicked2 === "about2")
      ) {
        tl6.to(["#aboutAfterClick", "#tech2", "#projects2","#home"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "tech" && numClick === 1) {
        setWhichClicked2(whichClicked);
        tl6.to(["#techAfterClick"], {
          display: "block",
          opacity: 1,
          duration: 1,
          y: -100
        }).to(["#about2", "#projects2","#home"],{
          display: "block",
          opacity: 1,
          duration: 1,
        })
      }
      if (
        (whichClicked != "tech" && whichClicked2 === "tech") ||
        (whichClicked != "tech2" && whichClicked2 === "tech2")
      ) {
        tl6.to(["#techAfterClick", "#about2", "#projects2","#home"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }

      if (whichClicked === "projects") {
        setWhichClicked2(whichClicked);
        tl6.to(["#projectsAfterClick", "#about2", "#tech2","#home"], {
          display: "block",
          opacity: 1,
          duration: 1,
        });
      }
      if (
        (whichClicked != "projects" && whichClicked2 === "projects") ||
        (whichClicked != "projects2" && whichClicked2 === "projects2")
      ) {
        tl6.to(["#projectsAfterClick", "#about2", "#tech2","#home"], {
          display: "none",
          opacity: 0,
          duration: 1,
          onComplete: startAnother,
        });
      }
    }, comp5);
  }, [clicked, whichClicked, whichClicked2]);

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
            aboutFtSize={"20px"}
            aboutBtnsMt={"80px"}
            techImages={"50px"}
            techMtMb={"20px"}
            click={handleClicked}
            whichOne={handleWhichONe}
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
            aboutFtSize={"20px"}
            aboutBtnsMt={"80px"}
            techImages={"40px"}
            techMtMb={"20px"}
            click={handleClicked}
            whichOne={handleWhichONe}
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
            aboutFtSize={"19px"}
            aboutBtnsMt={"25px"}
            techImages={"30px"}
            techMtMb={"20px"}
            click={handleClicked}
            whichOne={handleWhichONe}
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
            aboutFtSize={"16px"}
            aboutBtnsMt={"20px"}
            techImages={"25px"}
            techMtMb={"5px"}
            click={handleClicked}
            whichOne={handleWhichONe}
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
          <Phone click={handleClicked} whichOne={handleWhichONe} />
        </Container>
      </div>
    </>
  );
}
