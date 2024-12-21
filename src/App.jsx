import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";

function App() {
  return (
    <>
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <Copyright />
    </>
  )
}

export default App;
