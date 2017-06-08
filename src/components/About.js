import React from "react";



class About extends React.Component {

    render() {

const imgStyle = {
      position: "relative",
      width: "27%",
      float: "left",
      paddingRight: "2%",
      paddingBottom: "0"
    }

    const textStyle = {
      color: "black",
    }

        return (

            <div className="packageContainer" style={{ backgroundColor: "white", backgroundSize: "100%", height: "80vh", border: "none"}}>
                <div style={{padding: "2%", height: "auto" }}>
                <div className="container col-12" style={{ opacity: "0.7", paddingTop: "1%", position: "absolute", height: "75vh", backgroundColor: "white", border: "none" }}></div>
                <div className="col-12" style={{ zIndex: "2", position: "relative", padding: "2%" }}>
                    <h4 className="pkgsHeader" style={{ textAlign: "left", paddingLeft: "3%"}}>A LITTLE ABOUT ME... </h4>
                    <article className="col-10" style={{ height: "auto" }}>
                    <img className="aboutImg" src="./images/site/aboutImg.jpg" alt={"self"} style={imgStyle} />
                    <p style={textStyle}>Robert Servais is a lifestyle, landscape and wedding photographer based in Thunder Bay, Ontario, Canada. I photograph engagement and family sessions in addition to private functions and corporate events. Destination weddings and commercial bookings are available for travel within Canada and destinations worldwide on a limited basis. <br /><br /> I am now booking for Summer/Fall 2017 photo sessions and encourage you to get in touch ahead of time to ensure availability. Booking dates are on a first-come-first-serve basis. Furthermore, booking early also helps work with you and your wedding day schedule to make sure your photographs turn out perfect!  I can also provide recommendations for vendors that I’ve worked with in the past who do an exceptional job.<br /><br />
              Thank you for your interest in my work,<br/> Robert</p>
                    
                    </article>

             
                </div>
                </div>
            </div>
        )
    }
}

export default About;
