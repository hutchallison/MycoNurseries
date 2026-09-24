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





function EdWorkshops() {
  const { t } = useTranslation();

  const resources = [   //Add resource by creating another resource item
    {
      title: t('components.edResources.vermicompostingTitle'),
      description: 'components.edResources.vermicompostingDescr',
      date: t('components.edResources.vermicompostingDate'),
      preview: "Vermicomposting Info-Pack.jpeg", //Convert pdf to jpeg to get preview
      titleEN: "Vermicomposting Info-Pack", //Make this more elegant in the future
      titleFR: "Vermicompostage trousse pédagogique",
      hyperlink: "https://www.youtube.com/watch?v=2gtF9X39jZk"
    },
  ]

  return (
    <Container>
      <PageTitle>{t('components.edResources.title', 'Educational Resources')}</PageTitle>
      <p>{t('components.edResources.subtitle', 'Here you can find all our educational resources!')}</p>
      
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