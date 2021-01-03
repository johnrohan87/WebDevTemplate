import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rideTheme } from 'common/src/theme/ride';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Ride/ride.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Ride/Navbar';
import Banner from '../containers/Ride/Banner';
import RideOption from '../containers/Ride/RideOption';
import LocationSection from '../containers/Ride/LocationSelection';
import FeatureSection from '../containers/Ride/Feature';
import LatestNewsSection from '../containers/Ride/LatestNews';
import HowItWorkSection from '../containers/Ride/HowItWorks';
import TestimonialSection from '../containers/Ride/TestimonialSection';
import FeatureSlider from '../containers/Ride/FeatureSlider';
import Footer from '../containers/Ride/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={rideTheme}>
      <Fragment>
        <SEO title="Ride | A react next landing page" />
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
          <RideOption />
          <LocationSection />
          <FeatureSlider />
          <FeatureSection />
          <LatestNewsSection />
          <HowItWorkSection />
          <TestimonialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
