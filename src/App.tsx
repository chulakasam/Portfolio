
import './App.css';
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Contact from "./components/Contact/Contact.tsx";


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;