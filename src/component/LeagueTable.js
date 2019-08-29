import React from 'react';
import '../App.css';
import axios from 'axios';
import {API_KEY,API_URL,LeagueT,LeagueId} from "../constants/apiConstans";
import LeagueTableRow from "./LeagueTableRow";

 class LeagueTable extends React.Component{
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
        console.log(leagueTable);
        this.setState({
          leagueTable,
        })
      })
  }
  render() {
     const { leagueTable} = this.state;
     return (
           <div key = {"random"}>
             <table class="table table-sm table-dark">
               <thead>
                <tr>
                  <th>#</th>
                  <th>Team Name</th>
                  <th>Points</th>
                  <th>Matches Played</th>
                  <th>PG</th>
                  <th>PE</th>
                  <th>PP</th>
                  <th>DF</th>
                </tr>
                </thead>
               {leagueTable.map(league => <LeagueTableRow league={league} />) }
             </table>
           </div>
     );
   }
 }

 export default LeagueTable;

