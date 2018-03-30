import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class PlayerList extends Component {
    renderPlayers(){
        return this.props.data.players.map( player => {
           return (
                <li>
                    {player.firstName}
                </li>
            );
        });
    }
    render () {
    if (this.props.data.loading) {return <div>Loading....</div>;}
        return (

            <div>
                {this.renderPlayers()}
            </div>

        );
    }
}

const query = gql `
 {
  players {
    firsName
    LastName
  }
}
`;

export default graphql(query)(PlayerList);