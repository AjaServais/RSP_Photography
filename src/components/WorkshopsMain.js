import React from "react";
import ContactBackground from "./images/site/backgroundCover.jpeg"


class WorkshopsMain extends React.Component {

  render() {


    const styleContainer = {
      paddingLeft: "5%",
      paddingRight: "5%",
      marginTop: "1%",
      paddingBottom: "1%"
    }

    return (
      <div style={{ backgroundImage: "url(" + ContactBackground + ")", backgroundSize: "100%" }}>
        <div className="contact-background" >

          <div style={{ color: "white", textAlign: "left", paddingLeft: "2%", paddingTop: "1%" }}>
            <h3>WORKSHOPS</h3><span>
              <p>Learn to use that DSLR to its full potential.</p></span>
          </div>

          <div style={styleContainer}>
            <div className="well col-11" style={{ backgroundColor: "white", opacity: "0.9" }}><h5>DSLR CAMERA 101</h5>
              <p>Get the best out of that expensive DSLR camera and learn to unlock all of its power through a
comprehensive outdoor workshop and editing tips and tutorials.  Bring your own camera and come prepared to take some impressive shots. <br /><small>**Workshops are by request and based on availability.</small></p>


              <button className="btn btn-default" style={{ backgroundColor: "grey" }}><a href="https://robert-servais-photography.myshopify.com/apps/book-an-appointment/appointments/new" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>REQUEST </a></button>
            </div>

            <div className="well col-11" style={{ backgroundColor: "white", opacity: "0.9" }}><h5>SHOOTING FOR BEGINNERS</h5>
              <p>We go to an outdoor setting to learn about lighting, angles, zoom, and more. <br /><small>**Workshops are by request and based on availability.</small></p>

              <button className="btn btn-default" style={{ backgroundColor: "grey" }}><a href="https://robert-servais-photography.myshopify.com/apps/book-an-appointment/appointments/new" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>REQUEST</a></button>
            </div>


            <div className="well col-11" style={{ backgroundColor: "white", opacity: "0.9" }}><h5>ADOBE PHOTOSHOP + LIGHTROOM</h5>
              <p>Learn how to get started using this popular and powerful photo editing software.<br /><small>**Workshops are by request and based on availability.</small></p>

              <button className="btn btn-default" style={{ backgroundColor: "grey" }}><a href="https://robert-servais-photography.myshopify.com/apps/book-an-appointment/appointments/new" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>REQUEST</a></button>
            </div>
          </div>



        </div>
      </div>
    )
  }
}

export default WorkshopsMain;
