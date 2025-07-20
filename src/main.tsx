import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeWrapper } from "@context/ThemeWrapper";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeWrapper>
    {(mode, toggleTheme) => <App mode={mode} toggleTheme={toggleTheme} />}
  </ThemeWrapper>
);
