// react
import React from "react";
// icons
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PaletteIcon from '@mui/icons-material/Palette';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
// style 
import { MenuBarStyle } from "../styles/cavas";

export default function MenuBar({ getCtx, getCanvas }) {
  // reset button
  const onReset = () => {
    getCtx.clearRect(0, 0, getCanvas.width, getCanvas.height);
  }

  return (
    <MenuBarStyle className="menuBar">
      <li>
        <FormatPaintIcon className="icons" />
      </li>
      <li>
        <BorderColorIcon className="icons" />
      </li>
      <li>
        <PaletteIcon className="icons" />
      </li>
      <li>
        <RestartAltIcon 
          onClick={onReset}
          className="icons" 
        />
      </li>
      <li>
        <SaveIcon className="icons" />
      </li>
    </MenuBarStyle>
  )
}
