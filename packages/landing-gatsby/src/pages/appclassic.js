import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppClassic/Navbar';
import Banner from '../containers/AppClassic/Banner';
import Customer from '../containers/AppClassic/Customer';
import KeyFeatures from '../containers/AppClassic/KeyFeatures';
import AppSlider from '../containers/AppClassic/AppSlider';
import Features from '../containers/AppClassic/Features';
import DesignedAndBuilt from '../containers/AppClassic/DesignedAndBuilt';
import FeatureTab from '../containers/AppClassic/FeatureTab';
import PricingPolicy from '../containers/AppClassic/PricingPolicy';
import Testimonial from '../containers/AppClassic/Testimonial';
import Faq from '../containers/AppClassic/Faq';
import JoinTrail from '../containers/AppClassic/JoinTrail';
import Footer from '../containers/AppClassic/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppClassic/appClassic.style';

import SEO from '../components/seo';

import { Dropdown } from 'react-bootstrap';

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="App Classic" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />

            <Dropdown style={{ top: '80px' }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Find more Templates Here!
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/agency">Agency</Dropdown.Item>
                <Dropdown.Item href="/agencydigital">
                  AgencyDigital
                </Dropdown.Item>
                <Dropdown.Item href="/agencymodern">AgencyModern</Dropdown.Item>
                <Dropdown.Item href="/app">App</Dropdown.Item>
                <Dropdown.Item href="/saas">SAAS</Dropdown.Item>
                <Dropdown.Item href="/saasmodern">SAAS-Modern</Dropdown.Item>
                <Dropdown.Item href="/saasclassic">SAAS-Classic</Dropdown.Item>
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
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Customer />
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            <Testimonial />
            <Faq />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
