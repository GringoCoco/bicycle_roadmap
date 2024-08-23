import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Maps from "./Maps";
import Container from "react-bootstrap/esm/Container";

export default function FullCard({ route }) {
  return (
    <Container
      style={{ width: "400rem", display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
      <Card className="mb-3" style={{ width: "40rem" }}>
        <Maps />
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{route.routeName}</Card.Title>
          <Card.Text>
            <p>
              {route.routeLocation} / {route.routeLength}км
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
