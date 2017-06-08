import React from "react";

class GastroGallery extends React.Component {

  render() {

    const style = {
      padding: "1%",
      fontSize: "1.6rem",
    }


    return (
      <div className="pageContainer">
        <div className="galleryContainer container">
          <h1 style={{ textAlign: "left", padding: "1%" }}>GASTRO</h1>
          <div className="wrapper" style={{ backgroundColor: "white", color: "black" }}>
            <img className="Imgbox" src="./images/gastro/gastro-spread.jpg" alt="food on display" />
            <p style={style}>gastro spread</p>
            <img className="Imgbox" src="./images/gastro/boqueria-market-rsp.jpg" alt="food market" />
            <p style={style}>boquiera market, spain</p>
            <img className="Imgbox" src="./images/gastro/pizza.jpg" alt="pizza" />
            <p style={style}>pizza anyone?</p>
            <img className="Imgbox" src="./images/gastro/tartar-horizontal.jpg" alt="tartar" />
            <p style={style}>tartar</p>
          </div>
        </div>
      </div>
    )
  }
}

export default GastroGallery;
