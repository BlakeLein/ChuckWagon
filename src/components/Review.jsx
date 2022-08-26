import React from "react";

export default function Review(props) {
  const addRating = (stars) => {
    switch (stars) {
      case 1:
        return (
          <img
            src={require("../images/star.png")}
            width="20px"
            height="20px"
            alt="star"
          />
        );
      case 2:
        return (
          <>
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
          </>
        );
      case 3:
        return (
          <>
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
          </>
        );
      case 4:
        return (
          <>
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
          </>
        );
      case 5:
        return (
          <>
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
            <img
              src={require("../images/star.png")}
              width="20px"
              height="20px"
              alt="star"
            />
          </>
        );

      default:
        break;
    }
  };
  return (
    <div className="review-card">
      <div className="test">
        <h4>{props.review.name}</h4>
        <p>{props.review.message}</p>
        <div>{addRating(props.review.rating)}</div>
      </div>
    </div>
  );
}
