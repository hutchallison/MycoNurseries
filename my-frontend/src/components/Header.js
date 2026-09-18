import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderWrapper = styled.header`
  background-color: #39683B;
  color: #FFE7C9;
  padding: 1rem 0.2rem 0.2rem;
  text-align: center;
  position: relative;

  @media (max-width: 700px) {
    padding-top: 0.75rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 65px;
  height: auto;
`;

const TitleSection = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &&:hover { color: inherit; }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Catchphrase = styled.p`
  font-family: 'Caveat', cursive;
  font-size: 1.3rem;
  font-weight: 650;
  margin: -0.5rem 0 0;
  color: #FFE7C9;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1.2px solid #FFE7C9;
  width: 68%;
  margin: 15px auto 0;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;
  margin-right: 0em;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  font-weight: 500;
`;

const NavItem = styled.li`
  position: relative;
  padding-bottom: 0.5rem;
`;

const StyledLink = styled(NavLink)`
  color: #FFE7C9;
  text-decoration: none;
  font-size: 1.1rem;
  &.active { font-weight: 900; }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: -7%;
  background-color: #39683B;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  border-radius: 4px;
  min-width: 200px;
  z-index: 100;
  ${NavItem}:hover & {
    display: block;
  }
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  color: #FFE7C9;
  text-decoration: none;
  font-size: 1rem;
  &:hover { background-color: #2E7D32; }
`;

const CornerLink = styled(NavLink)`
  color: #FFE7C9;
  font-size: 1rem;
  text-decoration: none;
  background-color: #2E7D32;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-weight: bold;
  &:hover {
    background-color: #1B5E20;
  }
`;

const LanguageToggleButton = styled.button`
  color: #FFE7C9;
  font-size: 1rem;
  background-color: #2E7D32;
  border: none;
  border-radius: 6px;
  padding: 0.3rem 0.7rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #1B5E20;
  }
`;

const TopActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;  
  gap: 0.5rem;

  @media (max-width: 700px) {
    position: static;
    flex-direction: row;
    justify-content: right;
    margin-bottom: 1rem;
  }
`;

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <HeaderWrapper>
      <TopActions>
        <CornerLink to="/volunteer">{t('components.header.signIn')}</CornerLink>
        <LanguageToggleButton onClick={toggleLanguage}>
          {i18n.language === 'en' ? 'FR' : 'EN'}
        </LanguageToggleButton>
      </TopActions>
      <HeaderContent>
        <Logo src={process.env.PUBLIC_URL + '/assets/logo-cut-out.png'} alt={t('components.header.mycoNurseries')} />
        <TitleSection>
          <TitleLink to="/">
            <Title>{t('components.header.mycoNurseries')}</Title>
          </TitleLink>
          <Catchphrase>{t('components.header.slogan')}</Catchphrase>
        </TitleSection>
      </HeaderContent>

      <Divider />

      <Nav>
        <NavLinks>
          <NavItem>
            <StyledLink to="/about-myconurseries">{t('components.header.about')}</StyledLink>
            <DropdownMenu>
              <li>
                <DropdownItem to="/about-myconurseries">{t('components.header.ourStory')}</DropdownItem>
              </li>
              <li>
                <DropdownItem to="/team">{t('components.header.ourTeam')}</DropdownItem>
              </li>
              <li>
                <DropdownItem to="/growing-process">{t('components.header.ourGrowingProcess')}</DropdownItem>
              </li>
              <li>
                <DropdownItem to="/our-partners">{t('components.header.ourPartners')}</DropdownItem>
              </li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <StyledLink to="/cta">{t('components.header.getInvolved')}</StyledLink>
            <DropdownMenu>
              {/* Uncomment if needed */}
              {/* <li><DropdownItem to="/contact">{t('components.footer.contact')}</DropdownItem></li>
              <li><DropdownItem to="/partner-with-us">{t('components.footer.partnerWithUs')}</DropdownItem></li> */}
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <StyledLink to="/blog">{t('components.header.blog')}</StyledLink>
          </NavItem>

          <NavItem>
            <StyledLink to="/edResources">{t('components.header.edResources')}</StyledLink>
            <DropdownMenu>
              <li>
                <DropdownItem to="/edworkshops">{t('components.header.edWorkshops')}</DropdownItem>
              </li>
              <li>
                <DropdownItem to="/edresources">{t('components.header.edPdf')}</DropdownItem>
              </li>
            </DropdownMenu>
          </NavItem>

          <NavItem>
            <StyledLink to="/shop">{t('components.header.shop')}</StyledLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
