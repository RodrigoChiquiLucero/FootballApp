import React from 'react';
import './App.css';
import './style/TableMatches.css';
import './style/TableLeague.css';
import LeagueMatches from './component/LeagueMatches'
import LeagueTable from './component/LeagueTable'
class App extends React.Component {
  render() {
    return(
      <div className= "hi">
        <div className = "league">
        < LeagueTable/>
        </div>
        <div className = "matches">
        < LeagueMatches />
        </div>
      </div>
    )
  };
}
export default App;
