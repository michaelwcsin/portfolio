import { useState } from "react";
import "./App.css";
import AboutMe from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Header from "./components/header";
import Projects from "./components/projects";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Contact></Contact>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Blog></Blog>
    </div>
  );
};

export default App;
