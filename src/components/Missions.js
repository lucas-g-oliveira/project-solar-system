import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import './styles.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className='missions'>
        <Title headline="Missões" />
        {missions.map((e) => (<MissionCard
          key={ e.name }
          name={ e.name }
          year={ e.year }
          country={ e.country }
          destination={ e.destination }
        />
        ))}
      </div>
    );
  }
}

export default Missions;
