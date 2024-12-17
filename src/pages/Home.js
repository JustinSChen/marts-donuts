import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div class="main">
      <div class="main-content">
      <div>
      <h1>FRESH DONUTS DAILY</h1>
      <p>Working through the night and into the morning, we prepare our donuts with passion and perfection each day.</p>
      <button>View Menu</button>
      </div>
      </div>
      <div class="pdf">
        <p>PDF MENU</p>
      </div>
      <div class="story">
        <div class="box">
          <h3>OUR STORY</h3>
          <p>We've been serving Escondido for over 20 years!</p>
          <a>Learn more <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className={`arrow`}
                    /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
