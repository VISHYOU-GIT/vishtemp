
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardText,
  UncontrolledCarousel,
} from "reactstrap";

// core components
const carouselItems = [
  {
    src: require("../assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("../assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("../assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];


export default function SmartBorrowers() {
  const [iconTabs, setIconsTabs] = React.useState(1);

  return (
    <div>
      <div className="section">
        <Container>
          <div className="title">
            <h3>Latest Research</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Researches In Finance Sector
              </h1>
              <p className="text-white mt-4">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <Button
                className="mt-4"
                color="warning"
                // href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Know More
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={true}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <div className="title">
            <h3>Regular Updates</h3>
          </div>
          <Row>
            <Col md="4">
              <Card style={{ width: "20rem" }}>
                <CardImg
                  top
                  src={require("../assets/img/denys.jpg")}
                  alt="..."
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">Latest Crypto News</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Daily: Nexo to Pay on Stable...</td>
                        </tr>
                        <tr>
                          <td>Venezuela Begins Public of Nation...</td>
                        </tr>
                        <tr>
                          <td>PR: BitCanna – Dutch Blockchain...</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardText>
                  <Button
                    className="btn-simple btn-icon btn-round float-right"
                    color="primary"
                    type="submit"
                  >
                    <i className="tim-icons icon-send" />
                  </Button>
                  {/* <Button color="primary">Go somewhere</Button> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ width: "20rem" }}>
                <CardImg
                  top
                  src={require("../assets/img/denys.jpg")}
                  alt="..."
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">Latest Crypto News</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Daily: Nexo to Pay on Stable...</td>
                        </tr>
                        <tr>
                          <td>Venezuela Begins Public of Nation...</td>
                        </tr>
                        <tr>
                          <td>PR: BitCanna – Dutch Blockchain...</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardText>
                  <Button
                    className="btn-simple btn-icon btn-round float-right"
                    color="primary"
                    type="submit"
                  >
                    <i className="tim-icons icon-send" />
                  </Button>
                  {/* <Button color="primary">Go somewhere</Button> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ width: "20rem" }}>
                <CardImg
                  top
                  src={require("../assets/img/denys.jpg")}
                  alt="..."
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">Latest Crypto News</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Daily: Nexo to Pay on Stable...</td>
                        </tr>
                        <tr>
                          <td>Venezuela Begins Public of Nation...</td>
                        </tr>
                        <tr>
                          <td>PR: BitCanna – Dutch Blockchain...</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardText>
                  <Button
                    className="btn-simple btn-icon btn-round float-right"
                    color="primary"
                    type="submit"
                  >
                    <i className="tim-icons icon-send" />
                  </Button>
                  {/* <Button color="primary">Go somewhere</Button> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <div className="title">
            <h3>Borrower Education</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={true}
              />
            </Col>
            <Col className="mb-5 mb-lg-0" lg="5">
              <Card className="w-100 h-100">
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 1,
                        })}
                        onClick={(e) => setIconsTabs(1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                        Cibil
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 2,
                        })}
                        onClick={(e) => setIconsTabs(2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                        Eligibility
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 3,
                        })}
                        onClick={(e) => setIconsTabs(3)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-bag-16" />
                        Sanction
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                    </TabPane>
                    <TabPane tabId="link2">
                      <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                    <TabPane tabId="link3">
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
