import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ResourceCard from '../components/ResourceCard';

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


const resources = [   //Add resource by creating another resource item
  {
    title: "Vermicomposting Info-Pack",
    description: "Our Vermicomposting Info-Pack provides all of the necessary steps to make your own vermicomposting bin! It also includes a vermicomposting quiz and glossary for classroom use. The pack can be used to suppliment our free Vermicomposting 101 Youtube tutorial.",
    date: "September 2026",
    preview: "Vermicomposting Info-Pack.jpeg" //Convert pdf to jpeg to get preview
  },


]


function EdWorkshops() {
  const { t } = useTranslation();

  return (
    <Container>
      <PageTitle>{t('edWorkshops.title', 'Educational Resources')}</PageTitle>
      <p>{t('edWorkshops.vermicompostText1', 'Here you can find all our educational resources!')}</p>
      
      {resources.map((resource) => (
        <ResourceCard
          key={resource.title}
          resource={resource}
        />
      ))}
    </Container>
  );
}

export default EdWorkshops;