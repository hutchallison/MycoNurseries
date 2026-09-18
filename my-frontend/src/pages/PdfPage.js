import React from 'react';
import { useParams } from 'react-router-dom';
import PdfPreview from '../components/PdfPreview.js';


const PdfPage = () => {
  const { pdfName } = useParams();

  return <PdfPreview pdf={pdfName} />;
};

export default PdfPage;