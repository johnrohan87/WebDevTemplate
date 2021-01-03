import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Crypto/Navbar';
import Banner from '../containers/Crypto/BannerSection';
import BannerSlider from '../containers/Crypto/BannerSlider';
import Transactions from '../containers/Crypto/Transaction';
import ControlSections from '../containers/Crypto/ControlSection';
import TrustedProofSections from '../containers/Crypto/TrustedProof';
import ScalableSections from '../containers/Crypto/ScalableSection';
import SlideSections from '../containers/Crypto/CryptoSlides';
import BetaSections from '../containers/Crypto/BetaSection';
import Footer from '../containers/Crypto/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <SEO title="Crypto | A react next landing page" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />

              <Dropdown style={{ top: '70px' }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Find more Templates Here!
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/agency">Agency</Dropdown.Item>
                  <Dropdown.Item href="/agencydigital">
                    DgencyDigital
                  </Dropdown.Item>
                  <Dropdown.Item href="/agencymodern">
                    DgencyModern
                  </Dropdown.Item>
                  <Dropdown.Item href="/app">App</Dropdown.Item>
                  <Dropdown.Item href="/saas">SAAS</Dropdown.Item>
                  <Dropdown.Item href="/saasmodern">SAAS-Modern</Dropdown.Item>
                  <Dropdown.Item href="/saasclassic">
                    SAAS-Classic
                  </Dropdown.Item>
                  <Dropdown.Item href="/hosting">Hosting</Dropdown.Item>
                  <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
                  <Dropdown.Item href="/ride">Ride</Dropdown.Item>
                  <Dropdown.Item href="/crypto">Crypto</Dropdown.Item>
                  <Dropdown.Item href="/charity">Charity</Dropdown.Item>
                  <Dropdown.Item href="/interior">Interior</Dropdown.Item>
                  <Dropdown.Item href="/appmodern">Appmodern</Dropdown.Item>
                  <Dropdown.Item href="/appclassic">Appclassic</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </DrawerProvider>
          </Sticky>
          <Banner />
          <BannerSlider />
          <Transactions />
          <ControlSections />
          <TrustedProofSections />
          <ScalableSections />
          <SlideSections />
          <BetaSections />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
