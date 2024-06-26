import Container from "react-bootstrap/Container";
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../../styles/phoneCard.css"
import Link from "next/link";

export default function Phone(props) {
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
              I'm Rayane Hiouani
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
        <button
          id="about"
          style={{ all: "unset", marginBottom: "15px" }}
          onClick={handleAbout}
        >
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button
          id="tech"
          style={{ all: "unset", marginBottom: "15px", marginTop: "15px" }}
          onClick={handleAbout}
        >
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
        <button
          id="projects"
          style={{ all: "unset", marginTop: "15px" }}
          onClick={handleAbout}
        >
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
      </div>
      <div
        id="socialmedia"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          display: "none",
          opacity: "0",
        }}
      >
        <a href="https://github.com/Rayane76"><GitHubIcon style={{ height: "40px", width: "40px" }}></GitHubIcon></a>
        <a href="https://www.facebook.com/rayane.hiouani/"><FacebookIcon
          style={{ marginLeft: "30px", height: "40px", width: "40px" }}
        ></FacebookIcon></a>
        <a href="https://www.instagram.com/ray_ane_hn/"><InstagramIcon
          style={{ marginLeft: "30px", height: "40px", width: "40px" }}
        ></InstagramIcon></a>
        <a href="https://www.linkedin.com/in/rayane-hiouani-1794512a4/"><LinkedInIcon
          style={{ marginLeft: "30px", height: "40px", width: "40px" }}
        ></LinkedInIcon></a>
      </div>

      {/* AFTER CLICKING */}

      <div id="aboutAfterClick" style={{ display: "none", opacity: "0" }}>
        <p
          style={{
            marginLeft: "40px",
            marginRight: "30px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Welcome to my portfolio! I am a dedicated full-stack web developer and
          a passionate computer science student at USTHB (University of Science
          and Technology Houari Boumediene). With a keen interest in the dynamic
          realm of technology, I specialize in crafting innovative and
          user-friendly web solutions. My journey in computer science has
          equipped me with a solid foundation, allowing me to seamlessly bridge
          the gap between front-end and back-end development.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <button
            id="tech2"
            style={{ all: "unset", marginBottom: "12px" }}
            onClick={handleAbout}
          >
            <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
          </button>
          <button
            id="projects2"
            style={{ all: "unset", marginTop: "12px", marginBottom: "12px" }}
            onClick={handleAbout}
          >
            <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
          </button>
          <button
            id="home"
            style={{ all: "unset", marginTop: "12px" }}
            onClick={handleAbout}
          >
            <HomeIcon></HomeIcon> Home
          </button>
        </div>
      </div>

      <div id="techAfterClick" style={{ display: "none", opacity: "0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h1>Technologies</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h2>Front end</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src="/html.png"
            style={{ height: "50px", marginRight: "20px" }}
          ></img>
          <img
            src="/css.png"
            style={{ height: "50px", marginRight: "20px" }}
          ></img>
          <img src="/bootstrap.png" style={{ height: "50px" }}></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src="/tailwind.jpg"
            style={{ height: "50px", marginRight: "20px" }}
          ></img>
          <img
            src="/js.png"
            style={{ height: "50px", marginRight: "20px" }}
          ></img>
          <img src="/react.png" style={{ height: "50px" }}></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/next.jpg"
            style={{ height: "50px", marginRight: "20px" }}
          ></img>
          <img src="/gsap.jpg" style={{ height: "50px" }}></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <h2>Back end</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <img
            src="/node.png"
            style={{ height: "50px", marginRight: "20px" }}
          ></img>
          <img
            src="/express.png"
            style={{ height: "50px", marginRight: "20px" }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/mongo.jpg" style={{ height: "50px" }}></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button
            id="about2"
            style={{ all: "unset", marginRight: "25px" }}
            onClick={handleAbout}
          >
            <InfoOutlinedIcon></InfoOutlinedIcon> About me
          </button>
          <button
            id="projects2"
            style={{ all: "unset", marginLeft: "25px" }}
            onClick={handleAbout}
          >
            <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <button
            id="home"
            style={{ all: "unset", marginTop: "7px" }}
            onClick={handleAbout}
          >
            <HomeIcon></HomeIcon> Home
          </button>
        </div>
      </div>

      <div id="projectsAfterClick" style={{ display: "none", opacity: "0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
        <Link href={"https://gip-lemon.vercel.app/"} target="_blank" style={{all:"unset"}}>
                      <div className="card">
    <div className="card-image"><img src="gipecomm.png" className="projectImg"></img></div>
    <div className="category"> Ecommerce website </div>
    <div className="heading"> Built with NextJs and MongoDb
    </div>
</div>
</Link>
<Link href={"https://ghack24.gdgalgiers.com/"} target="_blank" style={{all:"unset"}}>
        <div className="card">
    <div className="card-image"><img src="ghack.png" className="projectImg"></img></div>
    <div className="category"> Ghack hackathon website </div>
    <div className="heading"> Built with NextJs and pure css animations
    </div>
</div>
</Link>
          {/* <h1>Not yet ...</h1>
          <h1>Visit my GitHub for</h1>
          <h1>more informations</h1> */}
        </div>
        <div style={{marginTop:"15px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"15px"}}>
        <button
          id="about2"
          style={{ all: "unset", marginRight:"5px"}}
          onClick={handleAbout}
        >
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button
          id="tech2"
          style={{ all: "unset",marginLeft:"10px"}}
          onClick={handleAbout}
        >
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button
          id="home"
          style={{ all: "unset"}}
          onClick={handleAbout}
        >
          <HomeIcon></HomeIcon> Home
        </button>
        </div>
        </div>
      </div>
    </>
  );
}
