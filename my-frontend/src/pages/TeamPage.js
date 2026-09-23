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
      <TeamTitle>{t('Our Team')}</TeamTitle>


      {/* Co-Founders */}
      <TeamHeading>{t('Co-Founders')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/julia-picture.jpeg'}
          alt={t('Julia Wright')}
          name={t('Julia Wright')}
          pronoun={t('(they/them)')}
          position={t('Co-Founder')}
          description={t('Julia studies chemistry and mathematics at McGill University and enjoys promoting all forms of sustainability. When they’re not growing mushrooms, you can find them hiking, knitting, and hanging out with friends and family.')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/minh-picture2.jpg'}
          alt={t('Minh Le')}
          name={t('Minh Le')}
          pronoun=""
          position={t('Co-Founder')}
          description={t('Minh studies pharmacology and leads research into societal sustainability. Outside the lab, you can find them petting their cats, bopping to their latest music craze, or reading.')}
        />
      </TeamRow>


      {/* Research Team */}
      <TeamHeading>{t('Research')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/siqi-picture.png'}
          alt={t('Siqi Liu')}
          name={t('Siqi Liu')}
          pronoun={t('(she/her)')}
          position={t('Mushroom Care Coordinator')}
          description={t('Siqi is a first year student at McGill with plans to major in immunology & microbiology! She loves exploring nature by traveling around, and she is interested in the development of organisms, which is why she joined MycoNurseries (would like to see the growth of fungi!). You can find her playing tennis at McGill outdoor tennis courts during the summer🎾 :D ')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/kalyna-picture.jpeg'}
          alt={t('Kalyna Levytsky')}
          name={t('Kalyna Levytsky')}
          pronoun={t('(any/tous)')}
          position={t('Mushroom Care Coordinator')}
          description={t('Kalyna is a student at McGill University, majoring in chemistry. They love music and the outdoors. Their free time is usually spent in rehearsal or on the trails, which is where their interest in fungi started!')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/kaecy-picture.png'}
          alt={t('Kaecy Elmes')}
          name={t('Kaecy Elmes')}
          pronoun={t('(she/her)')}
          position={t('Vermicomposting Coordinator')}
          description={t('Kaecy is currently a fourth year student at McGill University in the IHI program, with the intention of going to medical school afterwards. In her free time, she likes to read, bake, and spend time with friends.')}
        />
      </TeamRow>


      {/* Operations Team */}
      <TeamHeading>{t('Operations')}</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maria-picture.png'}
          alt={t('Maria E. Areizaga-García')}
          name={t('Maria E. Areizaga-García')}
          pronoun={t('(she/her)')}
          position={t('Grow Session Coordinator')}
          description={t('')}
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/margarita-picture.jpeg'}
          alt="Margarita Gauto"
          name="Margarita Gauto"
          pronoun="(she/her)"
          position="Grow Session Coordinator"
          description="Margarita majors in Environment at McGill and hopes to pursue a concentration in Renewable Resource Management. Her interest in nature started since she was little, when she’d often go on road trips to the Paraguayan jungle with her family. In her free time, she loves listening to music, watching movies, and playing volleyball!"
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/amy-picture.png'}
          alt="Amy Guan"
          name="Amy Guan"
          pronoun="(she/her)"
          position="Grow Session Coordinator"
          description="Amy is currently a U3 student in Microbiology and Immunology at McGill University. She likes chilling at home with some tea and enjoys growing stuff, thus helping out with the vegetable patch in her backyard. Now she’s learning how to grow mushrooms."
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/anonymous.jpg'}
          alt="Piper Jacopille"
          name="Piper Jacopille"
          pronoun=""
          position="Grow Session Coordinator"
          description=""
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/sebastian-picture.jpg'}
          alt="Sebastian Kent"
          name="Sebastian Kent"
          pronoun="(he/him)"
          position="Grow Session Coordinator"
          description="Sebastian is a U3 student of Microbiology and Immunology at McGill University. He has cultivated mushrooms for over 8 years and loves experimenting with substrates, techniques and different cultures. Other than exploring fungi, Sebastian enjoys playing board games with friends and fermenting."
        />
      </TeamRow>


      {/* Outreach Team */}
      <TeamHeading>Outreach</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maya-picture.jpeg'}
          alt="Maya Farres"
          name="Maya Farres"
          pronoun="(she/her)"
          position="Director of Outreach"
          description="Maya is a bachelors student at McGill university majoring in elementary education. In her free time, she loves to write, hike, and make mug cakes!"
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/kiran-picture.jpg'}
          alt="Kiran Fellenz"
          name="Kiran Fellenz"
          pronoun="(they/them)"
          position="Events Lead"
          description="Kiran is a McGill student in Urban Studies and International Development. Outside of class, they can be found drawing, exploring Montreal, and reading in their favorite cafes. They're also known for their extensive collection of mushroom-themed clothing."
        />
      </TeamRow>


      {/* Communications & Marketing Team */}
      <TeamHeading>Communications & Marketing</TeamHeading>
      <TeamRow>
        
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/maxine-picture.png'}
          alt="Maxine Bisera"
          name="Maxine Bisera"
          pronoun=""
          position="Social Media Coordinator"
          description="Maxine is a student at McGill University, with majors in Biology and Urban Studies. She is interested in the effects of urbanization on longstanding ecosystems, and how we can better blend development with nature— including urban farming practices like MycoNurseries!"
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/naya-picture.png'}
          alt="Naya Tawil"
          name="Naya Tawil"
          pronoun="(she/her)"
          position="Graphic Designer"
          description="Naya enjoys learning about fungi and designing. She is set to pursue a Master’s in Architecture with a specialization in sustainability and climate resilience. "
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/zengyu-picture.jpg'}
          alt="Zengyu"
          name="Zengyu"
          pronoun=""
          position="Website Developer"
          description="Zengyu is currently studying computer science and physics at McGill University. Love reading, watching, discussing about scifi, enjoy to cook new dishes for challenge"
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/anonymous.jpg'}
          alt="Antoine Larocque"
          name="Antoine Larocque"
          pronoun=""
          position="Graphic Designer"
          description=""
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/fah-picture.png'}
          alt="Fah Michaud"
          name="Fah Michaud"
          pronoun="(she/her)"
          position="Blogwriter"
          description="Fah really loves cats. She is currently pursuing an honours degree in Earth and Planetary Sciences at McGill, and prefers to spend her time reading, writing, making art, or yearning for the great outdoors."
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/anonymous.jpg'}
          alt="Liam McClennan"
          name="Liam McClennan"
          pronoun=""
          position="Sales Coordinator"
          description=""
        />
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/anonymous.jpg'}
          alt="Luyao Han"
          name="Luyao Han"
          pronoun=""
          position="Marketing & Sales Coordinator"
          description=""
        />
      </TeamRow>

      {/* Past Directors */}
      <TeamHeading>Past Directors</TeamHeading>
      <TeamRow>
        <TeamCardComponent
          image={process.env.PUBLIC_URL + '/assets/team-member/nico-picture.jpg'}
          alt={t('Nico Vilkoff')}
          name={t('Nico Vilkoff')}
          pronoun={t('(they/them)')}
          position={t('Co-Founder')}
          description={t('Nico studies cognitive science and explores fungal sustainable solutions to environmental challenges. When not mixing mushroom substrate, they’re drawing, solving puzzles, or geeking out over TV shows.')}
        />
      </TeamRow>
    </TeamContainer>
  );
}


export default TeamPage;