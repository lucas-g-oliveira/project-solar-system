import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="planetCard">
        <p data-testid="planet-name" className="planetName">
          {planetName}
        </p>
        <img className="Planet" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
