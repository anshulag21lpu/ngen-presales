import logo from "./logo.svg";
import "./App.scss";
import Strip from "./Layout/Header/strip";
import Navigation from "./Layout/Header/navigation";
import Contact from "./pages/ContactUs/Contact";
import Business from "./pages/BusinessDevelopment/business";
import Home from "./pages/Home/home";
import Proposal from "./pages/Proposal/proposal";
import Footer from "./Layout/Footer/footer";
import imageLogo from "./resources/images/logo.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navigation />
          <div className="logo-container">
            <div className="logo">
              <div className="image-logo">
                <img src={imageLogo}></img>
              </div>
              <span className="heading-logo">NGen Presales</span>
              <span className="sub-heading-logo">
                Enabling wins and process efficiencies
              </span>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/business-development" element={<Business />} />
            <Route path="/proposal" element={<Proposal />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
