import React, { useContext, useState } from "react";
import './AdditionalInfo.css'
import { AdditionalContext } from "../../ServiceCart/ServiceCart";

const AdditionalInfo = () => {
  const ServiceCart = useContext(AdditionalContext);
  const {full,instructor,schedule  } = ServiceCart;
  const [des, setDes] = useState(true);
  const [add, setAdd] = useState(false);
  const [rev, setRev] = useState(false);
  const Des = () => {
    setDes(true);
    setAdd(false);
    setRev(false);
  };
  const Add = () => {
    setAdd(true);
    setDes(false);
    setRev(false);
  };
  const Rev = () => {
    setRev(true);
    setDes(false);
    setAdd(false);
  };
  return (
    <div className="ServiceCart-description">
      <div className="description-button">
        <div>
          <button onClick={Des} className={des ? `active` : `inactive`}>
            description
          </button>
        </div>
        <div>
          <button onClick={Add} className={add ? `active` : `inactive`}>
            additional information
          </button>
        </div>
        <div>
          <button onClick={Rev} className={rev ? `active` : `inactive`}>
            reviews({})
          </button>
        </div>
      </div>
      {des && <p>{full}</p>}
      {add && (
        <div>
          <h1>additional information</h1>
          <div className="straight-line2"></div>
          <h4>
            Instructor : <span>{instructor}</span>
          </h4>
          <div className="straight-line2"></div>
          <h4>
            schedule : <span>{schedule}</span>
          </h4>
          <div className="straight-line2"></div>
        </div>
      )}
      {rev && (
        <div id="review">
          <h1>reviews</h1>
          <p>There is no review</p>
          {/* <h4>Be the first to review “{name}”</h4> */}
          <form action="">
            <p>Your name</p>
            <input type="text" name="name" id="name-box" />
            <p>Your review</p>
            <textarea type="text" name="review" id="review-box" />
            <button className="buynow">submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdditionalInfo;
