import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", whiteSpace: 'pre-line' }}>
            {props.description}
          </Card.Text>
        {/* Hiển thị nút nếu webLink tồn tại */}
        {props.webLink && (
          <Button variant="primary" href={props.webLink} target="_blank">
            <CgWebsite /> &nbsp; Website or App
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
