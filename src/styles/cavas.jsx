// styled-components
import styled from "styled-components";
// image
import backgroundImage from "../assets/notebook_01.png"
import canvasBackgroundImage from "../assets/soeasy.png";

export const CanvasStyle = styled.div`
  .view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  .menuBar {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
`

export const MenuBarStyle = styled.ul`
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border: 1px solid #000000;
    border-radius: 50px;
    cursor: pointer;
    &:last-child {
      margin-right: 0px;
    }
  }
`