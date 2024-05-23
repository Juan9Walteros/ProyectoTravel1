import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

import { Card, CardBody, CardText} from "react-bootstrap";
import Img1 from "assets/img/Image-2.png";
import Img2 from "assets/img/Image-3.png";
import Img3 from "assets/img/Image-4.png";
import Img4 from "assets/img/Image-5.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Blog() {
  return (
    <Layout>
      <Navbar />

      <div className="Destination">
        <div className="seccion1">
          <h1 className="getUp">
            Get Update with <span>latest blog</span>
          </h1>
        </div>
        <div className="Testimonio">
          <Row className="Row1">
            <Col className="col-3 colT4">
            <Card className="card7 card">
                  <Card.Img variant="top" src={Img1} />
                  <CardBody>
                    <CardText>
                      The Amazing Difference a Year Of Travelling.
                    </CardText>
                    <p className="text-body-secondary">July 27, 2021</p>
                  </CardBody>
                </Card>
            </Col>
            <Col className="col-3">
            <Card className="card7 card">
                  <Card.Img variant="top" src={Img2} />
                  <CardBody>
                    <CardText>Travel for enough, you meet yourself.</CardText>
                    <p className="text-body-secondary">July 27, 2021</p>
                  </CardBody>
                </Card>
            </Col>
            <Col className="col-3">
            <Card className="card7 card">
                  <Card.Img variant="top" src={Img3} />
                  <CardBody>
                    <CardText>
                      The Amazing Difference a Year Of Travelling.
                    </CardText>
                    <p className="text-body-secondary">July 27, 2021</p>
                  </CardBody>
                </Card>
            </Col>
            <Col className="col-3">
            <Card className="card7 card">
                  <Card.Img variant="top" src={Img4} />
                  <CardBody>
                    <CardText>
                      The Amazing Difference a Year Of Travelling.
                    </CardText>
                    <p className="text-body-secondary">July 27, 2021</p>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
export default Blog;
