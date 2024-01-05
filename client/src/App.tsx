import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/router";
import NavBarHeader from "./components/header/navHeader";

function App() {
  return (
    <BrowserRouter>
      <NavBarHeader />
      <Router />
    </BrowserRouter>
  );
}

export default App;
