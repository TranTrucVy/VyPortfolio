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
import crm from "../../Assets/Projects//crm.png"
import digital from "../../Assets/Projects//digital.png"
import fansome from "../../Assets/Projects//fansome.png"
import dataquery from "../../Assets/Projects//data.png"
import product_finviet from "../../Assets/Projects//product_finviet.png"
import product_hitek from "../../Assets/Projects//product_hitek.png"
import product from "../../Assets/Projects//product.png"
import econguoitieudung from "../../Assets/Projects//econguoitieudung.png"
import ecofinviet from "../../Assets/Projects//ecofinviet.png"
import ecotiemsohoa from "../../Assets/Projects//ecotiemsohoa.png"


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
                {/* Row thứ hai */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="text-center">
            <img
              src={product_finviet}
              alt="New Image"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="text-center">
            <img
              src={product_hitek}
              alt="New Image"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>

        <br></br>
        <h1 className="project-heading">
        Detail <strong className="purple">Projects</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={12} className="project-card">
            <ProjectCard
              imgPath={crm}
              title="CRM/ Admin Portal"
              description={`Customer Management
                ▸Customer Information: Manage general customer profiles and data.
                ▸Store Management: Manage merchant/store accounts and business details.
                ▸Consumer Management: View and manage end-user information.
                ▸E-Invoice Customers: List and manage customers using electronic invoices.
                ▸Customer Segmentation: Classify customers based on demographics, behavior, or transaction volume.
              Operations
                ▸E-Invoice Package Approval: Review and approve e-invoice subscription requests.
                ▸Sales Information Approval: Validate and approve submitted sales data.
                ▸Store Information Approval: Review and verify details of merchant registration and store profiles.
              Marketing
                ▸Referral Program: Manage customer referral campaigns and reward programs.
                ▸EXU Back (Advertisement Module): Handle marketing banners, in-app ads, and campaign configurations.
              Reconciliation
                ▸Consumer Transactions: Review and verify consumer-side transaction records.
                ▸Reconciliation Module: Support backend reconciliation processes with logs and summaries.
              Settings
                ▸Global Settings: Configure system-wide parameters and operational rules.
                ▸Administrative Units: Manage provinces, districts, wards, and other administrative data.
              Reporting & History
                ▸System History: Log and display user/system activities.
                ▸Introduction Data: Track referral or marketing registration flows.
                ▸Store Reports: Generate performance reports and transactional overviews for stores.
                ▸Consumer Reports: Track user behavior and engagement trends.
                ▸EXU Back Orders: Reports for in-app product or service orders triggered by marketing ads.
                ▸E-Invoice Reports: Analyze issued and used e-invoices.
                ▸B2B Reports: Overview of business-to-business transactions.

                • Teamsize: 1 PM, 1PO, 1 Techlead, 6 BA, 1 Design, 5 Dev, 2 QC
              `}
              webLink="https://play.google.com/store/apps/details?id=com.simtalk.livemate&hl=en&gl=US"
            />
          </Col>

          <Col md={12} className="text-center">
            <img
              src={dataquery}
              alt="New Image"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>


        <Col md={12} className="project-card">
            <ProjectCard
              imgPath={ecofinviet}
              title="Public product of Finviet Technology"
              description={`ECO Consumer App
                ▸ Application for end-users
                ▸ Supports bill payments, mobile top-ups, online shopping, cashback, and promotions

                ECO Merchant App (Tiệm Số Hóa)
                ▸ Store management tool for small shop owners
                ▸ Functions include inventory purchasing, service payments, micro-loans, and sales tracking

                Salesman App
                ▸ App for field sales representatives
                ▸ Manages store visit routes, order tracking, and sales reports

                ECO PG App
                ▸ App for PGs (Promotion Girls) or activation teams
                ▸ Supports brand activation, check-in, task tracking, and report submission

                ECO POS App
                ▸ Point of Sale system
                ▸ Helps merchants manage sales, inventory, and daily revenue from a single platform

                ECO Payment App
                ▸ Payment processing application
                ▸ Supports card-based and contactless payment methods

                ECO Delivery App
                ▸ Delivery management tool
                ▸ Used by couriers to handle order deliveries, status tracking, and proof of delivery
              `}
              webLink="https://play.google.com/store/apps/collection/cluster?gsr=SlRqGHJLcEJueGdsQ0RsSEhaR2VHMEphT2c9PbICNwoaChZ2bi5jb20uZmludmlldC5ldGlja2V0EAcSFwgBEhM2Mzk5MTUxNDg1MjQ1NTUzNzk2GAA%3D:S:ANO1ljLjZ-w&hl=vi"
            />
          </Col>


          <Col md={6} className="project-card">
          <ProjectCard
  imgPath={erp}
  title="ERP and B2B Healthcare"
  description={
    `ERP and B2B web application designed for managing healthcare support centers in Korea, offering a wide range of features for efficient administration of human resources, finances, patient records, and healthcare services.

    • Design test plan, test cases for critical features like: Administrative and operational, Center and Facility Management, Financial Control and Budget, Human Resources and Account Management, Service and Request Coordination…
    • Manage tasks and bugs on Jira
    • Apply Agile Scrum model for projects
    • Collaborate with the PM to analyze requirements as they change or get added, and design corresponding test cases to ensure the system meets customer needs.
    • Evaluate the impact of new requirements or changes from the customer on the project
    • Support the dev team to reproduce and resolve bugs
    • Execute tests and prepare detailed test reports
    • Test APIs using Postman to ensure proper data exchange between the system's modules
    • Use dev tools for UI checking and validating design specifications
    • Teamsize: 1 PM, 1 BA, 1 Design, 4 Dev, 2 Tester
    `
  }
  webLink="http://erp.higherpower.co.kr/receiver-payment-management/payment-management?month=9&page=1&year=2024"
/>
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tingle}
              title="Tingle"
              description={`Tingle is a service that enables users to connect with others through video chats in Korea. The platform offers users the opportunity to engage in conversations and make money by participating in calls or chats
                
                • Develop test cases and scenarios for: video chat service, ensuring stable connections and smooth communication, user registration, login, and profile management features, and system administrator 
                • Manage tasks and bugs using Trello
                • Perform testing across iOS, Android, and Web platforms
                • Collaborate with PM to analyze customer requirements and design corresponding test cases
                • Evaluate the impact of any new customer requirements or changes on the project scope
                • Support the development team in reproducing bugs and troubleshooting issues
                • Execute tests, document findings, and create detailed test reports, API testing in Jmeter
                • Test integration features, ensuring smooth video and audio communication between users and verify the user interface for compatibility and design consistency across platforms
                • Teamsize: 1 PM, 1 BA, 1 Design, 4 Dev, 2 Tester
              `}
              webLink="https://play.google.com/store/apps/details?id=com.simtalk.livemate&hl=en&gl=US"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={fansome}
              title="Fansome"
              description={`FANSOME is a mobile application designed to create a platform for celebrities, creators, and their fans to interact. The app allows fans to access exclusive content, engage in one-on-one chat sessions, and enjoy live video calls with their favorite celebrities and creators. 
                
                • Develop test cases for core features: video chat, content access, live streaming, and subscriptions.
                • Mangage tasks and bugs in Jira.
                • Collaborate with PM to analyze requirements and design test cases.
                • Test user registration, login, and profile management for functionality and security.
                • Verify video and audio communication integration for smooth performance.
                • Test content visibility to ensure exclusive access for subscribers.
                • Assist dev team in reproducing bugs and resolving issues.
                • Test subscription features for billing, access, and content delivery.
                • Validate UI consistency across iOS and Android platforms.
                • Execute tests, document findings, and create detailed test reports.
                `}
              webLink="https://play.google.com/store/apps/details?id=com.fansome"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={digital}
              title="Digital Signage"
              description={`An digital signage solution where users can download and play content in real-time. Uploaded by suppliers and can be accessed through product purchases or subscriptions. Include real-time playback, secure content management, and buffer storage management.
                
                • Develop test cases for core features (video chat, content access, live streaming, subscriptions)
                • Collaborate with PM to design test cases based on requirements
                • Test user registration, login, and profile management for security
                • Validate video/audio communication features between users
                • Verify content access for subscribers
                • Reproduce and report bugs for quick fixes
                • Test subscription services (billing, access, content delivery)
                • Validate UI across platforms (iOS, Android)
                • Execute tests and document findings in reports
                • Mangage tasks and bugs in Jira
                • Test API in Jmeter
                `}
              webLink="https://play.google.com/store/apps/details?id=com.fansome"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Stepsy"
              description={`A mobile application designed for learning English, focused on enhancing communication skills and vocabulary. The app evaluates pronunciation to assess the user’s level and tailors a learning path to suit individual progress.
              
              • Manage tasks and bugs on Trello
              • Conduct testing across iOS, Android, and CMS platforms
              • Create user guides for clients on app and CMS usage
              • Assess the impact of new or modified requirements on the project
              • Assist the development team in reproducing and resolving bugs
              • Perform tests and generate detailed test reports
              • Work with the PM to establish efficient testing procedures for subscription features
              • Collaborate closely with the PM to analyze evolving customer requirements and design test cases accordingly
              • Teamsize: 1 PM, 1BA, 1 Design, 3 Dev, 1 Tester 
              `}
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
