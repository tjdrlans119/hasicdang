import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Address() {
  return (
    <>
      <div
        className="section section-address"
        data-background-color="black"
        id="address-section"
      >
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">찾아오시는길</h2>
              <h5 className="description">
                안양 1호점
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="sm"
                target="_blank"
              >
                길안내
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="sm"
                target="_blank"
              >
                연락하기
              </Button>
            </Col>
            <Col lg="6" md="12">
              <h2 className="title"> </h2>
              <h5 className="description">
                범계 2호점
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="sm"
                target="_blank"
              >
                길안내
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="sm"
                target="_blank"
              >
                연락하기
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Address;
