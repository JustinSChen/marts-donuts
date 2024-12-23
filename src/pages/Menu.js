import React, {useState, useEffect } from "react";
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

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
