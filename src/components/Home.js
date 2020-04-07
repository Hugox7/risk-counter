import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';

import * as playersTypes from '../store/types/totalPlayers';
import './Home.css';

class Home extends React.Component {

  state = {
    value: '',
  }

  componentDidMount() {
    const currentPlayers = JSON.parse(localStorage.getItem('players'));
    if (currentPlayers) {
      currentPlayers.forEach(player => {
        this.props.playersNames({
          id: player.id,
          name: player.name,
        })
      })
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.players !== this.props.players) {
      return console.log(this.props.players);
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.props.players.length <= 4) {
      await this.props.playersNames({
        id: new Date().getTime(),
        name: this.state.value,
      });
      await localStorage.setItem('players', JSON.stringify(this.props.players));
      this.setState({ value: '' });
    } else {
      message.warning('Impossible de rajouter un nouveau joueur');
    }
    
  }

  handleDelete = async (id) => {
    await this.props.deletePlayer(id);
    await localStorage.setItem('players', JSON.stringify(this.props.players));
  }

  render() {

    const { players } = this.props;

    return (
      <div className="Home">
        <p>De 2 à 5 joueurs</p>
        <form
          onSubmit={this.handleSubmit}
        >
          <Input 
            placeholder="Entrer le nom d'un joueur"
            style={{ width: 200 }}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
        <div>
          {players.map(elem => {
              return <div key={elem.id} id="player-line">
                        {`Joueur ${players.indexOf(elem) + 1} : ${elem.name.toUpperCase()}`}
                        <Button className="delete-player" onClick={this.handleDelete.bind(this, elem.id)}>X</Button>
                      </div>
            })}
        </div>
          
          <Link to="/select-regions">
            <Button style={{ marginTop: '5px' }} type="primary" disabled={players.length < 2}>
              Suivant
            </Button>
          </Link>
          
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players.playersNames.players,
});

const mapDispatchToProps = (dispatch) => ({
  playersNames: (data) => {
    dispatch({ type: playersTypes.PLAYERSNAMES, data })
  },
  deletePlayer: (id) => {
    dispatch({ type: playersTypes.DELETEPLAYER, id })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
