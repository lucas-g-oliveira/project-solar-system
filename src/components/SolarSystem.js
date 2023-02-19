import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './styles.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className='solarSystem'>
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

/*
forçando git addd
*/

export default SolarSystem;
