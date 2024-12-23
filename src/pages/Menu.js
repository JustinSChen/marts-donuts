import React, {useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { pdfjs, Document, Page } from 'react-pdf';

const donuts = [
  { id: 1, name: 'Glazed Donut', description: 'Classic glazed donut', price: 1.99, image: '/images/glazed.jpg' },
  { id: 2, name: 'Chocolate Donut', description: 'Rich chocolate donut', price: 2.49, image: '/images/chocolate.jpg' },
  // Add more donuts as needed
];

const Menu = () => {
  const handleOpenPdf = () => {
    const pdfUrl = "https://marts-donuts.s3.us-east-1.amazonaws.com/menu.pdf";
    window.open(pdfUrl, "_blank");
  };

  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };


  return (
    <div className="pdf">
<Document
        file="https://marts-donuts.s3.us-east-1.amazonaws.com/menu.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onClick={handleOpenPdf}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false} />
        ))}
      </Document>
    </div>
  );
};

export default Menu;
