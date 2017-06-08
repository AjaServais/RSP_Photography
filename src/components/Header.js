import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router";

class HeaderAlt extends Component {

    render() {

        return (
            <div>
                <div className="navContainer" >
                    <nav className="navbar navbar-default" style={{ backgroundColor: "white" }}>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar9">
                                    <span><i className="fa fa-bars fa-lg" aria-hidden="true"></i></span>
                                </button>
                            </div>
                            <div className="brand-left">
                                <Link to="/"><img className="navbar-brand col-3" style={{ paddingLeft: "1%", height: "auto" }} src="./images/site/logo.jpg" alt="logo" /></Link>
                            </div>
                            <div id="navbar9" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="active home"><Link to="/" style={{ backgroundColor: "white" }} > HOME</Link></li>
                                    <li className="dropdown">
                                        <li className="dropdown-toggle dropbtn" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{padding: "16px"}}>GALLERIES <span className="caret"></span>
                                        </li>
                                        <div className="dropdown-menu dropdown-content">
                                            <li ><Link to="/WeddingGallery"> WEDDINGS</Link></li>
                                            <li><Link to="/FamilyGallery"> FAMILY</Link></li>
                                            <li><Link to="/EngagementGallery"> ENGAGEMENT</Link></li>
                                            <li><Link to="/GastroGallery">GASTRO</Link></li>
                                            <li><Link to="/TravelGallery"> TRAVEL + LIFESTYLE</Link></li>
                                        </div>
                                    </li>
                                    <li><Link to="/WeddingPkg" > WEDDING PACKAGES </Link></li>
                                    <li><Link to="/WorkshopsMain">WORKSHOPS</Link></li>
                                    <li><a href="https://robert-servais-photography.myshopify.com/" target="_blank" rel="noopener noreferrer">BUY PRINTS</a></li>
                                    <li><Link to="/Contact"> CONTACT </Link></li>
                                    <li><Link to="/About"> ABOUT </Link></li>
                                </ul>
                            </div>

                        </div>

                    </nav>
                </div>

                {this.props.children}

                <footer style={{ textAlign: "center", backgroundColor: "white", height: "10%" }}>
                    <h5 id="footerHead" >ROBERT SERVAIS PHOTOGRAPHY</h5>
                    <p className="footerText" style={{paddingLeft:"1%", paddingRight: "1%"}}>Robert Servais has been a lifestyle, wedding, and adventure photographer based out of Thunder Bay, ON, Canada since 2010.  <br />   p: (807) 252-0185  e: <a href="mailto: ajaservais249@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "dimgrey" }}> robert@robertservais.com</a>
                    <a className="socialSelect" href="https://500px.com/robbieservais" target="_blank" rel="noopener noreferrer"><i className="fa fa-500px fa-lg" aria-hidden="true" style={{ padding: "1%", color: "grey" }}></i></a>
                    <a className="socialSelect" href="https://www.instagram.com/robert_servais_photo/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-lg" aria-hidden="true" style={{ padding: "1%", color: "grey" }}></i></a>
                    <a className="socialSelect" href="https://www.facebook.com/RobertServaisPhotography/about/?ref=page_internal" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-lg" aria-hidden="true" style={{ padding: "1%", color: "grey" }}></i></a>
                    </p>
                </footer>

            </div>

        );
    }
}

export default HeaderAlt;
