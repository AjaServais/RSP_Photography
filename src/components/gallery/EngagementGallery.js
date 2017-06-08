import React from "react";

class EngagementGallery extends React.Component {

  render() {
    return (
      <div className="pageContainer">
        <div className="galleryContainer container">
          <h1 style={{ textAlign: "center", padding: "1%" }}>ENGAGEMENT</h1>
          <div className="wrapper">
            <img className="Imgbox" src="./images/engagement/camp-couple-horizontal.jpg" alt="happy couple" />
            <img className="Imgbox" src="./images/engagement/the-ring-horizontal.jpg" alt="wedding ring" />
            <img className="Imgbox" src="./images/engagement/canadadayengagement-vertical.jpg" alt="happy couple" />
            <img className="Imgbox" src="./images/engagement/CanadaDay.jpg" alt="couple in field" />
            <img className="Imgbox" src="./images/engagement/upClose-Vertical.jpg" alt="couple" />
            <img className="Imgbox" src="./images/engagement/farm-couple-horizontal.jpg" alt="couple at a farm" />
          </div>
        </div>
      </div>
    )
  }
}

export default EngagementGallery;
