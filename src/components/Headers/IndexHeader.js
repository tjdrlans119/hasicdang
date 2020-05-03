/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      {/* <div className="page-header clear-filter" filter-color="blue"> */}
      <div className="page-header clear-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            // backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
            // backgroundImage: "url(" + require("assets/img/하식당.jpeg") + ")"
            backgroundColor: "#363533"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="JMT.하식당"
              className="hasicdang-logo"
              // src={require("assets/img/now-logo.png")}
              src={require("assets/img/하식당.jpeg")}
              width={"70%"}
            ></img>
            {/* <h1 className="h1-seo"></h1> */}
            <h3 className="h3-seo">하사장의 요리연구소</h3>
          </div>
          <div>
            <h6 className="category category-absolute">
              Address{" "}
              <a href="http://kko.to/mMQP5Zk0H" target="_blank">
                1호점
            </a>
            .{" "}
              <a href="http://kko.to/mMQP5Zk0H" target="_blank">
                2호점
            </a>
            </h6>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
