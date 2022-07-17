// styled-components
import styled from "styled-components";
// image
import backgroundImage from "../assets/notebook_01.png"

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
    height: 600px;
    background-image: url(${backgroundImage});
    background-size: cover;
    position: relative;
  }

  .canvas {
    position: absolute;
    top: 40px;
    left: 100px; 
    border: 1px solid red;
    width: 650px;
    height: 540px;
  }
`