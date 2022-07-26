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

export default function MenuBar() {
  return (
    <MenuBarStyle className="menuBar">
      <li>
        <FormatPaintIcon />
      </li>
      <li>
        <BorderColorIcon />
      </li>
      <li>
        <PaletteIcon />
      </li>
      <li>
        <RestartAltIcon />
      </li>
      <li>
        <SaveIcon />
      </li>
    </MenuBarStyle>
  )
}
