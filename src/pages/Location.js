import React from "react";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="location-container">
      <div className="right">
          <iframe
            title="title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.8385040476296!2d-117.09342912276684!3d33.139607073514505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf4afdebaf5ed%3A0x818bdb17aec3a1d3!2s150%20W%20El%20Norte%20Pkwy%2C%20Escondido%2C%20CA%2092026!5e0!3m2!1sen!2sus!4v1722636660401!5m2!1sen!2sus"
            width="592"
            height="483"
            style={{ border: "1px solid #C8C8C8", "border-radius": "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      <div className="left">
        <div className="location">
            <h2>LOCATION</h2>
            <p className="address">150 W El Norte Pkwy, Escondido, CA 92026</p>
            <Link className="directions" to="/contact">Get directions &#x203A;</Link>
        </div>
        <div className="hours">
          <h2>HOURS</h2>
          <ul>
              <li><span className="day">EVERY DAY, 4:00AM - 5:00PM</span></li>  
          </ul>
          <p className="disclaimer">
            *Store hours are subject to change seasonally, on holidays, and
            special events.
          </p>
        </div>
        <div className="contact">
          <h2>CONTACT</h2>
          <p>+1 (760) 741-0717</p>
          <p>MARTSDONUTS@GMAIL.COM</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
