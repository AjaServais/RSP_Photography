import React from "react";
import HomeBanner from "../components/images/site/HomeBanner.jpeg";


class Home extends React.Component {
  render() {


    return (
      <div>
        <div className="parallax col-12" style={{ backgroundImage: "url(" + HomeBanner + ")"}}>
          <div style={{paddingTop: "30%", color: "white" }}>
            <h4 className="bannerHeader animated fadeIn" >photography for life</h4>

          </div>
        </div>
      </div>

    );
  }
}

export default Home;
