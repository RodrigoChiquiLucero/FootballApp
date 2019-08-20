import React from 'react';
import './App.css';
import LeagueTable from './component/LeagueTable';
import LeagueMatches from './component/LeagueMatches'

class App extends React.Component {

  render()
  {
    return(
      <div className = 'hola'>
      <LeagueTable />
      <LeagueMatches />
      </div>
    );
  }
}
export default App;
