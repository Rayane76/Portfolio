import Container from "react-bootstrap/Container";
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import HtmlIcon from '@mui/icons-material/Html';

export default function Screen(props) {
  const [click, setClick] = useState(false);

  const handleAbout = (event) => {
    const id = event.target.id;
    console.log(id);
    setClick(true);
    props.click(true);
    props.whichOne(id);
  };

  return (
    <>
      <Container
        id="back"
        style={{
          height: props.height,
          marginTop: props.contmt,
          borderRadius: "5px",
          padding: "0",
          width: props.width,
        }}
      >
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
              marginTop: props.himt,
            }}
          >
            Hi !
          </h1>
        </div>
        <div
          style={{
            marginLeft: "20px",
            marginTop: props.divmt,
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
                marginRight: "70px",
                height: props.imgHeight,
                width: props.imgWidth,
              }}
              id="me"
              src="me3.jpg"
            ></img>
          </div>
          <div>
            <h1
              id="name"
              style={{
                opacity: "0",
                display: "none",
                fontSize: props.fontsize,
              }}
            >
              I'm Rayane
            </h1>
            <h1
              id="desc"
              style={{
                opacity: "0",
                display: "none",
                fontSize: props.fontsize,
              }}
            >
              a full stack developer <br></br> & Computer science <br></br>{" "}
              student
            </h1>
          </div>
        </div>
        <div
          id="buttns"
          style={{
            opacity: "0",
            display: "none",
            justifyContent: "center",
            alignItems: "center",
            marginTop: props.btnmt,
          }}
        >
          <button
            id="about"
            style={{ all: "unset", marginRight: "50px" }}
            onClick={handleAbout}
          >
            <InfoOutlinedIcon></InfoOutlinedIcon> About me
          </button>
          <button
            id="tech"
            style={{ all: "unset", marginRight: "50px" }}
            onClick={handleAbout}
          >
            <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
          </button>
          <button id="projects" style={{ all: "unset" }} onClick={handleAbout}>
            <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
          </button>
        </div>
      </Container>

      {/* AFTER CLICKING */}

      <div id="aboutAfterClick" style={{ display: "none", opacity: "0" }}>
        <p style={{ marginLeft: "40px", marginRight: "30px" , fontSize:props.aboutFtSize, fontWeight:"bold" }}>
          Welcome to my portfolio! I am a dedicated full-stack web developer and
          a passionate computer science student at USTHB (University of Science
          and Technology Houari Boumediene). With a keen interest in the dynamic
          realm of technology, I specialize in crafting innovative and
          user-friendly web solutions. My journey in computer science has
          equipped me with a solid foundation, allowing me to seamlessly bridge
          the gap between front-end and back-end development.
        </p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:props.aboutBtnsMt}}>
        <button
          id="tech2"
          style={{ all: "unset",marginRight:"20px"}}
          onClick={handleAbout}
        >
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
        <button id="projects2" style={{ all: "unset" , marginLeft:"20px" }} onClick={handleAbout}>
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
        </div>
      </div>

      <div id="techAfterClick" style={{ display: "none", opacity: "0" }}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:props.techMtMb}}>
        <h1>Technologies</h1>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:props.techMtMb}}>
          <h2>Front end</h2>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src="/html.png" style={{height:props.techImages,marginRight:"20px"}}></img>
          <img src="/css.png" style={{height:props.techImages,marginRight:"20px"}}></img>
          <img src="/bootstrap.png" style={{height:props.techImages,marginRight:"20px"}}></img>
          <img src="/tailwind.jpg" style={{height:props.techImages,marginRight:"20px"}}></img>
          <img src="/js.png" style={{height:props.techImages,marginRight:"20px"}}></img>
          <img src="/react.png" style={{height:props.techImages,marginRight:"20px"}}></img>
          <img src="/next.jpg" style={{height:props.techImages,marginRight:"20px"}}></img>
          <img src="/gsap.jpg" style={{height:props.techImages,marginRight:"20px"}}></img>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:props.techMtMb,marginTop:props.techMtMb}}>
          <h2>Back end</h2>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src="/node.png" style={{height:props.techImages,marginRight:"20px"}}></img>
        <img src="/express.png" style={{height:props.techImages,marginRight:"20px"}}></img>
        <img src="/mongo.jpg" style={{height:props.techImages,marginRight:"20px"}}></img>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>
        <button
          id="about2"
          style={{ all: "unset",marginRight:"30px"}}
          onClick={handleAbout}
        >
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button id="projects2" style={{ all: "unset" ,marginLeft:"30px" }} onClick={handleAbout}>
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
        </div>
       
      </div>

      <div id="projectsAfterClick" style={{ display: "none", opacity: "0" }}>
        <h1>hello</h1>
        <button
          id="about2"
          style={{ all: "unset", marginBottom: "15px" }}
          onClick={handleAbout}
        >
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button
          id="tech2"
          style={{ all: "unset", marginBottom: "15px" }}
          onClick={handleAbout}
        >
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
      </div>
    </>
  );
}
