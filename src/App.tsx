import { FC, useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import ChatBot from "./components/chatbot/ChatBot";

const App: FC = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="relative">
      <div className="flex min-h-screen bg-white">
        <div className="fixed w-64 h-full">
          <Sidebar
            activeSection={activeSection}
            onSetActive={handleSetActive}
          />
        </div>
        <main className="flex-1 ml-64">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="skills" className="min-h-screen">
            <Skills />
          </section>
          <section id="experience" className="min-h-screen">
            <Experience />
          </section>
          <section id="education" className="min-h-screen">
            <Education />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>
      </div>
      <ChatBot />
    </div>
  );
};

export default App;
