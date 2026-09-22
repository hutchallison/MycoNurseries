import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ResourceLink from './ResourceLink.js'

const Card = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;
  margin-bottom: 20px;

  background: #FFF8ED;
  border-radius: 12px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Preview = styled.img`
  width: 150px;
  height: 190px;
  object-fit: cover;
  border-radius: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
`;

const Date = styled.p`
  margin: 0 0 0 0;
  font-size: 0.9rem;
`;

const Description = styled.p`
  margin-bottom: 16px;
`;

function ResourceCard({ resource }) {
  return (
    <Card>
      <Preview
        src={`${process.env.PUBLIC_URL}/assets/edResources/${resource.preview}`}
        alt={`${resource.title} preview`}
      />

      <Content>
        <Title>{resource.title}</Title>

        <Date>{resource.date}</Date>

        <Description>
          {resource.description}
        </Description>

        <ResourceLink
            pdf={`${resource.title}`}
        >
            View PDF
        </ResourceLink>
      </Content>
    </Card>
  );
}

export default ResourceCard;