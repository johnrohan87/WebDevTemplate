import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from 'common/src/theme/interior';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Interior/Navbar';
import Banner from '../containers/Interior/Banner';
import Feature from '../containers/Interior/Feature';
import AboutUs from '../containers/Interior/AboutUs';
import Project from '../containers/Interior/Project';
import Team from '../containers/Interior/Team';
import News from '../containers/Interior/News';
import Testimonial from '../containers/Interior/Testimonial';
import Gallery from '../containers/Interior/Gallery';
import Footer from '../containers/Interior/Footer';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from '../containers/Interior/interior.style';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <SEO title="Interior" />
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
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
          <ContentWrapper>
            <Banner />
            <Feature />
            <AboutUs />
            <Project />
            <Team />
            <News />
            <Testimonial />
            <Gallery />
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
