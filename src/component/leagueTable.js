import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {API_KEY,API_URL,LeagueT} from "../constants/apiConstans";

 class leagueTable extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      leagueTable: [],
      name: undefined,
      position : undefined
    }
  }
  componentDidMount() {
    axios.get(`${API_URL}${LeagueT}key=${API_KEY}&league_id=${LeagueId}`)
    .then(response =>
      response.data.data.league_table.map(league => ({
        name: `${league.name}`,
        position: `${league.position}`,
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
        const {name,position} = league;
        return(
          <div key = {name}>
            <p>{name}</p>
            <p>{position}</p>
          </div>
        );
      })
    );
  }
}

export default leagueTable

