import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Call-to-Action (Get Involved)
const CtaWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #FFF8ED;
  color: #382F2F;
`;

const CtaTitle = styled.h2`
  color: #39683B;
  margin-bottom: 1em;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background-color: #A52A2A;
    margin: 0.5em 0 0;
  }
`;

function Cta() {
  const [status] = useState('');
  const { t } = useTranslation();

  return (
    <>
      <CtaWrapper>
        <CtaTitle>{t('components.cta.getInvolved.title','Get Involved')}</CtaTitle>
        <p>{t('components.cta.getInvolved.text1')}</p>

        <div style={{ marginLeft: '-40px' }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScKm4kH4V71QsWqOxnhF6l12LeWLHZFHqJ6S3bpytgrqv46Rw/viewform?embedded=true" 
            width="640" 
            height="614" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            title="Google Form for Getting Involved"
          >
            Loading…
          </iframe>
        </div>

        {status && <p style={{ marginTop: '1rem', color: '#39683B' }}>{status}</p>}
      </CtaWrapper>
    </>
  );
}

export default Cta;

