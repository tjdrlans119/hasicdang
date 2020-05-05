import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import MapContent from "../index-sections/MapContent"
// core components

// const Style = {
//   map:{
//     width:"%",
//     height:"500px"
//   }
// }

function Address() {
  return (
    <>
      <div
        className="section section-address"
        data-background-color="black"
        id="address-section"
        style={{margin:'0 auto',  textAlign:'center'}}
      >
        <Container>
          <h2 className="title">찾아오시는길</h2>
          <Row>
            <Col lg="3" md="12">
              <h5 className="description">
                안양 1호점
              </h5>
              <div>
               <MapContent
               mapTarget={"first"}
               />
              </div>
              </Col>
              <Col>
              <Button
                className="btn-round mr-1"
                color="info"
                href="https://map.kakao.com/link/to/하식당,37.400046,126.923564"
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
            <Col lg="6" md="12">
              <h5 className="description">
                범계 2호점
              </h5>
              <div>
               <MapContent 
               testProps={123}
               mapTarget={"second"}
              //  lat={37.389888}
              //  lng={126.950616  }
               />
              </div>
              <Button
                className="btn-round mr-1"
                color="info"
                href="https://map.kakao.com/link/to/하식당,37.389888,126.950616"
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
