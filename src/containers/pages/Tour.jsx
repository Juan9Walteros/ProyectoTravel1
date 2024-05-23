import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

import Roma from "assets/img/rome.png";
import London from "assets/img/london2.png";
import Osaka from "assets/img/osaka.png";
import Palmas from "assets/img/Plameras ne.png";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Card, CardBody, CardTitle } from "react-bootstrap";

function Tour() {
  return (
    <Layout>
      <Navbar />
      <div className="ContTx">
        <div className="ConTx">
          <img className="Palmas" src={Palmas} alt="..." />
          <div className="txtexclusive2">
            <div className="title3">
              <h1 className="txtE3">
                Best <span>vacation plan</span>
              </h1>
            </div>
            <div className="ContTx">
              <p className="txtD3">
                Plan your perfect vacation with our travel agency. Chose <br />
                amoung hundresds of all-inclusive offers!
              </p>
            </div>
          </div>
          <Row>
            <Col className="col-4">
              <div>
                <div>
                  <Card className="card3">
                    <Card.Img
                      className="img-fluid"
                      src={Roma}
                      alt="..."
                      style={{
                        width: "369px",
                        height: "327px",
                        borderRadius: "16px",
                      }}
                    />
                    <CardBody>
                      <div className="container">
                        <div className="row">
                          <div className="col-6">
                            <CardTitle className="cardT1">
                              Rome, Itaky
                            </CardTitle>
                          </div>
                          <div className="col-6">
                            <p className="textT1">$5,42k</p>
                          </div>
                          <div className="col-6">
                            <p className="card-text">
                              <i class="bi bi-cursor-fill"></i>
                              <small className="textm text-body-secondary">
                                {" "}
                                10 Days Trip
                              </small>
                            </p>
                          </div>
                          <div className="col-6">
                            <p className="card-text">
                              <small className="text-body-secondary">
                                <i
                                  class="bi bi-star-fill"
                                  style={{ color: "#ffc107" }}
                                ></i>{" "}
                                4.8
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Col>
            <Col className="col-4">
              <div>
                <Card className="card3">
                  <Card.Img
                    className="img-fluid"
                    src={London}
                    alt="..."
                    style={{
                      width: "369px",
                      height: "327px",
                      borderRadius: "16px",
                    }}
                  />
                  <CardBody>
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <CardTitle className="cardT1">London, UK</CardTitle>
                        </div>
                        <div className="col-6">
                          <p className="textT1">$2,42k</p>
                        </div>
                        <div className="col-6">
                          <p className="card-text">
                            <i class="bi bi-cursor-fill"></i>
                            <small className="textm text-body-secondary">
                              {" "}
                              07 Days Trip
                            </small>
                          </p>
                        </div>
                        <div className="col-6">
                          <p className="card-text">
                            <small className="text-body-secondary">
                              <i
                                class="bi bi-star-fill"
                                style={{ color: "#ffc107" }}
                              ></i>{" "}
                              4.7
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col className="col-4">
              <div>
                <Card className="card3">
                  <Card.Img
                    className="img-fluid"
                    src={Osaka}
                    alt="..."
                    style={{
                      width: "369px",
                      height: "327px",
                      borderRadius: "16px",
                    }}
                  />
                  <CardBody>
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <CardTitle className="cardT1">Osaka,Japan</CardTitle>
                        </div>
                        <div className="col-6">
                          <p className="textT1">$5,42k</p>
                        </div>
                        <div className="col-6">
                          <p className="card-text">
                            <i class="bi bi-cursor-fill"></i>
                            <small className="textm text-body-secondary">
                              {" "}
                              10 Days Trip
                            </small>
                          </p>
                        </div>
                        <div className="col-6">
                          <p className="card-text">
                            <small className="text-body-secondary">
                              <i
                                class="bi bi-star-fill"
                                style={{ color: "#ffc107" }}
                              ></i>{" "}
                              4.8
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
          
        </div>
       
      </div>

      <Footer />
    </Layout>
  );
}
export default Tour;
