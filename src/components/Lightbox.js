import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';


const images = [

    "./images/wedding/BW-dress.jpg",
    "./images/wedding/JustMarried.jpg",
   "https://drscdn.500px.org/photo/57229932/m%3D900/988d260eb2f90247256daab74aee737d", 
    "./images/wedding/Mark.jpg",
    "./images/wedding/sparkler-2.jpg",
    "./images/engagement/the-ring-horizontal.jpg",
    "https://drscdn.500px.org/photo/162559811/m%3D900/cb0937d8a240160cfb2656ece24ab5eb",
    "https://drscdn.500px.org/photo/78498479/m%3D900/a14d8151f8c32f97e9c54eb5a7ebd99e"


];

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {

        const {
            photoIndex,
            isOpen,
        } = this.state;

        return (
            <div>
              <button className="btn btn-default" onClick={() => this.setState({ isOpen: true})} style={{marginTop: "2%"}}>
                WEDDING GALLERY
              </button>

                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }
            </div>
        );
    }
}
