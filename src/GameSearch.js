import React, { Component } from 'react'
import fetchGamesByName from './api/fetchGamesByName'

class GameSearch extends Component {
  constructor() {
    super()
    this.state = {
      games: [],
      loading: false,
      query: ''
    }
    this.search = this.search.bind(this)
  }

  render() {
    const { games, query } = this.state
    return (
      <>
        <h2>GameSearch</h2>
        <p>Term based API search. Hit enter to search.</p>
        <form onSubmit={this.search}>
          <input
            type="text"
            value={query}
            placeholder="search by game title"
            onChange={event => {
              this.setState({ query: event.currentTarget.value })
            }}
          />
        </form>
        <ol>
          {games.map(game => (
            <li key={game.id}>{game.game_title}</li>
          ))}
        </ol>
      </>
    )
  }

  search(event) {
    event.preventDefault()
    const { query } = this.state
    this.setState({ loading: true })
    fetchGamesByName(query)
      .then(games => {
        this.setState({ games, loading: false })
      })
      .catch(error => {
        // handle error
      })
  }
}

export default GameSearch
