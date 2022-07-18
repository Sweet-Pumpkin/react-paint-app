// styled-components
import styled from "styled-components";
// image
import backgroundImage from "../assets/notebook_01.png"
import canvasBackgroundImage from "../assets/soeasy.png";

export const CanvasStyle = styled.div`
  .view {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .canvasWrap {
    width: 800px;
    height: 620px;
    background-image: url(${backgroundImage});
    background-size: cover;
    position: relative;
  }

  .canvas {
    position: absolute;
    border-radius: 10px;
    top: 40px;
    left: 100px; 
    width: 650px;
    height: 540px;
    background-image: url(${canvasBackgroundImage});
  }
`