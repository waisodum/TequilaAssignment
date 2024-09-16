import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Branding from "./components/Branding";
import Caraousel from "./components/caraousel";
import Award from "./components/award";
import OurWork from "./OurWork";
import Clients from "./components/Clients";
import Speak from "./components/OurClientsSpeak";
import LatestWork from "./components/Latestwork";
import Paragraph from "./components/paragraph";
import FAQ from "./components/Faq";
import Blogs from "./components/Blogs";
import YellowBandSection from "./components/yellowban";
import Contactus from "./components/Contactus";
import Copyright from "./components/copyright";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Branding />
      <Caraousel />
      <Award />
      <OurWork />
      <Clients />
      <LatestWork />
      <Speak />
      <Paragraph />
      <FAQ />
      <Blogs />
      <YellowBandSection />
      <Contactus />
      <Footer/>
      <Copyright />
    </>
  );
}

export default App;
