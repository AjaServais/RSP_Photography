import React from "react";

class Contact extends React.Component {

    render() {

        const iconStyle = {
            paddingRight: "2%",
            paddingBottom: "1%"

        }

        return (

            <div className="packageContainer" style={{ backgroundColor: "black", backgroundSize: "100%", height: "80vh", border: "none" }}>


                <div style={{ padding: "2%", height: "auto" }}>
                    <div className="container well col-10 col-lg-offset-1" style={{paddingTop: "1%", position: "absolute", height: "75vh", backgroundColor: "whitesmoke", border: "none" }}></div>
                    <div className="col-10 col-lg-offset-1" style={{ zIndex: "2", position: "relative", padding: "2%" }}>
                        <h3 className="pkgsHeader" style={{ textAlign: "center" }}>GET IN TOUCH!</h3>
                        <article className="col-10" style={{ height: "auto" }}>

                            <p className="contactInfo">
                                <span><i className="fa fa-phone fa-lg" aria-hidden="true" style={iconStyle}></i>(807) 252-0185 </span><br />
                                <span><i className="fa fa-envelope fa-lg" aria-hidden="true" style={iconStyle}></i><a style={{ color: "black" }} href="mailto: ajaservais249@gmail.com" target="_blank"
                                    rel="noopener noreferrer">robert@robertservais.com</a></span>
                                <br /><span><i className="fa fa-calendar fa-lg" aria-hidden="true" style={iconStyle}></i>Mon-Fri: 9AM-5PM & Sat: 11AM-5PM <br /><br /></span></p>
                            <p>For information on packages, pricing, and availability, please send me a brief message using the Contact icon
            below.  Please include the date of your wedding or preferred session day, and any other information you feel is
            necessary. If you are having trouble with the contact form, please email me directly. <br /><br />Now booking for Summer/Fall 2017 photo sessions and encourage you to get in touch ahead of time to ensure availability. Booking
            dates are on a first-come-first-serve basis.  Book early to ensure secure the dates you need and to allow time
            for consulation on your perfect pictures!.
            </p>

                        </article>

                    </div>
                </div>
            </div>
        );
    }

    valueUpdater(field) {
        return (value) => this.setState({ [field]: value });
    }
    toggleConnection() {
        this.setState(({ connected }) => ({ connected: !connected }));
    }

    renderAccount() {
        return this.state.connected

    }
}

export default Contact;
