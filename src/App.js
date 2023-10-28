import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Cta from "./components/Cta";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import React from "react";

function App() {
  const [prompt, setPrompt] = useState(false);
  const [status, setStatus] = useState(false);
  const messege = (state) => {
    setStatus(state);
    setPrompt(true);
    setTimeout(() => {
      setPrompt(false);
    }, 4000);
  };

  return (
    <>
      <Navbar></Navbar>
      <Hero func={messege}></Hero>
      <About></About>
      <Products></Products>
      <Cta></Cta>
      <Testimonials></Testimonials>
      <Footer></Footer>
      {prompt === true && status === true ? (
        <Popup
          cls="var-2"
          warn="Success !"
          msg="Your form has been submitted."
        ></Popup>
      ) : prompt === true && status === false ? (
        <Popup
          cls="var-1"
          warn="Caution !"
          msg="Please fill all the fields."
        ></Popup>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
