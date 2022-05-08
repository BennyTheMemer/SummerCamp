import { useState } from "react";
import MyRoutes from "./routes";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
