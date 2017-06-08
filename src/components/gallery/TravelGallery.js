import React from "react";

class TravelGallery extends React.Component {

  render() {

    const captionStyle = {
      fontSize: "1.6rem",
    }

    return (
      <div className="pageContainer">
        <div className="galleryContainer container">
          <h1 style={{ textAlign: "center", padding: "2%" }}>TRAVEL + LIFESTYLE</h1>
          <div className="wrapper">
            <img className="Imgbox" src="./images/travel/negril-sunset.jpg" alt="sunset" />
            <p style={captionStyle}>sunset in paradise</p>
            <img className="Imgbox" src="./images/travel/south-oregon-rsp1.jpg" alt="coastline" />
            <p style={captionStyle}>south oregon coast</p>
            <img className="Imgbox" src="./images/travel/Yonge-Wellesley-vertical.jpg" alt="toronto" style={{ width: "60%", height: "auto" }} />
            <p style={captionStyle}>toronto from above</p>
            <img className="Imgbox" src="./images/travel/montegobay-streets.jpg" alt="jamaica streets" />
            <p style={captionStyle}>montego bay, jamaica</p>
            <img className="Imgbox" src="./images/travel/TTCMan.jpg" alt="TTC man" style={{ width: "60%", height: "auto" }} />
            <p style={captionStyle}>toronto, on</p>
            <img className="Imgbox" src="../images/travel/mt-hood-horizontal.jpg" alt="mount hood" />
            <p style={captionStyle}>mt hood, oregon</p>
          </div>
        </div>
      </div>
    )
  }
}

export default TravelGallery;
