import React from "react";

class HomeJumbotron extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron" style={{ backgroundColor: "dimgrey" }}>
          <div className="jumbotronText" style={{ color: "white" }}>
            <h3>Order Your Favourite Prints Online</h3>
            <p>Fill your empty walls or office with beautiful imagery from all around the world.<br />
              Now offering online ordering for small and large print formats.</p>
            <button className="btn btn-default"><a style={{ color: "black" }} href="https://robert-servais-photography.myshopify.com/" target="_blank" rel="noopener noreferrer">ORDER PRINTS HERE</a></button>
          </div>
        </div>
      </div>

    )
  }
}

export default HomeJumbotron;
