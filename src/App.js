import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";
import { useState } from "react";
import * as emailjs from "emailjs-com";

function App() {
  const location = useLocation();
  console.log(location);

  // Move the useState calls outside of the handleInit function
  const [Name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [Message, setmsg] = useState("");

  const handleInit = async (main) => {
     await loadFull(main);
  };

  function Sendmail() {
    const Data = {
      to_name: Name,
      to_email: Email,
      message: Message,
    };
    const Service_id = "service_4ist7aw";
    const Template_id = "template_76acbok";
    const user_id = "iKMj61Gm8FYrGGcQB";

    emailjs.send(Service_id, Template_id, Data, user_id).then(
      function (response) {
        alert("message sent successfully");
      },
      function (error) {
        console.log(error);
      }
    );
  }

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
