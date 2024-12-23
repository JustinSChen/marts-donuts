import React, {useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Home = () => {
  const handleOpenPdf = () => {
    const pdfUrl = "https://marts-donuts.s3.us-east-1.amazonaws.com/menu.pdf";
    window.open(pdfUrl, "_blank");
  };

  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="main">
      <div className="main-content">
      <div>
      <h1>FRESH DONUTS DAILY</h1>
      <p>Working through the night and into the morning, we prepare our donuts with passion and perfection each day.</p>
      <button className="view-menu" onClick={handleOpenPdf}>View Menu</button>
      </div>
      </div>

      <Document
        file="https://marts-donuts.s3.us-east-1.amazonaws.com/menu.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onClick={handleOpenPdf}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false} />
        ))}
      </Document>
      <div className="story">
        <div className="box">
          <h3>OUR STORY</h3>
          <p>We've been serving Escondido for over 20 years!</p>
          <a className="no-underline" href="/story">Learn more <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className={`arrow`}
                    /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
