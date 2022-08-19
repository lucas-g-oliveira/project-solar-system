import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map((e) => (<PlanetCard
            key={ e.name }
            planetImage={ e.image }
            planetName={ e.name }
          />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
