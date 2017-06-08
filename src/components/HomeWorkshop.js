import React from "react";
import { Link } from "react-router";


class HomeWorkshop extends React.Component {

  render() {

    return (

      <div className="pageContainer">
        <div className="container workshops" style={{ paddingBottom: "1%" }}>
          <h3 style={{ paddingTop: "2%" }}>CAMERA WORKSHOPS + EDITING TUTORIALS</h3>
          <p style={{ paddingBottom: "2%" }}>Get the best out of that expensive DLSR camera and learn to unlock all of its power <br />through a comprehensive outdoor workshop and editing tips and tutorials. </p>

          <div className="media col-11" >
            <div className="media-left" >
              <img src="./images/site/Photo101.jpeg" className="media-object" style={{ width: "300px", height: "280px" }} alt="camera" />
            </div>
            <div className="media-body" style={{ textAlign: "left", padding: "2%" }}>
              <h4 className="media-heading">DSLR camera 101</h4>
             
              <p className="classText" >Get the best out of that expensive DSLR camera and learn to unlock all of its power through a comprehensive outdoor workshop and editing tips and tutorials.</p>
              <p className="classText" ><i className="fa fa-caret-right fa-md" aria-hidden="true"></i>Buying your first DSLR</p>
              <p className="classText" ><i className="fa fa-caret-right fa-md" aria-hidden="true"></i>Nikon vs. Canon vs. Sony</p>
              <p className="classText"><i className="fa fa-caret-right fa-md" aria-hidden="true"></i>Lenses and body cases</p>
              <p className="classText" ><i className="fa fa-caret-right fa-md" aria-hidden="true"></i>Camera Set-up</p>
              
              </div>
              <button className="btn btn-basic"><Link to="/WorkshopsMain" style={{ color: "black" }}>READ MORE</Link></button>
          
          </div>

          <div className="media col-11">
            <div className="media-left">
              <img src="./images/site/birds.jpg" className="media-object " style={{ width: "300px", height: "280px" }} alt="birds" />
            </div>
            <div className="media-body" style={{ textAlign: "left", padding: "2%" }}>
              <h4 className="media-heading">Shooting for Beginners</h4>
              <p className="classText">{"First 'shot' at photography?  Not a problem.  I'll walk you throught the essentials to taking a great image"}</p>
              <p className="classText" >Learn lighting techniques, shutter speeds, manual focus, and more.  The workshop will take place in an outdoor setting</p>
              <button className="btn btn-basic"><Link to="/WorkshopsMain" style={{ color: "black" }}>READ MORE</Link></button>
            </div>
          </div>

          <div className="media col-11">
            <div className="media-left">
              <img src="./images/site/PhotoshopClass.jpeg" className="media-object" style={{ width: "300px", height: "280px" }} alt="man at computer" />
            </div>
            <div className="media-body" style={{ textAlign: "left", padding: "2%" }}>
              <h4 className="media-heading">Adobe Photoshop and Lightroom</h4>
              <p className="classText" >{"You've taken some great images.  What's next?  Edit and crop to bring out the best in them."}</p>
              <p className="classText"><i className="fa fa-caret-right fa-md" aria-hidden="true"></i>Photoshop Editing</p>
              <p className="classText"><i className="fa fa-caret-right fa-md" aria-hidden="true"></i>Resizing</p>
              <p className="classText"><i className="fa fa-caret-right fa-md" aria-hidden="true"></i>Lightroom Basics</p>
              <p className="classText" ><i className="fa fa-caret-right fa-md" aria-hidden="true"></i>Printing</p>
              <button className="btn btn-basic"><Link to="/WorkshopsMain" style={{ color: "black" }}>READ MORE</Link></button>
            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default HomeWorkshop;
