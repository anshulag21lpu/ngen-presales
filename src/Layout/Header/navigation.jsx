import react from "react";
import {Link} from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/proposal">Proposal Management</Link>
          </li>
          <li>
            <Link to="/business-development">Business Development</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <span className="get-in-touch">Get In Touch</span>
      <span className="get-in-touch-details">
+91-9810845793 <br /> ngenpresales@gmail.com</span>
    </div>
  );
};

export default Navigation;