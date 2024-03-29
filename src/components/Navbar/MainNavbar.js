import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import Image from "../../assets/img/Loan mystery_1.png";

export default function MainNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-dark");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const handleClickScroll = () => {
    const element = document.getElementById('service');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link to="/">
            <img src={Image} alt="logo" width={"220"} />
          </Link>
          {/* <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Creative Tim
          </UncontrolledTooltip> */}
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link href="#pablo" onClick={(e) => e.preventDefault()}>
                  Menu
                </Link>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                to="/"
                title="Follow us on Twitter"
                tag={Link}
                onClick={toggleCollapse}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
               
                title="Follow us on Twitter"
                tag={Link}
                onClick={() => { toggleCollapse(); handleClickScroll(); window.location='/#service'; } }
              >
                Services
              </NavLink>
            </NavItem>
            <div className="d-lg-none d-block">
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  to="/smart-borrower"
                  title="Follow us on Twitter"
                  tag={Link}
                  onClick={toggleCollapse}
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  to="/contact"
                  title="Follow us on Twitter"
                  tag={Link}
                  onClick={toggleCollapse}
                >
                  Contact Us
                </NavLink>
              </NavItem>{" "}
            </div>
            {/* <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Services
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
              
                <DropdownItem tag={Link} to="/services#checkcibilscore">
                  <i className="tim-icons icon-bullet-list-67" />
                  Free Cibil Score
                </DropdownItem>
                <DropdownItem tag={Link} to="/services#checkloaneligibility">
                  <i className="tim-icons icon-image-02" />
                  Loan Eligibility
                </DropdownItem>
                <DropdownItem tag={Link} to="/services#loanenquiry">
                  <i className="tim-icons icon-single-02" />
                  Loan Enquiry
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem>
              <Link to={"/smart-borrower"}>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  target="_blank"
                >
                  <i className="tim-icons icon-spaceship" /> Look Our Blogs
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to={"/contact"}>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={scrollToDownload}
                >
                  <i className="fa fa-contact-book" />
                  Contact Us
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
