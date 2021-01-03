import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { theme } from 'common/src/theme/appModern';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppModern/Navbar';
import Banner from '../containers/AppModern/Banner';
import AppSlider from '../containers/AppModern/AppSlider';
import Features from '../containers/AppModern/Features';
import DashboardFeatures from '../containers/AppModern/Dashboard';
import ProductSlide from '../containers/AppModern/ProductSlide';
import DesignedAndBuilt from '../containers/AppModern/DesignedAndBuilt';
import PricingPolicy from '../containers/AppModern/PricingPolicy';
import TeamPortfolio from '../containers/AppModern/TeamPortfoilo';
import Testimonial from '../containers/AppModern/Testimonial';
import Newsletter from '../containers/AppModern/Newsletter';
import Footer from '../containers/AppModern/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppModern/appModern.style';
import '@redq/reuse-modal/es/index.css';

import SEO from '../components/seo';

import { Dropdown } from 'react-bootstrap';

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="App Modern" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />

            <Dropdown style={{ top: '75px' }}>
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
            <Features />
            <AppSlider />
            <DashboardFeatures />
            <Testimonial />
            <ProductSlide />
            <DesignedAndBuilt />
            <PricingPolicy />
            <TeamPortfolio />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
