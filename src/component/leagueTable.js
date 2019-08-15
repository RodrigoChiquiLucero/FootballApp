import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {API_KEY,API_URL,LeagueT} from "../constants/apiConstans";

 class leagueTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    }
  }
  componentDidMount() {
    axios.get(`${API_URL}${LeagueT}key=${API_KEY}&league_id=${LeagueId}`)
    .then(response => {
      this.setState({ imageURL: response.data.message });
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    const { imageURL } = this.state;
    return (
      <p>{imageURL}</p>
    );
  }
}

export default leagueTable