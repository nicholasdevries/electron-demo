import './stylesheets/main.css'
import React from 'react'
import { render } from 'react-dom'
import GameSearch from './GameSearch'
import Filesystem from './Filesystem'

const App = () => (
  <div className="row">
    <div className="row__col">
      <GameSearch />
    </div>
    <div className="row__col">
      <Filesystem />
    </div>
  </div>
)

render(<App />, document.getElementById('root'))
