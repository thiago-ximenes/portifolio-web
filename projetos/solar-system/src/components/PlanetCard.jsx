import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ planetImage } />
        <Card.Title>{planetName}</Card.Title>
      </Card>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
