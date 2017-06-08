import React from "react";
import BouquetShoesHorizontal from "../components/images/site/bouquet-shoes-horizontal.jpg";
import Lightbox from "../components/Lightbox";

class WeddingPkg extends React.Component {

    render() {
        return (

            <div className="packageContainer" style={{ backgroundImage: "url(" + BouquetShoesHorizontal + ")", backgroundSize: "100%", height: "80vh", backgroundRepeat: "no-repeat" }}>
                
                <div style={{padding: "2%", height: "auto" }}>
                <div className="container well col-11" style={{ opacity: "0.7", paddingTop: "1%", position: "absolute", height: "75vh" }}></div>
                <div className="col-12" style={{ zIndex: "2", position: "relative", padding: "2%" }}>
                    <h3 className="pkgsHeader" style={{ textAlign: "center"}}>WEDDING PACKAGES</h3>
                    <article className="col-11 weddingPkgArticle" style={{ height: "auto" }}>
                    <p>Book your fall wedding before it’s too late! <br /><br />Have questions about choosing the right photographer for your wedding? Running out of time?  There are many things to consider when trying to decide on who you should invest in for your wedding day photos, beyond the obvious interest you may have in a particular photographer. <br /> In my personal opinion, likability trumps any other characteristic you should be considering when choosing who to hire. Quality and experience need to be worked into the equation, but there’s nothing like a bland 55 year old man making you jump in the air with your wedding party to capture the mood. Instead, when you have good chemistry with your photographer, the photos come about more natural because of the candid atmosphere that stems from good ol camaraderie. You should feel comfortable having a beer with your photographer and stay relaxed the whole day. Some food for thought on your wedding day.
                    </p>
                    <a href="https://robertservaiscom.files.wordpress.com/2017/05/2017-18-wedding-packages-rsp.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "darkblue"}}>CLICK HERE TO VIEW 2018 WEDDING PACKAGES</a>
                    </article>

             <Lightbox />
                </div>
                </div>
            </div>
        )
    }
}

export default WeddingPkg;
