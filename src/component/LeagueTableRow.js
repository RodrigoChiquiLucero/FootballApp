import React from 'react';

class LeagueTableRow extends React.Component {

  render() {
    let totalWins = Number(this.props.league.seasonWins_home) + Number(this.props.league.seasonWins_away);
    let totalDraws = Number(this.props.league.seasonDraws_home) + Number(this.props.league.seasonDraws_away);
    let totalLosses = Number(this.props.league.seasonLosses_home) + Number(this.props.league.seasonLosses_away);

    return (
      <tbody>
          <th>{this.props.league.position}</th>
          <th>{this.props.league.name}</th>
          <td>{this.props.league.points}</td>
          <td>{this.props.league.matchesPlayed}</td>
          <td>{totalWins}</td>
          <td>{totalDraws}</td>
          <td>{totalLosses}</td>
          <td>{this.props.league.seasonGoalDifference}</td>
      </tbody>
    )
  }
}

export default LeagueTableRow;