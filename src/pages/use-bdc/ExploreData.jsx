import React, { Fragment, useState } from 'react';
import {
  SideNav,
  NavDropDownButton,
  Menu,
  PrimaryNav,
  FooterNav,
  GridContainer,
  SocialLink,
  Footer,
  Logo,
  Grid,
  Title,
  GovBanner,
  Header,
  Search,
  SocialLinks,
  Address,
  Button
} from '@trussworks/react-uswds';
import logoImg from '../../assets/react.svg';


const ExploreData = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navDropdownOpen, setNavDropdownOpen] = useState([false, false]);

  const handleToggleNavDropdown = (index) => {
    setNavDropdownOpen((prevNavDropdownOpen) => {
      const newOpenState = Array(prevNavDropdownOpen.length).fill(false);
      newOpenState[index] = !prevNavDropdownOpen[index];
      return newOpenState;
    });
  };

  const toggleMobileNav = () => {
    setMobileNavOpen((prevOpen) => !prevOpen);
  };

  const handleSearch = () => {
    /* */
  };

  const primaryNavItems = [
    <Fragment key="primaryNav_0">
      <NavDropDownButton
        menuId="extended-nav-section-one"
        isOpen={navDropdownOpen[0]}
        label="Current section"
        onToggle={() => {
          handleToggleNavDropdown(0);
        }}
        isCurrent
      />
      <Menu id="extended-nav-section-one" items={new Array(3).fill(<a href="#">Navigation link</a>)} isOpen={navDropdownOpen[0]} />
    </Fragment>,
    <Fragment key="primaryNav_1">
      <NavDropDownButton
        menuId="extended-nav-section-two"
        isOpen={navDropdownOpen[1]}
        label="Section"
        onToggle={() => {
          handleToggleNavDropdown(1);
        }}
      />
      <Menu id="extended-nav-section-two" items={new Array(3).fill(<a href="#">Navigation link</a>)} isOpen={navDropdownOpen[1]} />
    </Fragment>,
    <a key="primaryNav_2" className="usa-nav__link" href="javascript:void(0)">
      <span>Simple link</span>
    </a>
  ];

  const sideNavItems = [
    <a key="sidenav_0" href="">
      Parent link
    </a>,
    <Fragment key="sidenav_1">
      <a href="" className="usa-current">
        Current page
      </a>
      <SideNav
        isSubnav
        items={[
          ...Array(1).fill(<a href="">Child link</a>),
          <Fragment key="sidenav_1_1">
            <a href="" className="usa-current">
              Child link
            </a>
            <SideNav
              isSubnav
              items={[
                ...Array(2).fill(<a href="">Grandchild link</a>),
                <a href="" key="sidenav_1_2" className="usa-current">
                  Grandchild link
                </a>,

              ]}
            />
          </Fragment>,
          ...Array(2).fill(<a href="">Child link</a>)
        ]}
      />
    </Fragment>,
    <a key="sidenav_2" href="">
      Parent link
    </a>
  ];

  const returnToTop = (
    <GridContainer className="usa-footer__return-to-top">
      <a href="#">Return to top</a>
    </GridContainer>
  );

  const socialLinkItems = [
    <SocialLink key="facebook" name="Facebook" href="#" />,
    <SocialLink key="twitter" name="Twitter" href="#" />,
    <SocialLink key="youtube" name="YouTube" href="#" />,
    <SocialLink key="instagram" name="Instagram" href="#" />,
    <SocialLink key="rss" name="RSS" href="#" />
  ];

  const footerPrimary = (
    <FooterNav aria-label="Footer navigation" size="medium" links={Array(5).fill(<a href="javascript:void(0)" className="usa-footer__primary-link">Primary link</a>)} />
  );

  const footerSecondary = (
    <>
      <Grid row gap>
        <Logo size="medium" image={<img className="usa-footer__logo-img" src={logoImg} alt="Agency Logo" />} heading={<p className="usa-footer__logo-heading">Name of Agency</p>} />
        <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
          <SocialLinks links={socialLinkItems} />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address
            size="medium"
            items={[
              <a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>,
              <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>
            ]}
          />
        </Grid>
      </Grid>
    </>
  );

  return (
    <div>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <GovBanner />
      <Header basic showMobileOverlay={mobileNavOpen}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title id="basic-logo">
              <a href="/" title="Home" aria-label="Home">
                BioData Catalyst
              </a>
            </Title>
            {/* <NavMenuButton label="Menu" onClick={toggleMobileNav} className="usa-menu-btn" /> */}
          </div>
          <PrimaryNav aria-label="Primary navigation" items={primaryNavItems} onToggleMobileNav={toggleMobileNav} mobileExpanded={mobileNavOpen}>
            <Search size="small" onSubmit={handleSearch} />
          </PrimaryNav>
        </div>
      </Header>

      <div className="usa-section">
        <GridContainer>
          <Grid row gap>
            <Grid className="usa-layout-docs__sidenav" desktop={{ col: 3 }}>
              <nav aria-label="Secondary navigation">
                <SideNav items={sideNavItems} />
              </nav>
            </Grid>
            <main className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs" id="main-content">
              <h1>Explore BDC Data</h1>
              <h2 id="section-heading-h2">About Data in BDC</h2>
              <p>Anyone can explore the data that BDC hosts without logging in or requesting permission, and there is no cost for exploring data in BDC.</p>
              <h2 id="section-heading-h2">Search Hosted Data</h2>
              <p>
              The following buttons link to search capabilities to discover the data available in BDC. <strong>Select your search based on the information you have:</strong>
              </p>
              <div style={{display: 'flex', marginTop: '1rem', maxWidth: '98ex'}}>
                <Button>Keywords in Study Names or Descriptions</Button>
                <Button>Disease, Phenotype, Biological Process, or Anatomical Entity</Button>
                <Button>Phenotypes</Button>
              </div>
              <p>
              All three of the above searches provide Study Accession IDs - unique, stable, and   versioned identifiers. 
              </p>
              <p>
              The search capabilities of “Keywords in Study Names or Descriptions” and “Disease, Phenotype, Biological Process, or Anatomical Entity” search across the data  dictionaries to explore variables in the studies. 
              </p>
              <p>
    
  The “Disease, Phenotype, Biological Process, or Anatomical Entity” search also  returns biomedical concepts and study variables that are related to the search term. 
  </p>
  <p>
  The “Phenotypes” search includes participant-level data (aggregate counts returned),  variable distributions, data dictionary, and Study Accession IDs.
  </p>




              <h2 id="section-heading-h2">Data from Research Community Collaborators</h2>
              <p>
              BDC builds collaborations with research communities by importing data from their projects and empowering investigators from those communities with innovative analysis tools. Learn more about these activities on the [Research Communities Using BDC webpage  ](/about/research-communities).
              </p>
              <p>
              To see a list of the datasets hosted in BDC from each of these communities, click on  the name of the project below:
              </p>
              <ul>
                <li>TOPMed</li>
                <li>RECOVER</li>
                <li>Bench to Bassinet</li>
                <li>BioLINCC</li>
                <li>C4R</li>
                <li>CONNECTS</li>
                <li>Cure Sickle Cell Initiative</li>
                <li>HeartShare</li>
              </ul>
              <h2 id="section-heading-h2">Data from Research Community Collaborators</h2>
              <p>To determine which BDC-hosted dataset(s) meet their research criteria (i.e., conduct a feasibility assessment), researchers can search by various terms, including study names, variables, phenotypes, and even Study Accession IDs (if known). After selecting “Conduct a Feasibility Assessment” below, users can enter their search criteria and   then apply filters to retrieve aggregated participant counts.
              </p>
              <Button>Conduct Feasibility Assessment</Button>
              </main>
          </Grid>
        </GridContainer>
      </div>

      <Footer returnToTop={returnToTop} primary={footerPrimary} secondary={footerSecondary} />
    </div>
  );
};

export default ExploreData;
