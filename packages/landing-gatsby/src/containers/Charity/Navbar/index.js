import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/src/assets/image/charity/logo.svg';
import heartImage from 'common/src/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        {/* <Link className="logo" to="/charity">
          <Image src={logoImage} alt="Charity React Next Landing" />
        </Link>
        
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#donate" offset={81}>
            Help us help them
          </AnchorLink>
          <Button>
            <span className="text">SPREAD</span>
            <Image src={heartImage} alt="Charity Landing" />
          </Button>
        </MenuWrapper>*/}
        <div>
          <ul style={{ display: 'flex', alignItems: 'center' }}>
            <lh>Web pages here --</lh>
            <li>
              <a style={{ padding: '15px 10px' }} href="app">
                App
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="saas">
                SAAS
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="saasmodern">
                SAAS-Modern
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="saasclassic">
                SAAS-Classic
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="hosting">
                Hosting
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="ride">
                Ride
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="crypto">
                Crypto
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="charity">
                Charity
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="interior">
                Interior
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="appmodern">
                Appmodern
              </a>
            </li>
            <li>
              <a style={{ padding: '15px 10px' }} href="appclassic">
                Appclassic
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
