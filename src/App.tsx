//
// import './App.css';
// import Header from "./components/Header/Header.tsx";
// import Home from "./components/Home/Home.tsx";
// import About from "./components/About/About.tsx";
// import Experience from "./components/Experience/Experience.tsx";
// import Projects from "./components/Projects/Projects.tsx";
// import Skills from "./components/Skills/Skills.tsx";
// import Contact from "./components/Contact/Contact.tsx";
// import Footer from "./components/Footer/Footer.tsx";
//
//
// function App() {
//
//   return (
//     <>
//       <Header/>
//       <Home/>
//       <About/>
//       <Experience />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer/>
//     </>
//   );
// }
//
// export default App;

import "./App.css";
import Header from "./components/Header/Header.tsx";

import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Experience from "./components/Experience/Experience.tsx";

function App() {
    return (
        <>
            {/* Shared 3D background */}


            <Header />

            <main>
                <Home />
                <About />
                <Projects />
                <Experience />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;
