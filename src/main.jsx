import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'
// import UseState from "./useState/UseState";
import { Home } from "./import_export/Home";
import Lifecycle from "./LifeCycleModule/LifeCycleModule";
import Lifecycle1 from "./LifeCycleModule/ComponentDidMount";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <UseState /> */}
    <Home />
    <Lifecycle />
    <Lifecycle1 />
  </>
);