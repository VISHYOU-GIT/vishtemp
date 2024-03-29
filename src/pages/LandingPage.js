import React from "react";
import Clip from "../assets/img/step.mp4";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function LandingPage() {
 
function cb(response) {
    document.getElementById('count').innerText = response.value;
}
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          {/* <img
            alt="..."
            className="path"
            src={require("../assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("../assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("../assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("../assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("../assets/img/cercuri.png")}
          /> */}
          <div className="content-center">
            <Container>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <b className="text-white h1 " style={{ fontFamily: 'Alatsi',lineHeight:'40px'}}>
               Let's start Your 
                
                    Loanstory
                <br/>
                 Together.
                  </b>
                  {/* <p className="text-white mb-3 my-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p> */}
                  <Link to={"/analysis"}>
                    <div className="btn-wrapper mb-3">
                      <p className="category text-success align-middle d-inline">
                        check credit analysis report
                      </p>
                      <Button
                        className="btn-link"
                        color="success"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        <i className="tim-icons icon-minimal-right" />
                      </Button>
                    </div>
                  </Link>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <a href={"https://www.linkedin.com/in/ayush-mittal-5a2483213"} className=" border border-2 text-white  rounded-circle mx-1" style={{ zIndex: '11111', padding:'2%' }} >     
                        <i class="fa-brands fa-linkedin-in "></i>
                      
                      </a>
                      
                      <a href={"tel://8871428818"} className=" border border-2 text-white  rounded-circle mx-1 " style={{ zIndex: '11111', padding:'2%' }} >     
                        <i className="fas fa-phone" />
                      
                      </a>
                      
                      <a href={"https://instagram.com/loanstory.in?igshid=ZDdkNTZiNTM= "} className=" border border-2 text-white  rounded-circle mx-1 " style={{ zIndex: '11111', padding:'2%' }} >     
                        <i class="fa-brands fa-instagram"></i>
                      
                      </a>
                      
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="d-none d-md-block " width={'380'}
                    style={{scale:'2'}}
                    src={require("../assets/img/etherium.png")}
                  />
                  <img
                    alt="..."
                    className="d-block d-md-none "  width={'180'}
                    style={{scale:'2', marginTop:'38%', marginLeft:'17%'}}
                    src={require("../assets/img/etherium.png")}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* VIDEO */}
        <Container>
          <video 
            autoPlay={true}
            muted={true}
            loop={true}
            className={"w-100 mt-5"}
          >
            <source src={Clip} style={{ width: "25%" }} />
          </video>
        </Container>
        {/* SERVICES  */}
        <section id="service" className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/path3.png")}
            />

            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h2 style={{fontFamily: 'Alatsi'}}>
                    Services <span className="text-info">we offer you</span>
                  </h2>
                </Col>
              </Row>
              <Row style={{ marginTop: "8rem" }} className="">
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("../assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">check loanstory analysis report</h4>
                          <span>    </span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <p className="px-5 text-center">
                        Get your detailed credit profile assessment report.
                        </p>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Link to={"/"}>
                        <Button className="btn-simple" color="primary">
                          Coming Soon
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("../assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">
                            Check Credit Score<br/>Now
                          </h4>
                          <span>    </span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <p className="px-5 text-center">
                          Check your credit score with your data security.
                        </p>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Link to={"/analysis"}>
                        <Button className="btn-simple" color="success">
                          Let's Go!
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("../assets/img/ripp.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Detailed Loan Counselling<br/> Anytime</h4>
                          <span>   </span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <p className="px-5 text-center">
                          Ask your queries about getting loan and finance here
                          !!
                        </p>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Link to={"/enquiry"}>
                        <Button className="btn-simple" color="info">
                          Let's Go!
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/path4.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3,237</CardTitle>
                                <p />
                                <p className="card-category">Counselling Count</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <Icon
                                  style={{ fontSize: "52px" }}
                                  icon="material-symbols:person-outline"
                                  className="text-white"
                                />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3,653</CardTitle>
                                <p />
                                <p className="card-category">Credit Score Checked</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-gift-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">593</CardTitle>
                                <p />
                                <p
                                  style={{ whiteSpace: "nowrap" }}
                                  className="card-category"
                                >
                                  Loan disbursed
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-credit-card text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p" id="visits">0</CardTitle>
                                <p />
                                <p className="card-category">Total visitors</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Know Our{" "}
                      <span style={{ fontWeight: "800" }} className="text-info">
                        LOANSTO
                        <span
                          className="text-warning"
                          style={{ fontFamily: "verdana" }}
                        >
                          ₹
                        </span>
                        Y
                      </span>
                    </h1>
                    <p>
                      I should be capable of drawing a single stroke at the
                      present moment; and yet I feel that I never was a greater
                      artist than now.
                    </p>
                    <br />
                    <p>
                      When, while the lovely valley teems with vapour around me,
                      and the meridian sun strikes the upper surface of the
                      impenetrable foliage of my trees, and but a few stray.
                    </p>
                    <br />
                    <Link to={"/info"}>
                      <p
                        className="font-weight-bold text-info mt-5"
                        // onClick={(e) => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </p>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path4.png")}
          />

          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Smart Borrowers</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Low Commission</h4>
                      <hr className="line-primary" />
                      <p>
                        Divide details about your work into parts. Write a few
                        lines about each one. A paragraph describing a feature
                        will.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">High Incomes</h4>
                      <hr className="line-warning" />
                      <p>
                        Divide details about your product or agency work into
                        parts. Write a few lines about each one. A paragraph
                        describing feature will be a feature.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Verified People</h4>
                      <hr className="line-success" />
                      <p>
                        Divide details about your product or agency work into
                        parts. Write a few lines about each one. A paragraph
                        describing be enough.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="w-full d-flex justify-content-center">
                  <Link to={"/smart-borrower"}>
                    <Button
                      className="mt-4"
                      color="warning"
                      // href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
                    >
                      Know More
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("../assets/img/chester-wade.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Safe</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">573 K</CardTitle>
                        <p className="card-category text-white">
                          Satisfied customers
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10 425</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Awesome features</h3>
                  <p>
                    The design system comes with three pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Carefully crafted components</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Amazing page examples</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../assets/img/path2.png")}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Total Investments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section> */}

        {/* <Footer /> */}
      </div>
    </>
  );
}
