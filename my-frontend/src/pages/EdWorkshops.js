import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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

const WorkshopSection = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: flex-start;
  gap: 2em;

  &:nth-of-type(2) {
    flex-direction: row;
  }

  &:nth-of-type(3) {
    flex-direction: row-reverse;
  }
`;

const WorkshopContent = styled.div`
  flex: 1;
`;

const WorkshopImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  flex-shrink: 0;
`;

const ContactText = styled.p`
  margin-top: 2em;
  color: #555;
  font-weight: bold;
  text-align: center;
`;

function EdWorkshops() {
  const { t } = useTranslation();

  return (
    <Container>
      <PageTitle>{t('edWorkshops.title', 'Educational Workshops')}</PageTitle>
      
      <WorkshopSection>
        <WorkshopImage src="/assets/edResources/edWorkshops/vermicompost.png" alt="Vermicompost" />
        <WorkshopContent>
          <h3>{t('edWorkshops.vermicompostTitle', 'Learn to Vermicompost')}</h3>
          <p>{t('edWorkshops.vermicompostText1', 'Curious about worms and want to get your hands dirty? Join MycoNurseries for Vermicomposting 101, with the support of the UniC Network.')}</p>
          <p>{t('edWorkshops.vermicompostText2', 'This workshop is hosted both in person or online. In person participants will help collectively make a vermicompost bin and can walk away with their own free starter kit. For those online, a list of materials will be provided ahead of time so you can make your own compost alongside us.')}</p>
          <p>{t('edWorkshops.vermicompostText3', 'Keep an eye out for our next workshop in early 2026!')}</p>
        </WorkshopContent>
      </WorkshopSection>

      <WorkshopSection>
        <WorkshopContent>
          <h3>{t('edWorkshops.fungiFrenzyTitle', 'Play Fungi Frenzy!')}</h3>
          <p>{t('edWorkshops.fungiFrenzyText1', 'How well can you build a healthy fungi ecosystem? Come find out by playing our new card game, Fungi Frenzy! 🍄')}</p>
          <p>{t('edWorkshops.fungiFrenzyText2', 'Fungi Frenzy explores the connection between fungi, the environment, and climate action.')}</p>
          <p>{t('edWorkshops.fungiFrenzyText3', 'Our first iteration of this workshop was presented in collaboration with the McGill Education Gardens in September 2025. More to come in 2026.')}</p>
        </WorkshopContent>
        <WorkshopImage src="/assets/edResources/edWorkshops/fungi_frenzy.png" alt="Fungi_Frenzy" />
      </WorkshopSection>

      <ContactText>{t('edWorkshops.contactText', 'Interested in either of these workshops for your community? Contact us via myconurseries[at]gmail[dot]com for more information!')}</ContactText>
    </Container>
  );
}

export default EdWorkshops;