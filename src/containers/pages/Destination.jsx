import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Card, CardTitle } from "react-bootstrap";
import Madrid from "assets/img/madrid.png";
import Firenze from "assets/img/Firenze.png";
import Paris from "assets/img/paris.png";
import London from "assets/img/london.png";

function Destination() {

  return (
    <Layout>
      <Navbar />
      <div className="Destination">
        <div className="txtexclusive">
          <div>
            <h1 className="txtE">
              Exclusive <span>deals & discounts</span>
            </h1>
          </div>
          <p className="txtD">
            Discover pur fantastic early booking discounts <br />& start
            planning your journey
          </p>
        </div>
        <div className="Testimonio">
          <Row className="Row1">
            <Col className="col-3 colT3" >
              <Card className="card1">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={Madrid}
                  style={{
                    width: "270px",
                    height: "290px",
                    borderRadius: "8px",
                  }}
                  alt="..."
                />
                <Card.Body>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <CardTitle>Madrid</CardTitle>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <i
                              class="bi bi-star-fill"
                              style={{ color: "#FA7436" }}
                            ></i>{" "}
                            4.8
                          </small>
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {" "}
                            <i className="bi bi-geo-alt-fill"></i> Spain
                          </small>
                        </p>
                      </div>
                      <div className="col-6 d-flex">
                        <p className="card-text">
                          <small className="textS text-body-secondary">
                            <del>$950</del>
                          </small>
                        </p>
                        <p className="cardD card-text">
                          <small> $850</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-3">
              <Card className="card1">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={Firenze}
                  style={{ width: "270px", height: "290px" }}
                  alt="..."
                />
                <Card.Body>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <CardTitle>Firenze</CardTitle>
                      </div>
                      <div className="col2 col-6">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <i
                              class="bi bi-star-fill"
                              style={{ color: "#FA7436" }}
                            ></i>{" "}
                            4.5
                          </small>
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {" "}
                            <i className="bi bi-geo-alt-fill"></i> Italy
                          </small>
                        </p>
                      </div>
                      <div className="col-6 d-flex">
                        <p className="card-text">
                          <small className="textS text-body-secondary">
                            <del>$850</del>
                          </small>
                        </p>
                        <p className="cardD card-text">
                          <small> $750</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-3">
              <Card className="card1">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={Paris}
                  style={{ width: "270px", height: "290px" }}
                />
                <Card.Body>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <CardTitle>Paris</CardTitle>
                      </div>
                      <div className="col2 col-6">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <i
                              class="bi bi-star-fill"
                              style={{ color: "#FA7436" }}
                            ></i>{" "}
                            4.4
                          </small>
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {" "}
                            <i className="bi bi-geo-alt-fill"></i> France
                          </small>
                        </p>
                      </div>
                      <div className="col-6 d-flex">
                        <p className="card-text">
                          <small className="textS text-body-secondary">
                            <del>$699</del>
                          </small>
                        </p>
                        <p className="cardD card-text">
                          <small> $599</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-3">
              <Card className="card1">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={London}
                  style={{ width: "270px", height: "290px" }}
                />
                <Card.Body>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <CardTitle>London</CardTitle>
                      </div>
                      <div className="col2 col-6">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <i
                              class="bi bi-star-fill"
                              style={{ color: "#FA7436" }}
                            ></i>{" "}
                            4.8
                          </small>
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {" "}
                            <i className="bi bi-geo-alt-fill"></i> UK
                          </small>
                        </p>
                      </div>
                      <div className="col-6 d-flex">
                        <p className="card-text">
                          <small className="textS text-body-secondary">
                            <del>$950</del>
                          </small>
                        </p>
                        <p className="cardD card-text">
                          <small> $850</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
export default Destination;
