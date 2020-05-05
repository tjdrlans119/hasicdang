import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import MapContent from "../index-sections/MapContent"

function Address() {
  return (
    <>
      <div
        className="section section-address"
        data-background-color="black"
        id="address-section"
        style={{ margin: '0 auto', textAlign: 'center' }}
      >
        <Container>
          <h2 className="title">찾아오시는길</h2>
          <Row gutter={16}>
            <Col lg="6" md="6">
              <MapContent
                mapTarget={"first"}
              />
              <h5 className="description">
                안양점
                <br />
                ( 경기 안양시 만안구 만안로 214-2, 2층 )
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="https://map.kakao.com/link/to/하식당 안양점,37.400046,126.923564"
                size="sm"
                target="_blank"
              >
                길안내
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="tel:01031577003"
                outline
                size="sm"
              >
                연락하기
              </Button>
            </Col>
            <Col lg="6" md="6">
              <MapContent
                mapTarget={"second"}
              />
              <h5 className="description">
                범계점
                <br />
                ( 경기 안양시 동안구 평촌대로223번길 19, 401호 )
              </h5>

              <Button
                className="btn-round mr-1"
                color="info"
                href="https://map.kakao.com/link/to/하식당 범계점,37.390884,126.954646"
                size="sm"
                target="_blank"
              >
                길안내
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="tel:01031577003"
                outline
                size="sm"
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
