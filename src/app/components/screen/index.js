import Container from "react-bootstrap/Container";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';

export default function Screen(props){

  return(
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
                    height:props.imgHeight,
                    width:props.imgWidth
                  }}
                  id="me"
                  src="me3.jpg"
                ></img>
              </div>
              <div>
                <h1 id="name" style={{ opacity: "0", display: "none" , fontSize: props.fontsize }}>
                  I'm Rayane
                </h1>
                <h1 id="desc" style={{ opacity: "0", display: "none", fontSize: props.fontsize }}>
                  a full stack developer <br></br> & Computer science <br></br>{" "}
                  student
                </h1>
              </div>
            </div>
            <div id="buttns" style={{opacity:"0", display:"none",justifyContent:"center",alignItems:"center", marginTop: props.btnmt}}>
            <button style={{all:"unset",marginRight:"50px"}}><InfoOutlinedIcon></InfoOutlinedIcon> About me</button>
            <button style={{all:"unset",marginRight:"50px"}}><CodeOutlinedIcon></CodeOutlinedIcon> Technologies</button>
            <button style={{all:"unset"}}><WebAssetOutlinedIcon></WebAssetOutlinedIcon> Projects</button>
            </div>
          </Container>
    </>
  )
}