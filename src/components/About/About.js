import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import exp from "../../Assets/exp.png";  // Đảm bảo bạn đã thêm ảnh vào thư mục Assets
import dataquery from "../../Assets/Projects//data.png"


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Chèn ảnh trước phần "Who Am I?" */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
  {/* Row đầu tiên */}
  <Col
    md={12}
    style={{
      paddingTop: "30px",
      paddingBottom: "50px",
      fontSize: "1.25em"
    }}
  >
    {/* H1 căn giữa */}
    <h1 className="project-heading" style={{ textAlign: "center" }}>
      My <strong className="purple">Experiences?</strong>
    </h1>
    <br />
    {/* P căn đều hai bên */}
    <p style={{ textAlign: "justify" }}>
    - Proficient in querying MongoDB for data validation, aggregation, and reporting tasks. 
    <br></br>
    - Expert in designing Test cases which are clear, organized by applying the testing techniques.
    <br></br>
    - Majoring in testing (Manual and Automation) and Network & system testing skills: application, website testing, mobile testing.
    <br></br>
    - Performance Testing, Security Testing
    <br></br>
    - Experiences about automation tools: Selenium, Appium (Web Driver, Behavior Driven Development in Python and Java).
    <br></br>
    - Build up and improve automation framework: Robot Framework with Selenium2Library, Behavior Driven Development, POM, ...
    <br></br>
    - Experiences with projects applied CI (Continuous Integration) using Jenkins, Teamcity, ...
    <br></br>
    - Expert about API testing and Performance testing with some tools: JMeter, Postman …
    <br></br>
    - Analysis skills, requirement analysis, data processing, design testing skills, programming skills.
    <br></br>
    <br></br>
    - Experience in key business domains, including:
    <br></br>
    + Banking & Finance: Expertise in implementing and testing CRM systems to enhance customer engagement.
    <br></br>
    + E-Commerce: Proficient in Store Management systems, optimizing online retail operations.
    <br></br>
    + Healthcare: Skilled in deploying ERP solutions for hospital management and operational efficiency.
    <br></br>
    + Entertainment & Media: Experienced in developing and managing Digital Signage systems for content delivery and advertising. 
    </p>
  </Col>
  {/* 5 phần trống còn lại */}
</Row>

        {/* Row thứ hai */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="text-center">
            <img
              src={exp}
              alt="New Image"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>

        <br></br>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="text-center">
            <img
              src={dataquery}
              alt="New Image"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading" >
              My <strong className="purple">Achievements?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skills and Programming Languages</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools and Frameworks</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
