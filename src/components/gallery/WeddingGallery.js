import React from "react";


class WeddingGallery extends React.Component {

  render() {

    return (
      <div className="pageContainer">
        <div className="galleryContainer container">
          <h1 style={{ textAlign: "center", padding: "2%" }}>WEDDINGS</h1>
          <div className="wrapper" style={{ backgroundColor: "white", color: "black" }}>
            <img className="Imgbox" src="./images/wedding/mountain-wedding-horizontal.jpg" alt="mountian wedding" />
            <img className="Imgbox" src="./images/wedding/BW-dress.jpg" alt="wedding dress" />
            <img className="Imgbox" src="./images/wedding/bridesmaids-horizontal.jpg" alt="bridesmaids" />
            <img className="Imgbox" src="./images/wedding/sparkler-2.jpg" alt="sparklers" />
            <img className="Imgbox" src="./images/wedding/winter-men.jpg" alt="winter wedding" />
            <img className="Imgbox" src="./images/wedding/wedding-smiles-horizontal.jpg" alt="wedding smiles" />
            <img className="Imgbox" src="./images/wedding/bouquet-shoes-horizontal.jpg" alt="flower bouquet" />
            <img className="Imgbox" src="./images/wedding/jamaica-wedding-vertical.jpg" alt="friends" />
          </div>
        </div>
      </div>

    )
  }
}

export default WeddingGallery;
