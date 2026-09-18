import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Container = styled.section`
  padding: 1em 2em;
  max-width: 70%;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  text-align: left;
`;

const PageTitle = styled.h2`
  text-align: center;
`;

const ContactText = styled.p`
  margin-top: 2em;
  color: #555;
  font-weight: bold;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #9fb9ee;
  text-decoration: underline;
`

function EdWorkshops() {
  const { t } = useTranslation();

  return (
    <Container>
      <PageTitle>{t('edWorkshops.title', 'Educational Resources')}</PageTitle>
      <p>{t('edWorkshops.vermicompostText1', 'Here you can find all our educational resources!')}</p>
      
      <StyledLink
        to="Vermicomposting Info-Pack"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vermicomposting Info-Pack
      </StyledLink>
    </Container>
  );
}

export default EdWorkshops;