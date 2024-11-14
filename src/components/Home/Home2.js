import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            
            <p className="home-about-body">
              I’m passionate about ensuring software quality and have expanded my skills to QA Manual and Automation. 🤷‍♂️
              <br />
              <br /> Proficient in automation tools like 
              <i>
                <b className="purple">Selenium, Robot Frameworks, and Playwright</b>
              </i>
              <br />
              <br />
              Write test scripts using&nbsp;
              <i>
                <b className="purple">Python and Java</b> and
                also in areas related to{" "}
                <b className="purple">
                  Javascript.
                </b>
              </i>
              <br />
              <br />
              Experienced in integrating tests into
              <i>
                <b className="purple">
                  {" "}
                  CI/CD pipelines
                </b>
              </i>
              &nbsp;with tools like
              <i>
                <b className="purple"> Jenkins and GitLab </b>
                 ,helping ensure fast and reliable delivery. 
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
