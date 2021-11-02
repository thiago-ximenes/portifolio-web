import React, { Component } from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import Title from './Title';
import Planets from '../data/planets';
import './Planet-cards.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <Container>
          <Row className="justify-content-center">
            {
              Planets
                .map(
                  (
                    { name, image },
                  ) => (
                    <Col key={ name } md="auto">
                      <Card
                        className="bg-dark text-light mb-3 planet-cards"
                        style={ { width: '18rem' } }
                      >
                        <Card.Img variant="top" src={ image } />
                        <Card.Body>
                          <Card.Title>{ name }</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ),
                )
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default SolarSystem;
