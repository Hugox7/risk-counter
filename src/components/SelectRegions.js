import React from 'react';
import { connect } from 'react-redux';

import './selectRegions.css';

class SelectRegions extends React.Component {

    componentDidMount() {
        if (this.props.players < 2) {
            return this.props.history.push('/');
        }
    }

    render() {
        return (
            <div id="select-regions">
                {this.props.players.map(player => {
                    return <h2>{player.name.toUpperCase()}</h2>
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    players: state.players.playersNames.players,
  });

export default connect(mapStateToProps)(SelectRegions);