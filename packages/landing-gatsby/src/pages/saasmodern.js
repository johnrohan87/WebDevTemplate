import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { saasModernTheme } from 'common/src/theme/saasModern';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/SaasModern/sassModern.style';

import BannerSection from '../containers/SaasModern/Banner';
import Navbar from '../containers/SaasModern/Navbar';
import WorkingProcessSection from '../containers/SaasModern/WorkingProcess';
import PricingSection from '../containers/SaasModern/Pricing';
import PartnerSection from '../containers/SaasModern/Partner';
import FaqSection from '../containers/SaasModern/Faq';
import TrialSection from '../containers/SaasModern/Trial';
import InfoSection from '../containers/SaasModern/Info';
import FeatureSection from '../containers/SaasModern/Feature';
import UpdateScreen from '../containers/SaasModern/UpdateScreen';
import TestimonialSection from '../containers/SaasModern/Testimonial';
import Footer from '../containers/SaasModern/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO title="SaaS Modern | A react next landing page" />

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
          <BannerSection />
          <WorkingProcessSection />
          <InfoSection />
          <FeatureSection />
          <UpdateScreen />
          <PricingSection />
          <PartnerSection />
          <TestimonialSection />
          <FaqSection />
          <TrialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
