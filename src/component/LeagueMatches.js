import React from 'react';
import '../App.css';
import axios from 'axios';
import {API_KEY,API_URL,LeagueM,LeagueId} from "../constants/apiConstans";

class LeagueMatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueMatches: [],
      showComponent : false
    };
  }

  componentDidMount() {
    axios.get(`${API_URL}${LeagueM}key=${API_KEY}&league_id=${LeagueId}`)
      .then(response =>
        response.data.data.map(matches => ({
          gameId : `${matches.id}`,
          gameWeek : `${matches.game_week}`,
          home: `${matches.home_name}`,
          homeImg : `${matches.home_image}`,
          homeGoals : `${matches.homeGoalCount}`,
          away: `${matches.away_name}`,
          awayImg :`${matches.away_image}`,
          awayGoals : `${matches.awayGoalCount}`,
          // More information
          CornersTeamA:`${matches.team_a_corners}`,
          CornersTeamB:`${matches.team_b_corners}`,
          OffsidesTeamA:`${matches.team_a_offsides}`,
          OffsidesTeamB:`${matches.team_b_offsides}`,
          YellowCardsTeamA:`${matches.team_a_yellow_cards}`,
          YellowCardsTeamB:`${matches.team_b_yellow_cards}`,
          RedCardsTeamA:`${matches.team_a_red_cards}`,
          RedCardsTeamB:`${matches.team_b_red_cards}`,
          shotsOnTargetTeamA:`${matches.team_a_shotsOnTarget}`,
          shotsOnTargetTeamB:`${matches.team_b_shotsOnTarget}`,
          shotsOffTargetTeamA:`${matches.team_a_shotsOffTarget}`,
          shotsOffTargetTeamB:`${matches.team_b_shotsOffTarget}`,
          TotalShotsTeamA:`${matches.team_a_shots}`,
          TotalShotsTeamB:`${matches.team_b_shots}`,
          TotalFoulsTeamA:`${matches.team_a_fouls}`,
          TotalFoulsTeamB:`${matches.team_b_shots}`,
          PossesionTeamA:`${matches.team_a_possession}`,
          PossesionTeamB:`${matches.team_b_possession}`,
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
          return (
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