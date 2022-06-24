import React from "react";
import img1 from "../../images/style_shuffle/1.jpg";
import img2 from "../../images/style_shuffle/2.jpg";
import img3 from "../../images/style_shuffle/3.jpg";
import img4 from "../../images/style_shuffle/4.jpg";
import img5 from "../../images/style_shuffle/5.jpg";
// import end from "../../images/style_shuffle/end_card.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./styleshuffle.css";

const images = [img1, img2, img3, img4, img5];

export default function StyleShuffle() {

    // const dislike =()=>{

    // }

    // const like =()=>{
        
    // }


  return (
    <div id="styleShuffle">
      <div className="container">
        <div className="row" style={{justifyContent:'center'}}>
          <div className="offset-lg-2 col-lg-4 col-12 left">
            <h2 className="header">Let's get to know each other</h2>
            <p className="content">
              By rating outfits, you will help us understand your one-of-a-kind
              style.
            </p>
          </div>
          <div className="col-lg-6 col-12 right">
            <div className="styleShuffle">
              <div className="card">
                <p className="name">STYLE SHUFFLE</p>
                <h5 className="header">Would you wear this?</h5>
                <div className="images">
                    {
                        images.map((image,index)=>{
                            return(
                                <img key={index} src={image} alt="" />
                            )
                        })
                    }
                </div>
                <div className="buttonHolder">
                  <button>
                    <FontAwesomeIcon className="icon" icon={faThumbsDown} />
                  </button>
                  <button>
                    <FontAwesomeIcon className="icon" icon={faThumbsUp} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
