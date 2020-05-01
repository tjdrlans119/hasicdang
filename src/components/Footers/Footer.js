/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          © made in{" "}
          <a href="https://kikikimoong.tistory.com/" target="_blank">kikikimoong</a>.
          {new Date().getFullYear()},
          <br />
          Designed by{" "}
          <a href="https://www.invisionapp.com?ref=nukr-dark-footer" target="_blank" >Invision</a>.
          Coded by{" "}
          <a href="https://www.creative-tim.com?ref=nukr-dark-footer" target="_blank" >Creative Tim</a>.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
