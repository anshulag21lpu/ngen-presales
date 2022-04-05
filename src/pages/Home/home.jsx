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
            DELIVERY ALIGNED WITH APMP AND SHIPLEY PROCESSES. EXPERIENCED TEAM
          </p>
          <p>
            ACROSS FEDERAL, STATE, LOCAL AND COMMERCIAL PURSUITS. END TO END
            PROPOSAL MANAGEMENT WITH COVERAGE ACROSS ENTIRE BID LIFE CYCLE.
          </p>
        </p>
      </div>
      <div className="section image">
        <img src={heroImage2}></img>
        <div className="image-text">
          <p className="heading">Our Offerings</p>
          <p className="sub-heading">PARTNERING AS AN EXTENDED SUPPORT TEAM</p>
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
