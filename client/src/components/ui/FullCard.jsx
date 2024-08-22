import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Maps from "./Maps";

export default function FullCard({ route }) {
  return (
    <Card style={{ width: "40rem" }}>
      <Maps />
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
