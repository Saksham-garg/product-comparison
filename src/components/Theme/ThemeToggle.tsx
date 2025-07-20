import { type FC } from "react";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface Props {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeToggle: FC<Props> = ({ mode, toggleTheme }) => {
  return (
    <IconButton onClick={toggleTheme} aria-label="Toggle theme">
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
