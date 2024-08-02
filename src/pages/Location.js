import React from "react";
import '../styles/Location.scss';

const Location = () => {
  return (
    <div class="container">
      <div class="left">
        <div class="location">
            <h2>LOCATION</h2>
            <p>150 W El Norte Pkwy, Escondido, CA 92026</p>
            <p>+1 (760) 741-0717</p>
            <p>martsdonuts@gmail.com</p>
            <button>Get Directions &#x203A;</button>
        </div>
        <h2>HOURS</h2>
        <ul>
            <li><span className="day">Sunday</span> <span className="time">4:00 AM - 5:00 PM</span></li>
            <li><span className="day">Monday</span> <span className="time">4:00 AM - 5:00 PM</span></li>
            <li><span className="day">Tuesday</span> <span className="time">4:00 AM - 5:00 PM</span></li>
            <li><span className="day">Wednesday</span> <span className="time">4:00 AM - 5:00 PM</span></li>
            <li><span className="day">Thursday</span> <span className="time">4:00 AM - 5:00 PM</span></li>
            <li><span className="day">Friday</span> <span className="time">4:00 AM - 5:00 PM</span></li>
            <li><span className="day">Saturday</span> <span className="time">4:00 AM - 5:00 PM</span></li>    
        </ul>
        <p>
          *Store hours are subject to change seasonally, on holidays, and
          special events.
        </p>
      </div>
      <div class="right">
          <iframe
            title="title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.8385040476296!2d-117.09342912276684!3d33.139607073514505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf4afdebaf5ed%3A0x818bdb17aec3a1d3!2s150%20W%20El%20Norte%20Pkwy%2C%20Escondido%2C%20CA%2092026!5e0!3m2!1sen!2sus!4v1722636660401!5m2!1sen!2sus"
            width="548"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </div>
  );
};

export default Location;
