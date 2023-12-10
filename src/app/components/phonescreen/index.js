import Container from "react-bootstrap/Container";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";

export default function Phone() {
  return (
    <>
      <Container
        id="phoneback"
        style={{
          height: "630px",
          marginTop: "17.5px",
          borderRadius: "40px",
          padding: "0",
          width: "315px",
          backgroundColor: "black",
        }}
      ></Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          id="hi"
          style={{
            opacity: "0",
            display: "none",
            marginTop: "270px",
          }}
        >
          Hi !
        </h1>
      </div>
      <div
        style={{
          marginLeft: "20px",
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            style={{
              display: "none",
              opacity: "0",
              borderRadius: "50%",
              marginRight: "10px",
              height: "100px",
              width: "100px",
            }}
            id="me"
            src="me3.jpg"
          ></img>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              id="name"
              style={{
                opacity: "0",
                display: "none",
                fontSize: "25px",
                //marginLeft: "60px",
              }}
            >
              I'm Rayane
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              id="desc"
              style={{ opacity: "0", display: "none", fontSize: "25px" }}
            >
              a full stack developer
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              id="desc"
              style={{ opacity: "0", display: "none", fontSize: "25px" }}
            >
              & Computer science
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              id="desc"
              style={{ opacity: "0", display: "none", fontSize: "25px" }}
            >
              student
            </h1>
          </div>
        </div>
      </div>
      <div
        id="buttns"
        style={{
          opacity: "0",
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <button style={{ all: "unset", marginBottom: "15px" }}>
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button style={{ all: "unset", marginBottom: "15px" }}>
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
        <button style={{ all: "unset" }}>
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
      </div>
    </>
  );
}
