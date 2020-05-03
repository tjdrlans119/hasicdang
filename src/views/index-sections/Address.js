import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import MapContent from "../index-sections/MapContent"
// core components

// const Style = {
//   map:{
//     width:"100%",
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
      >
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">찾아오시는길</h2>
              <h5 className="description">
                안양 1호점
              </h5>
              <div>
               <MapContent  
               testProps={3333}
               mapTarget={"first"}
              //  lat={37.400046}
              //  lng={126.923564}
               />
              </div>
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
