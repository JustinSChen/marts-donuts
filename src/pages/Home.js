import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const handleOpenPdf = () => {
    // Replace this with your PDF URL or relative path
    const pdfUrl = "https://marts-donuts.s3.us-east-1.amazonaws.com/menu.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div class="main">
      <div class="main-content">
      <div>
      <h1>FRESH DONUTS DAILY</h1>
      <p>Working through the night and into the morning, we prepare our donuts with passion and perfection each day.</p>
      <button class="view-menu" onClick={handleOpenPdf}>View Menu</button>
      </div>
      </div>
      <div class="pdf">
        <iframe
          src="https://marts-donuts.s3.us-east-1.amazonaws.com/menu.pdf"
          width="100%"
          height="100%"
          title="PDF Viewer"
        ></iframe>
      </div>
      <div class="story">
        <div class="box">
          <h3>OUR STORY</h3>
          <p>We've been serving Escondido for over 20 years!</p>
          <a href="/story">Learn more <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className={`arrow`}
                    /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
