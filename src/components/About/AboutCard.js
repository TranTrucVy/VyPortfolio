import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Tran Truc Vy</span>
            <p>
           - University: Ton Duc Thang University
            </p>
            - Major 1: Computer Science (graduated 09/2024) and GPA: 8.29
            <br />
            - Major 2: Software Engineer (graduated 04/2025) and GPA: 8.35  
            <br />
            <br></br>
            Some certificates that I have!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Scholarship in university
            </li>
            <li className="about-activity">
              <ImPointRight /> GeoComply Scholarship 06/2024
            </li>
            <li className="about-activity">
              <ImPointRight /> Student of 5 Merits at the University level 03/2024
            </li>
            <li className="about-activity">
              <ImPointRight /> Agile Development & Scrum Framework Course by TechBase VN 05/2023
            </li>
            <li className="about-activity">
              <ImPointRight /> Selenium Automation with Python by HCMUS 11/2022 – 01/2023
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Application Programming with HTML5, CSS3, jQuery, Bootstrap by HCMUS 08/2022
            </li> 
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
