import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Game from './Game';


class App extends Component {

  state = {
    games: null,
    avail: false
  }

  componentWillMount() {
    axios.get('https://cors.now.sh/http://data.nba.net/10s/prod/v1/20180423/scoreboard.json')
      .then(res => {
        this.setState({games: res.data.games, avail: true})
      })
      .catch(err => console.log(err));
  }

  render() {
    let posts = this.state.games;
    console.log(posts)
    if(this.state.avail){
      posts = posts.map(post => (
          <li key={post.gameId}>
          <Game 
            home={post.hTeam.triCode} 
            away={post.vTeam.triCode} 
            hscore={post.hTeam.score} 
            vscore={post.vTeam.score}
          />
          </li>
      ));
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NBA</h1>
        </header>
          <div className="Game">
          <ul className="List">
          {posts}
          </ul>
          </div>
      </div>
    );
  }
}

export default App;
