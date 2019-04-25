import React from 'react';
import './App.css';
import teams from './teams';
import Sports from './Sports';
import TeamList from './TeamList';
import PlayerList from './PlayerList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: '',
      teams: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Sports 
          sports={Object.keys(teams)}
          handleClick={this._setSport}
          />

        {
          this.state.sports ? <TeamList
                                    teams={Object.keys(teams[this.state.sports])}
                                    handleClick={this._setTeam}
                              />
                              :null
        }
        {
          this.state.teams ? <PlayerList 
                                  players={teams[this.state.sports][this.state.teams]}
                              />
                              : null
        }
      </div>
    );
  }
  
  _setSport = (sports) => {
    this.setState({
      sports,
      teams: ''
    });

  }
  _setTeam = (teams) => {
    this.setState({
      teams
    })
  }
}

export default App;