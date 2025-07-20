import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { type FC, type ReactNode, useMemo, useState } from "react";

interface Props {
  children: (mode: "light" | "dark", toggleTheme: () => void) => ReactNode;
}

export const ThemeWrapper: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);
  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children(mode, toggleTheme)}
    </ThemeProvider>
  );
};
