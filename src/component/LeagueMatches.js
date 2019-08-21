import React from 'react';
import '../App.css';
import axios from 'axios';
import {API_KEY,API_URL,LeagueM,LeagueId} from "../constants/apiConstans";

class LeagueMatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueMatches: [],
    }
  }
  componentDidMount() {
    axios.get(`${API_URL}${LeagueM}key=${API_KEY}&league_id=${LeagueId}`)
      .then(response =>
        response.data.data.map(matches => ({
          gameId : `${matches.id}`,
          home: `${matches.home_name}`,
          away: `${matches.away_name}`,
          gameWeek : `${matches.game_week}`,
          homeGoals : `${matches.homeGoalCount}`,
          awayGoals : `${matches.awayGoalCount}`,
          stadium : `${matches.stadium_name}`
        }))
      )
      .then(leagueMatches => {
        console.log(leagueMatches);
        this.setState({
          leagueMatches,
        })
      })
  }

  render() {
    const { leagueMatches} = this.state;
    return(
      leagueMatches.map(matches => {
        const {home,away,gameWeek,homeGoals,awayGoals,stadium,gameId} = matches;
        return(
          <div key={gameId}>
            <table>
              <thead>
                <tr>
                  <th>Game Week : {gameWeek}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{home}</td>
                  <td>{homeGoals}</td>
                  <td>{awayGoals}</td>
                  <td>{away}</td>
                  <td>{stadium}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })
    );
  };
}

export default LeagueMatches