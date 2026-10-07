import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const TeamContainer = styled.section`
  padding: 1em 2em;
  background-color: #FFF8ED;
  text-align: left;
  max-width: 66%;
  margin: 0 auto;
`;

const TeamTitle = styled.h2`
  text-align: center;
`;

const TeamHeading = styled.h3`
  margin-top: 1.5em;
  color: #39683B;
  padding-bottom: 0.3em;
`;

const TeamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
`;

const TeamCard = styled.div`
  border-radius: 10px;
  width: 300px;
  transition: transform 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: ${props => (props.open ? 10 : 1)};
`;

const TeamImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  filter: ${props => (props.open ? 'grayscale(0%)' : 'grayscale(100%)')};
  transition: filter 0.3s ease;
  &:hover {
    filter: grayscale(0%);
  }
`;

const TeamInfo = styled.div`
  padding: 15px;
  text-align: left;
  h3 {
    margin: -0.4em 0 0.2em 0; 
    color: #39683B;
    font-size: 1.1rem;
    display: flex;
  }
  h4 {
    margin: 0;
    font-size: 1rem;
    color: #A52A2A;
    font-weight: bold;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #382F2F;
  }
`;

const Pronoun = styled.span`
  font-size: 0.8rem;
  color: #666;
  margin-left: 0.5em;
`;

function TeamCardComponent({ image, alt, name, pronoun, position, description }) {
  const [open, setOpen] = useState(false);
  const handleClick = e => {
    e.stopPropagation();
    setOpen(prev => !prev);
  };
  return (
    <TeamCard onClick={handleClick} open={open}>
      <TeamImage src={image} alt={alt} open={open} />
      <TeamInfo>
        <h3>
          {name}
          {pronoun && <Pronoun>{pronoun}</Pronoun>}
        </h3>
        <h4>{position}</h4>
        {open && <p>{description}</p>}
      </TeamInfo>
    </TeamCard>
  );
}

function TeamPage() {
  const { t } = useTranslation();
  return (
    <TeamContainer id="team">
      <TeamTitle>{t('components.teamPage.title')}</TeamTitle>


      {/* Co-Founders */}
      <TeamHeading>{t('components.teamPage.coFounders')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/julia-picture.jpeg'}
          alt={t('Julia Wright')}
          name={t('Julia Wright')}
          pronoun={t('components.teamPage.juliaWright.pronoun')}
          position={t('components.teamPage.juliaWright.position')}
          description={t('components.teamPage.juliaWright.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/minh-picture2.jpg'}
          alt={t('Minh Le')}
          name={t('Minh Le')}
          pronoun={t('components.teamPage.minhLe.pronoun')}
          position={t('components.teamPage.minhLe.position')}
          description={t('components.teamPage.minhLe.description')}
        />
      </TeamRow>


      {/* Research Team */}
      <TeamHeading>{t('components.teamPage.research')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/siqi-picture.png'}
          alt={t('Siqi Liu')}
          name={t('Siqi Liu')}
          pronoun={t('components.teamPage.siqiLiu.pronoun')}
          position={t('components.teamPage.siqiLiu.position')}
          description={t('components.teamPage.siqiLiu.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/kalyna-picture.jpeg'}
          alt={t('Kalyna Levytsky')}
          name={t('Kalyna Levytsky')}
          pronoun={t('components.teamPage.kalynaLevytsky.pronoun')}
          position={t('components.teamPage.kalynaLevytsky.position')}
          description={t('components.teamPage.kalynaLevytsky.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/kaecy-picture.png'}
          alt={t('Kaecy Elmes')}
          name={t('Kaecy Elmes')}
          pronoun={t('components.teamPage.kaecyElmes.pronoun')}
          position={t('components.teamPage.kaecyElmes.position')}
          description={t('components.teamPage.kaecyElmes.description')}
        />
      </TeamRow>


      {/* Operations Team */}
      <TeamHeading>{t('components.teamPage.operations')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maria-picture.png'}
          alt={t('Maria E. Areizaga-García')}
          name={t('Maria E. Areizaga-García')}
          pronoun={t('components.teamPage.mariaAreizagaGarcia.pronoun')}
          position={t('components.teamPage.mariaAreizagaGarcia.position')}
          description={t('components.teamPage.mariaAreizagaGarcia.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/margarita-picture.jpeg'}
          alt="Margarita Gauto"
          name="Margarita Gauto"
          pronoun={t('components.teamPage.margaritaGauto.pronoun')}
          position={t('components.teamPage.margaritaGauto.position')}
          description={t('components.teamPage.margaritaGauto.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/amy-picture.png'}
          alt="Amy Guan"
          name="Amy Guan"
          pronoun={t('components.teamPage.amyGuan.pronoun')}
          position={t('components.teamPage.amyGuan.position')}
          description={t('components.teamPage.amyGuan.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/sebastian-picture.jpg'}
          alt="Sebastian Kent"
          name="Sebastian Kent"
          pronoun={t('components.teamPage.sebastianKent.pronoun')}
          position={t('components.teamPage.sebastianKent.position')}
          description={t('components.teamPage.sebastianKent.description')}
        />
      </TeamRow>


      {/* Outreach Team */}
      <TeamHeading>{t('components.teamPage.outreach')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maya-picture.jpeg'}
          alt="Maya Farres"
          name="Maya Farres"
          pronoun={t('components.teamPage.mayaFarres.pronoun')}
          position={t('components.teamPage.mayaFarres.position')}
          description={t('components.teamPage.mayaFarres.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/kiran-picture.jpg'}
          alt="Kiran Fellenz"
          name="Kiran Fellenz"
          pronoun={t('components.teamPage.kiranFellenz.pronoun')}
          position={t('components.teamPage.kiranFellenz.position')}
          description={t('components.teamPage.kiranFellenz.description')}
        />
      </TeamRow>


      {/* Communications & Marketing Team */}
      <TeamHeading>{t('components.teamPage.communicationsAndMarketing')}</TeamHeading>
      <TeamRow>
        
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maxine-picture.png'}
          alt="Maxine Bisera"
          name="Maxine Bisera"
          pronoun={t('components.teamPage.maxineBisera.pronoun')}
          position={t('components.teamPage.maxineBisera.position')}
          description={t('components.teamPage.maxineBisera.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/naya-picture.png'}
          alt="Naya Tawil"
          name="Naya Tawil"
          pronoun={t('components.teamPage.nayaTawil.pronoun')}
          position={t('components.teamPage.nayaTawil.position')}
          description={t('components.teamPage.nayaTawil.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/anonymous.jpg'}
          alt="William Jamieson"
          name="William Jamieson"
          pronoun={t('components.teamPage.williamJamieson.pronoun')}
          position={t('components.teamPage.williamJamieson.position')}
          description={t('components.teamPage.williamJamieson.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/anonymous.jpg'}
          alt="Allison Hutchings"
          name="Allison Hutchings"
          pronoun={t('components.teamPage.allisonHutchings.pronoun')}
          position={t('components.teamPage.allisonHutchings.position')}
          description={t('components.teamPage.allisonHutchings.description')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/fah-picture.png'}
          alt="Fah Michaud"
          name="Fah Michaud"
          pronoun={t('components.teamPage.fahMichaud.pronoun')}
          position={t('components.teamPage.fahMichaud.position')}
          description={t('components.teamPage.fahMichaud.description')}
        />
      </TeamRow>

      {/* Past Directors */}
      <TeamHeading>{t('components.teamPage.pastDirectors')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/nico-picture.jpg'}
          alt={t('Nico Vilkoff')}
          name={t('Nico Vilkoff')}
          pronoun={t('components.teamPage.nicoVilkoff.pronoun')}
          position={t('components.teamPage.nicoVilkoff.position')}
          description={t('components.teamPage.nicoVilkoff.description')}
        />
      </TeamRow>
    </TeamContainer>
  );
}


export default TeamPage;