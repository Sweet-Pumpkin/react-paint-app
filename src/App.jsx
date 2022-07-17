// react
import React, { useRef, useEffect, useState } from "react";
// style
import { CanvasStyle } from "./styles/cavas";

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log(canvas)
  })

  return (
    <CanvasStyle>
      <div className="view">
        <div className="canvasWrap">
          <div 
            className="canvas"
            ref={canvasRef}
          >
          </div>
        </div>
      </div>
    </CanvasStyle>
  )
}
