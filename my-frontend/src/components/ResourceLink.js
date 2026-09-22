import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  align-self; flex-start;
  width: fit-content;

  color: #A52A2A;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const MobileLink = styled.a`
  align-self; flex-start;
  width: fit-content;

  color: #A52A2A;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function ResourceLink({ pdf, children }) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 700
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <MobileLink
        href={`${process.env.PUBLIC_URL}/assets/edResources/${pdf}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </MobileLink>
    );
  }

  return (
    <StyledLink to={pdf}>
      {children}
    </StyledLink>

  );
}

export default ResourceLink;