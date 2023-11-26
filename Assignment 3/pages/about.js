import MapWrapper from "@/components/Map";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const About = () => {
  const trip = {
    "start station location": {
      coordinates: [-79.34943616, 43.79514851],
    },
    "end station location": { coordinates: [-79.36750352, 43.85812304] },
    "start station name": "Seneca College Newnham Campus",
    "end station name": "Seneca College Markham Campus",
  };
  return (
    <>
      <PageHeader title="About" text="All about me - the developer." />
      Name - Raghav Malhotra <br></br>
      Student ID - 153547211 <br></br>
      Date - 15/06/2023 <br></br>
      Program - Computer Programming and Analysis <br></br>
      Course - WEB422 <br></br>
      Professor - Wei Song
      <br />
      <br />
      <br />
      <Card style={{ width: "100%" }}>
        <Container fluid>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>
                  Seneca Polytechnic College Newham Campus
                </Card.Title>
                <Card.Text>
                  Seneca College of Applied Arts and Technology, operating as
                  Seneca Polytechnic.[3] is a multiple-campus public college in
                  the Greater Toronto Area, and Peterborough, Ontario, Canada
                  regions. It offers full-time and part-time programs at the
                  baccalaureate, diploma, certificate, and graduate levels.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <b>Address:</b> 1750 Finch Ave E, North York, ON M2J 2X5
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Phone:</b> (416) 491-5050
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Undergraduate tuition and fees:</b> 2,686 CAD,
                  International tuition 11,970 CAD (2014 – 15)
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Total Enrollment:</b> 97,500 (2014)
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>President:</b> David Agnew
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Mascot:</b> Sammy Sting
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Founded:</b> 1967
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <MapWrapper trip={trip} />
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default About;