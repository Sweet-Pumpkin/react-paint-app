// react
import React, { useState } from "react";
// icons
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PaletteIcon from '@mui/icons-material/Palette';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
// style 
import { MenuBarStyle } from "../styles/cavas";

// COLOR SELECTOR
const ColorSelector = () => {
  return (
    <ul className="selectors colorSelector">
      <li 
        className="colorBox" 
        style={{ backgroundColor : "#000000" }}
        onClick={e => console.log(e.target.style.backgroundColor)}
      >
      </li>
      <li 
        className="colorBox" 
        style={{ backgroundColor : "#ffffff" }}
        onClick={e => console.log(e.target.style.backgroundColor)}
      >
      </li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
      <li className="colorBox"></li>
    </ul>
  );
}

// MENUBAR
export default function MenuBar({ getCtx, getCanvas }) {
  // what is your color?
  const [yourColor, setYourColor] = useState("rgb(0, 0, 0)");

  // reset button
  const onReset = () => {
    getCtx.clearRect(0, 0, getCanvas.width, getCanvas.height);
  }
  // save image button
  const onSave = () => {
    const imageURL = getCanvas.toDataURL();
    const downloadImage = document.createElement("a");
    downloadImage.href = imageURL;
    downloadImage.download = "paint_image";
    downloadImage.click();
  }

  return (
    <MenuBarStyle className="menuBar">
      <li className="iconWrap">
        <div className="icons">
          <FormatPaintIcon className="icon" />
        </div>
      </li>
      <li className="iconWrap">
        <div className="icons">
          <BorderColorIcon className="icon" />
        </div>
      </li>
      <li className="iconWrap">
        <div className="icons">
          <PaletteIcon className="icon" />
        </div>
        <ColorSelector />
      </li>
      {/* RESET BUTTON */}
      <li onClick={onReset} className="iconWrap">
        <div className="icons">
          <RestartAltIcon className="icon" />
        </div>
      </li>
      {/* SAVE BUTTON */}
      <li onClick={onSave} className="iconWrap">
        <div className="icons">
          <SaveIcon className="icon" />
        </div>
      </li>
    </MenuBarStyle>
  )
}
