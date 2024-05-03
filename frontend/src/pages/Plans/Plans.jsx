import React, { useState } from "react";
import "./Plans.css";
import "./Card";
import Card from "./Card";

function Plans(props) {
  const [activeCard, setActiveCard] = useState(null);

  const handleTogglePopup = (cardTitle) => {
    setActiveCard(activeCard === cardTitle ? null : cardTitle);
  };

  return (
    <div>
      <div>
        <h1>
          All plans <span className="no-contract">no contract</span>. Choose yours!
        </h1>
      </div>
      <div className="Plans">
        <Card
          Title="SUPER OFF-PEAK"
          Schedule="Reduced Schedule"
          Price="39Rs per day"
          Features={[
            "Access to all cardio machines",
            "Access to the weightlifting area",
            "Restricted schedule: 10am to 3pm",
          ]}
          showPopup={activeCard === "SUPER OFF-PEAK"}
          togglePopup={() => handleTogglePopup("SUPER OFF-PEAK")}
        ></Card>
        <Card
          Title="GROUP CLASSES"
          Schedule="Limited Access to Group Classes"
          Price="49Rs per day"
          Features={[
            "Access to specific group classes",
            "Flexible schedule for group classes",
            "Specialized instructors for group classes",
          ]}
          showPopup={activeCard === "GROUP CLASSES"}
          togglePopup={() => handleTogglePopup("GROUP CLASSES")}
        ></Card>
        <Card
          Title="OFF-PEAK"
          Schedule="Extended Schedule"
          Price="59Rs per day"
          Features={[
            "Access to all gym areas",
            "Flexible schedule during the afternoon",
            "Group classes available",
          ]}
          showPopup={activeCard === "OFF-PEAK"}
          togglePopup={() => handleTogglePopup("OFF-PEAK")}
        ></Card>
        <Card
          Title="UNRESTRICTED"
          Schedule="Open Schedule"
          Price="79Rs per day"
          Features={[
            "Unrestricted access to all facilities",
            "Personalized workouts with instructors",
            "Exclusive member-only classes",
          ]}
          showPopup={activeCard === "UNRESTRICTED"}
          togglePopup={() => handleTogglePopup("UNRESTRICTED")}
        ></Card>
      </div>
    </div>
  );
}

export default Plans;
