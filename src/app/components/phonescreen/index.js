import Container from "react-bootstrap/Container";
import { gsap } from "gsap";
import { useLayoutEffect, useRef , useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";

export default function Phone(props) {
  
  const [click,setClick] = useState(false);
  
  const handleAbout = (event) => {
    const id = event.target.id
    console.log(id);
    setClick(true);
    props.click(true);
    props.whichOne(id);
  }
  return (
    <>


    {/* FIRST RENDER */}



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
        <button id="about" style={{ all: "unset", marginBottom: "15px" }} onClick={handleAbout}>
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button id="tech" style={{ all: "unset", marginBottom: "15px" , marginTop:"15px" }} onClick={handleAbout}>
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
        <button id="projects" style={{ all: "unset" , marginTop:"15px" }} onClick={handleAbout}>
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
      </div>

    {/* AFTER CLICKING */}

    <div id="aboutAfterClick" style={{display:"none",opacity:"0"}}>
      <p style={{marginLeft:"40px",marginRight:"30px" , fontWeight:"bold" , marginBottom:"30px" }}>Welcome to my portfolio! I am a dedicated full-stack web developer and a passionate computer science student at USTHB (University of Science and Technology Houari Boumediene). With a keen interest in the dynamic realm of technology, I specialize in crafting innovative and user-friendly web solutions. My journey in computer science has equipped me with a solid foundation, allowing me to seamlessly bridge the gap between front-end and back-end development.</p>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <button id="tech2" style={{ all: "unset", marginBottom: "15px" }} onClick={handleAbout}>
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
        <button id="projects2" style={{ all: "unset",marginTop:"15px" }} onClick={handleAbout}>
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
        </div>
    </div>


    <div id="techAfterClick" style={{display:"none",opacity:"0"}}>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
        <h1>Technologies</h1>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
          <h2>Front end</h2>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
          <img src="/html.png" style={{height:"50px",marginRight:"20px"}}></img>
          <img src="/css.png" style={{height:"50px",marginRight:"20px"}}></img>
          <img src="/bootstrap.png" style={{height:"50px"}}></img>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
          <img src="/tailwind.jpg" style={{height:"50px",marginRight:"20px"}}></img>
          <img src="/js.png" style={{height:"50px",marginRight:"20px"}}></img>
          <img src="/react.png" style={{height:"50px"}}></img>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src="/next.jpg" style={{height:"50px",marginRight:"20px"}}></img>
          <img src="/gsap.jpg" style={{height:"50px"}}></img>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px",marginTop:"20px"}}>
          <h2>Back end</h2>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"15px"}}>
        <img src="/node.png" style={{height:"50px",marginRight:"20px"}}></img>
        <img src="/express.png" style={{height:"50px",marginRight:"20px"}}></img>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src="/mongo.jpg" style={{height:"50px"}}></img>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
    <button id="about2" style={{ all: "unset",marginRight:"20px"}} onClick={handleAbout}>
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button id="projects2" style={{ all: "unset",marginLeft:"20px" }} onClick={handleAbout}>
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
        </div>
    </div>


    <div id="projectsAfterClick" style={{display:"none",opacity:"0"}}>
    <h1>hello</h1>
    <button id="about2" style={{ all: "unset", marginBottom: "15px" }} onClick={handleAbout}>
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button id="tech2" style={{ all: "unset", marginBottom: "15px" }} onClick={handleAbout}>
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
    </div>

    </>
  ); 
}
