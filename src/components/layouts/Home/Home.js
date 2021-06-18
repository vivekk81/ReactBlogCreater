import React, {useState} from 'react';
import { Document, Page } from "react-pdf";

import vivekKumawatPdf from "./VivekKumawat.pdf";
import '../../../Styles.css';
const Home = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="all-page-container">
      <Document
        file={vivekKumawatPdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={800}/>
        ))}
      </Document>
    </div>
  );
}

export default Home;