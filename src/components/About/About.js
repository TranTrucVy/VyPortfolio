// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";

// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Who <strong className="purple">Am I ?</strong>
//             </h1>
//             <Aboutcard />
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "30px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skills and Programming Languages</strong>
//         </h1>

//         <Techstack />

//         <h1 className="project-heading">
//           <strong className="purple">Tools and Frameworks</strong> I use
//         </h1>
//         <Toolstack />

//         <Github />
//       </Container>
//     </Container>
//   );
// }

// export default About;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import newImage from "../../Assets/newImage.png";  // Đảm bảo bạn đã thêm ảnh vào thư mục Assets

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Chèn ảnh trước phần "Who Am I?" */}
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
              My <strong className="purple">Experiences?</strong>
            </h1>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "30px" }}
            className="about-img"
          >
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="text-center">
            <img src={newImage} alt="New Image" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
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
