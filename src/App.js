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
        seasonWins_home: `${league.seasonWins_home}`,
        seasonWins_away: `${league.seasonWins_away}`,
        seasonDraws_home: `${league.seasonDraws_home}`,
        seasonDraws_away: `${league.seasonDraws_away}`,
        seasonLosses_away: `${league.seasonLosses_away}`,
        seasonLosses_home: `${league.seasonLosses_home}`,
        seasonGoalDifference : `${league.seasonGoalDifference}`,
      }))
    )
      .then(leagueTable => {
        this.setState({
          leagueTable,
        })
      })
  }
  render() {
    const { leagueTable} = this.state;
    return (
      leagueTable.map(league =>{
        const {name,points,position,matchesPlayed,seasonWins_home, seasonWins_away
          ,seasonDraws_home,seasonDraws_away, seasonLosses_home,
          seasonLosses_away,seasonGoalDifference} = league;
        let totalWins = Number(seasonWins_home) + Number(seasonWins_away);
        let totalDraws = Number(seasonDraws_home) + Number(seasonDraws_away);
        let totalLosses = Number(seasonLosses_home) + Number(seasonLosses_away);

        return(
          <div key = {name}>
            <table size = "small">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team Name</th>
                  <th>Points</th>
                  <th>matches Played</th>
                  <th>PG</th>
                  <th>PE</th>
                  <th>PP</th>
                  <th>DF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{position}</td>
                  <td>{name}</td>
                  <td>{points}</td>
                  <td>{matchesPlayed}</td>
                  <td>{totalWins}</td>
                  <td>{totalDraws}</td>
                  <td>{totalLosses}</td>
                  <td>{seasonGoalDifference}</td>
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
