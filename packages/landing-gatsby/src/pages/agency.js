import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { agencyTheme } from 'common/src/theme/agency';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Navbar from '../containers/Agency/Navbar';
import BannerSection from '../containers/Agency/BannerSection';
import FeatureSection from '../containers/Agency/FeatureSection';
import AboutUsSection from '../containers/Agency/AboutUsSection';
import WorkHistory from '../containers/Agency/WorkHistory';
import BlogSection from '../containers/Agency/BlogSection';
import TestimonialSection from '../containers/Agency/TestimonialSection';
import TeamSection from '../containers/Agency/TeamSection';
import VideoSection from '../containers/Agency/VideoSection';
import FaqSection from '../containers/Agency/FaqSection';
import NewsletterSection from '../containers/Agency/NewsletterSection';
import QualitySection from '../containers/Agency/QualitySection';
import Footer from '../containers/Agency/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <SEO title="Agency" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper>
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
          <FeatureSection />
          <AboutUsSection />
          <WorkHistory />
          <BlogSection />
          <QualitySection />
          <VideoSection />
          <TestimonialSection />
          <TeamSection />
          <FaqSection />
          <NewsletterSection />
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
