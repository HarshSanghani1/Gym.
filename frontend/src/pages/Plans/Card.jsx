import React, { useState } from "react";
import "./Card.css";
/*import { useNavigate } from "react-router-dom";*/

function Card({
  Title,
  Schedule,
  Price,
  Features,
  showPopup,
  togglePopup,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!showPopup) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  /*
  const navigate = useNavigate();

  
  const handleButtonClick = () => {
    navigate("/register");
  };*/

  return (
    <div
      className={`Card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="Title">
        <h1 className="Title">{Title}</h1>
        <h2 className="Schedule">{Schedule}</h2>
      </div>
      <div className="Price">
        <span className="Price">{Price}</span>
        <button onClick={togglePopup}>Select</button>
      </div>
      <div className="extra">
        <div>
          <span onClick={togglePopup}> Click for more information</span>
          {showPopup && (
            <div className="popup">
              {Features.map((feature, index) => (
                <p key={index}>• {feature}</p>
              ))}
              <button onClick={togglePopup}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
