import React from "react";
import logo1 from "../../assets/1.svg";
import logo2 from "../../assets/2.svg";
import logo3 from "../../assets/3.svg";
import logo4 from "../../assets/4.svg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="part">
        <div className="logo">
          <img src={logo1} alt="Logo 1" />
        </div>
        <div className="text">
          <li>Dedicated Weight Machines</li>
          <p>
            Develop your strength with our state-of-the-art weight machines,
            designed specifically to optimize your weightlifting workout.
            Enjoy an exclusive and focused environment to achieve your goals.
          </p>
        </div>
      </div>
      <div className="part">
        <div className="logo">
          <img src={logo2} alt="Logo 2" />
        </div>
        <div className="text">
          <li>Functional Machines</li>
          <p>
            Experience the versatility of our functional machines, designed to
            offer dynamic and efficient workouts. Explore different movements
            to enhance your endurance and flexibility in an inspiring environment.
          </p>
        </div>
      </div>
      <div className="part">
        <div className="logo">
          <img src={logo3} alt="Logo 3" />
        </div>
        <div className="text">
          <li>Free Weights</li>
          <p>
            Unleash your body's true potential with our wide range of free
            weights. From dumbbells to Olympic bars, we offer the freedom to
            create your own customized workout, promoting muscle growth and definition.
          </p>
        </div>
      </div>
      <div className="part">
        <div className="logo">
          <img src={logo4} alt="Logo 4" />
        </div>
        <div className="text">
          <li>Functional Coaching</li>
          <p>
            Maximize your results with our personalized functional coaching.
            Our specialized trainers are here to guide, motivate, and adjust
            your training program, ensuring that each session is a step towards
            your goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
