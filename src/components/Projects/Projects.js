import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import erp from "../../Assets/Projects//erp.png"
import tingle from "../../Assets/Projects//tingle.png"
import digital from "../../Assets/Projects//digital.png"
import fansome from "../../Assets/Projects//fansome.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
          <ProjectCard
  imgPath={erp}
  title="ERP and B2B Healthcare"
  description={
    `Web application for managing elderly support centers in Korea. The application allows management of human resources, finances and customer files.
    • Manage tasks & bugs on Jira
    • Apply agile scrum model
    • Work directly with PM to analyze requirements as customer changes or adds new ones and design test cases
    • Evaluating the impact on the project when new requirements or changes come from the customer
    • Work directly with PM to design testcase for critical features: Salary slip, Employee workload
    • Support dev team to reproduce bugs
    • Execute test and make test report
    • Testing APIs with Postman
    • Using dev-tool for UI checking`
  }
  webLink="http://erp.higherpower.co.kr/receiver-payment-management/payment-management?month=9&page=1&year=2024"
/>
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tingle}
              title="Tingle"
              description="My personal blog page built with Next.js and Tailwind CSS, rendering content from markdown files with dark mode support."
              webLink="https://play.google.com/store/apps/details?id=com.simtalk.livemate&hl=en&gl=US"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={fansome}
              title="Fansome"
              description="Online code and markdown editor built with React.js, supporting HTML, CSS, and JavaScript with real-time preview and auto-save using Local Storage."
              webLink="https://play.google.com/store/apps/details?id=com.fansome"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={digital}
              title="Digital"
              description="Image classifier model using CNN and Transfer Learning to detect diseased and healthy plant leaves. Achieved 98% accuracy with ResNet34."
              webLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Another Projects"
              description="CRM: ecomerce store.
                            Restaurant
              "
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="A CNN classifier using FER-2013 dataset to predict human emotions with an accuracy of 60.1%. Also uses OpenCV for face detection and emotion prediction."
              webLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
