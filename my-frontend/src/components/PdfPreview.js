import React from 'react';

function PdfPreview({ pdf }) {
  return (
    <iframe
      src={`${process.env.PUBLIC_URL}/assets/edResources/${pdf}.pdf`}
      title= {pdf}
      width="100%"
      height="1000px"
      style={{ border: "none" }}
    />
  );
};

export default PdfPreview;