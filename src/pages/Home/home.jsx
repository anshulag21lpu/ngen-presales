import react from "react";
import "./home.scss";

import heroImage1 from "../../resources/images/11062b_569d42f6215f4a86a9b15e094153ef07_mv2.jpg";
import heroImage2 from "../../resources/images/4f8f5a805e504f0c95afe05b01d26d77.jpg";

const Home = () => (
  <div>
    <div className="home-container">
      <div className="section image">
        <img src={heroImage1}></img>
      </div>
      <div className="section content">
        <p className="heading">Center of Proposal Excellence (COPE)</p>
        <p className="sub-heading">
          <p>
            Fleet of resources with decades of experience in pursuit management.
          </p>
          <p>
            Delivery aligned with APMP and shipley processes.
          </p>
          <p>
            Experienced team across federal, state, local and commercial pursuits. End to end
            Proposal management with coverage across entire bid life cycle.
          </p>
        </p>
      </div>
      <div className="section image">
        <img src={heroImage2}></img>
        <div className="image-text">
          <p className="heading">Our Offerings</p>
          <p className="sub-heading">Partnering As An Extended Support Team</p>
          <p className="sub-heading-descr">
            Cost of a lost bid is much more than missed revenue - time spent by
            C-level executives, Good references used many a times and so on. Let
            us help maximizing your win rate !
          </p>
        </div>{" "}
      </div>
    </div>
  </div>
);

export default Home;
