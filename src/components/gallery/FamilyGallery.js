import React from "react";

class FamilyGallery extends React.Component {

  render() {
    return (

      <div className="pageContainer">
        <div className="galleryContainer container">
          <h1 style={{ textAlign: "left", padding: "1%" }}>FRIENDS + FAMILY</h1>
          <div className="wrapper" style={{ backgroundColor: "white", color: "black" }}>
            <img className="Imgbox" src="./images/family/audriana-horizontal.jpg" alt="young girl" />
            <img className="Imgbox" src="./images/family/baby.jpg" alt="baby" />
            <img className="Imgbox" src="./images/family/dog.jpg" alt="dog" />
            <img className="Imgbox" src="./images/family/eskimoREG.jpg" alt="girl in parka" />
            <img className="Imgbox" src="./images/family/Oscar_bowl.jpg" alt="baby" />
            <img className="Imgbox" src="./images/family/Pam1.jpg" alt="mom and baby" />
            <img className="Imgbox" src="./images/family/girls2.jpg" alt="young girls" />
            <img className="Imgbox" src="./images/family/bestaaron-vertical.jpg" alt="young boy" />
          </div>
        </div>
      </div>

    )
  }
}

export default FamilyGallery;
