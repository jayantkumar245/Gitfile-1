import Header from "./components/Header/Header";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
    <About/>
    <Navbar/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
