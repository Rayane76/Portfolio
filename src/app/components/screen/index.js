import Container from "react-bootstrap/Container";
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../../../styles/card.css"
import { useRouter } from "next/navigation";
import Link from "next/link";

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
              I'm Rayane Hiouani
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
        <div id="socialmedia" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:props.socialMediaMt,display:"none",opacity:"0"}}>
        <a href="https://github.com/Rayane76"><GitHubIcon style={{height:props.socialMediaSize,width:props.socialMediaSize}}></GitHubIcon></a>
        <a href="https://www.facebook.com/rayane.hiouani/"> <FacebookIcon style={{marginLeft:"30px",height:props.socialMediaSize,width:props.socialMediaSize}}></FacebookIcon></a>
        <a href="https://www.instagram.com/ray_ane_hn/"><InstagramIcon style={{marginLeft:"30px",height:props.socialMediaSize,width:props.socialMediaSize}}></InstagramIcon></a>
        <a href="https://www.linkedin.com/in/rayane-hiouani-1794512a4/"><LinkedInIcon style={{marginLeft:"30px",height:props.socialMediaSize,width:props.socialMediaSize}}></LinkedInIcon></a>
      </div>

      <div id="projectsAfterClick" style={{ display: "none", opacity: "0"}}>
      <div
      className="divCard"
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
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button
          id="about2"
          style={{ all: "unset",marginRight:"15px" }}
          onClick={handleAbout}
        >
          <InfoOutlinedIcon></InfoOutlinedIcon> About me
        </button>
        <button
          id="tech2"
          style={{ all: "unset",marginLeft:"15px",marginRight:"15px"}}
          onClick={handleAbout}
        >
          <CodeOutlinedIcon></CodeOutlinedIcon> Technologies
        </button>
        <button id="home" style={{ all: "unset",marginLeft:"15px"}} onClick={handleAbout}>
          <HomeIcon></HomeIcon> Home
        </button>
        </div>
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
        <button id="projects2" style={{ all: "unset" , marginLeft:"20px" , marginRight:"20px" }} onClick={handleAbout}>
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
        <button id="home" style={{ all: "unset" , marginLeft:"20px" }} onClick={handleAbout}>
          <HomeIcon></HomeIcon> Home
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
        <button id="projects2" style={{ all: "unset" ,marginLeft:"30px",marginRight:"30px" }} onClick={handleAbout}>
          <WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects
        </button>
        <button id="home" style={{ all: "unset",marginLeft:"30px" }} onClick={handleAbout}>
          <HomeIcon></HomeIcon> Home
        </button>
        </div>
       
      </div>

      {/* <div id="projectsAfterClick" style={{ display: "none", opacity: "0"}}>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom:"50px",
          }}
        >
          <h1>Not yet ...</h1>
          <h1>Visit my GitHub for</h1>
          <h1>more informations</h1>
        </div>
        <div>
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
        <button id="home" style={{ all: "unset",marginTop:"12px" }} onClick={handleAbout}>
          <HomeIcon></HomeIcon> Home
        </button>
        </div>
      </div> */}
    </>
  );
}
