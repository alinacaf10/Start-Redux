import React, { Component } from 'react'
import { Counter,Buttons } from './components'
export default class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <Buttons/>
      </div>
    )
  }
}
