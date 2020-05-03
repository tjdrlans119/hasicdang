import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import { decodedTextSpanIntersectsWith } from "typescript";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarTextVisible, setNavbarTextVisible] = React.useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("bg-primary");
        setNavbarTextVisible(true)
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarTextVisible(false)
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="xl" >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
              {navbarTextVisible ? <b>하식당</b> : ''}
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              밥집과 술집 사이
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("menu-section")
                      .scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(!collapseOpen);
                  }}
                >
                  <i className="now-ui-icons education_paper"></i>
                  <p>Menu</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("address-section")
                      .scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(!collapseOpen);
                  }}
                >
                  <i className="now-ui-icons location_pin"></i>
                  <p>찾아오시는길</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => {
                    e.preventDefault()
                  }}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>소개</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/info" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    하식당
                  </DropdownItem>
                  <DropdownItem to="/info" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    하사장
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/profile.php?id=100014184814504&fref=search&__tn__=%2Cd%2CP-R&eid=ARAPKqfl6cNTEVpdXjueBppUydn1Wv7XHCeWh_ZjA8yXPRnbqFgKBjGRcmgyO_ZNRYX305QCJekSNOdB"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/ha_taemoo/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="http://pf.kakao.com/_xmYRtT/chat"
                  target="_blank"
                  id="kakao-tooltip"
                >
                  <i className="fab">kakao</i>
                  <p className="d-lg-none d-xl-none"></p>
                </NavLink>
                <UncontrolledTooltip target="#kakao-tooltip">
                  Start Chat us on Kakao
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
