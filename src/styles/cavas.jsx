// styled-components
import styled, { keyframes } from "styled-components";
// image
import backgroundImage from "../assets/notebook_01.png"
import canvasBackgroundImage from "../assets/soeasy.png";

const fadeIn = keyframes `
  0% {
    bottom: 75px
  } 100% {
    bottom: 85px;
  }
`

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

  .iconWrap {
    position: relative;
    cursor: pointer; 
    margin: 0 15px;
    transition: .3s;
    &:hover {
      margin-top: -10px;
      .selectors {
        display: flex;
      }
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border: 1px solid #000000;
    border-radius: 50px;
    .icon {
      font-size: 42px;
    }
  }

  .colorSelector {
    position: absolute;
    display: none;
    flex-wrap: wrap;
    bottom: 85px;
    left: -218px;
    width: 500px;
    height: 115px;
    justify-content: center;
    align-items: center;
    transition: .3s;
    animation: ${fadeIn} .3s ease-out;

    .colorBox {
      width: 55px;
      height: 55px;
      border: 1px solid blue;
      border-radius: 50px;
      margin: 2px;
      transition: .3s;
      box-sizing: border-box;
      &:hover {
        width: 65px;
        height: 65px;
      }
    }
  }
`