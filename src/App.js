import React from 'react';
import './App.css';
import axios from 'axios';
import {API_KEY,API_URL,LeagueT,LeagueId} from "./constants/apiConstans";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueTable: [],
    }
  }
  componentDidMount() {
    axios.get(`${API_URL}${LeagueT}key=${API_KEY}&league_id=${LeagueId}`)
    .then(response =>
      response.data.data.league_table.map(league => ({
        name: `${league.cleanName}`,
        points: `${league.points}`,
        position: `${league.position}`,
        matchesPlayed: `${league.matchesPlayed}`,
        seasonWins_overall: `${league.seasonWins_overall}`
      }))
    )
      .then(leagueTable => {
        this.setState({
          leagueTable
        })
      })
  }
  render() {
    const { leagueTable} = this.state;
    return (
      leagueTable.map(league =>{
        const {name,points,position,matchesPlayed, seasonWins_overall} = league;
        return(
          <div key = {name}>
            <table size = "small">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team Name</th>
                  <th>Points</th>
                  <th>matches Played</th>
                  <th>GC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{position}</td>
                  <td>{name}</td>
                  <td>{points}</td>
                  <td>{matchesPlayed}</td>
                  <td>{ seasonWins_overall}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })
    );
  }
}
export default App;
