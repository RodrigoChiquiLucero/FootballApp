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
    return(
      <p> hola</p>
    )
  };
}

export default LeagueMatches