// react
import React, { useRef, useEffect, useState } from "react";
// style
import { CanvasStyle } from "./styles/cavas";

export default function App() {
  // useRef
  const canvasRef = useRef(null);
  // ctx
  const [ctx, setCtx] = useState(null);
  // painting state
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    // canvas useRef
    const canvas = canvasRef.current;
    setCtx(canvas.getContext("2d"));
    // canvas size
    const CANVAS_WITDH_SIZE = 650;
    const CANVAS_HEIGHT_SIZE = 540;
    canvas.witdth = CANVAS_WITDH_SIZE;
    canvas.height = CANVAS_HEIGHT_SIZE;

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2.5;

  }, []);

  const drawFn = e => {
    // mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // drawing
    if (!painting) {
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
    } else {
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
    }
    
  }

  return (
    <CanvasStyle>
      <div className="view">
        <div className="canvasWrap">
          <canvas 
            className="canvas"
            ref={canvasRef}
            onMouseDown={() => setPainting(true)}
            onMouseUp={() => setPainting(false)}
            onMouseMove={e => drawFn(e)}
            onMouseLeave={e => drawFn(e)}
          >
          </canvas>
        </div>
      </div>
    </CanvasStyle>
  )
}
