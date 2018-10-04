import React, { Component } from 'react'
import jetpack from 'fs-jetpack'
import { remote } from 'electron'

const appDir = remote.app.getAppPath()

class GameSearch extends Component {
  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  componentDidMount() {
    this.setState({
      files: jetpack
        .inspectTree(appDir)
        .children.filter(file => file.type === 'file')
    })
  }

  render() {
    const { files } = this.state
    return (
      <>
        <h2>Filesystem</h2>
        <p>List all files in the root directory.</p>
        <ol>
          {files.map(file => (
            <li key={file.name}>
              {file.name} <small>({file.size} bytes)</small>
            </li>
          ))}
        </ol>
      </>
    )
  }
}

export default GameSearch
