import './App.scss';
import React, { useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let painting = false;

    const canvas = canvasRef.current;
    canvas.width = 550;
    canvas.height = 450;

    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2.5;

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("mouseleave", stopDraw);
    
    function draw(event) {
      const x = event.offsetX;
      const y = event.offsetY;
      if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }
    function startDraw() {
      painting = true;
    }
    function stopDraw() {
      painting = false;
    }
  }, []);

  return (
    <div className="body">
      <div className="canvasCon">
        <canvas 
          ref={canvasRef}
          className="canvas"
        >
        </canvas>
      </div>
    </div>
  );
}

export default App;
