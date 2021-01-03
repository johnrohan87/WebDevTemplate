import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/src/theme/charity';
import { ResetCSS } from 'common/src/assets/css/style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Charity/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import BannerSection from '../containers/Charity/BannerSection';
import FeatureSection from '../containers/Charity/FeatureSection';
import BranchSection from '../containers/Charity/BranchSection';
import WorkSection from '../containers/Charity/WorkSection';
import MilestoneBlock from '../containers/Charity/MilestoneBlock';
import HumanityBlock from '../containers/Charity/HumanityBlock';
import PromotionBlock from '../containers/Charity/PromotionBlock';
import DonateSection from '../containers/Charity/DonateSection';
import MapSection from '../containers/Charity/MapSection';
import FundraiserSection from '../containers/Charity/FundraiserSection';
import BlogSection from '../containers/Charity/BlogSection';
import ClientBlock from '../containers/Charity/ClientBlock';
import Footer from '../containers/Charity/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from '../containers/Charity/charity.style';
import SEO from '../components/seo';
import { Dropdown } from 'react-bootstrap';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="Charity" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
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
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <BannerSection />
            <FeatureSection />
            <BranchSection />
            <WorkSection />
            <MilestoneBlock />
            <HumanityBlock />
            <PromotionBlock />
            <DonateSection />
            <MapSection />
            <FundraiserSection />
            <BlogSection />
            <ClientBlock />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
