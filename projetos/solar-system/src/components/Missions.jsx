import React, { Component } from 'react';
import { Row, Container, Card, Col } from 'react-bootstrap';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <Container>
          <Row className="justify-content-center">
            { missions
              .map(
                (
                  { name, year, country, destination },
                ) => (
                  <Col key={ name }>
                    <Card
                      // style={ { width: '18rem' } }
                      className="bg-light text-dark mb-3 planet-cards"
                    >
                      <Card.Body>
                        <Card.Title>{ name }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          { year }
                        </Card.Subtitle>
                        <Card.Text>
                          { `${country} - ${destination}` }
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ),
              )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Missions;
