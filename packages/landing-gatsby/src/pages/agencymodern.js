import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/agencyModern';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/AgencyModern/agencyModern.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/AgencyModern/Navbar';
import Banner from '../containers/AgencyModern/Banner';
import Services from '../containers/AgencyModern/Services';
import Features from '../containers/AgencyModern/Features';
import WorkHard from '../containers/AgencyModern/WorkHard';
import UltimateFeature from '../containers/AgencyModern/UltimateFeature';
import Customer from '../containers/AgencyModern/Customer';
import News from '../containers/AgencyModern/News';
import Subscribe from '../containers/AgencyModern/Subscribe';
import Footer from '../containers/AgencyModern/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <SEO title="AgencyModern" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />

              <Dropdown style={{ top: '100px' }}>
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
          <Services />
          <Features />
          <WorkHard />
          <UltimateFeature />
          <Customer />
          <News />
          <Subscribe />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
