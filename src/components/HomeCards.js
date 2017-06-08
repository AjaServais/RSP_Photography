import React from "react";
import { Link } from "react-router";

class HomeCards extends React.Component {
  render() {

    const articleStyle = {
      border: "1px solid ccc",
      boxShadow: "2px 2px 6px 0px rgba(0,0,0,0.3)",
      backgroundColor: "white",
      paddingBottom: "2%"
    }

    const styleButton = {
      background: "dimgrey",
      border: "0",
      color: "white",
      padding: "2%",
      width: "70%"
    }

    const text = {
      padding: "0 10px 10px"
    }

    return (
      <div className="pageContainer">
        <div className="container" style={{ backgroundColor: "gainsboro", width: "100%", paddingLeft: "5%" }}>
          <div style={{ paddingTop: "1%" }}>
            <h3> Professional Photography Services</h3>
            <p>The best moments are the ones captured! Build your personal memories or enhance <br />
              your brand through powerful imagery and story telling.</p>
          </div>
          <main className="grid">
            <article className="col-10" style={articleStyle}>
              <img src="./images/site/CameraInHand.jpeg" alt="camera" style={{ maxWidth: "100%" }} />
              <div style={text}>
                <h5 style={{ paddingTop: "2%" }}>Book a Photo Session</h5>
                <p>Capture every moment.</p>
                <button className="btn btn-default" style={styleButton}><Link to="/Contact" style={{ textDecoration: "none", color: "white" }}>
                  BOOK A SESSION </Link></button>
              </div>
            </article>

            <article className="col-10" style={articleStyle}>
              <img src="./images/wedding/BW-dress.jpg" alt="wedding dress" style={{ maxWidth: "100%" }} />
              <div style={text}>
                <h5 style={{ paddingTop: "2%" }}>Wedding Packages</h5>
                <p>A package for every need and budget.</p>
                <button className="btn btn-default" style={styleButton}><Link to="/WeddingPkg" style={{ textDecoration: "none", color: "white" }}> WEDDING PACKAGES </Link></button>
              </div>
            </article>

            <article className="col-10" style={articleStyle}>
              <img src="./images/site/contact-rsp.jpg" alt="filler" style={{ maxWidth: "100%" }} />
              <div style={text}>
                <h5 style={{ paddingTop: "2%" }}>Contact</h5>
                <p>Get started here.</p>
                <button className="btn btn-default" style={styleButton}><Link to="/Contact" style={{ textDecoration: "none", color: "white" }}>CONTACT </Link></button>
              </div>
            </article>
          </main>
        </div>
      </div>

    )
  }
}

export default HomeCards;
