import React from "react";
import './App.css'
import store from "./store";
import { useState } from "react";
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      out: '0'
    }
    this.ref0utput = React.createRef()
  }

  tapeNumber(value) {
    let currentValue = value
    let output = this.ref0utput.current

    this.setState( state: {
      out: currentValue
    })
    if (output.value === 0) {output.value = ''}
    output.value += currentValue

  }

  tapeOperation(value) {
    let output = this.ref0utput.current
    if(value === 'CE') {
      output.value.length === 1 ? output.value = '0' : output.value = output.value.substring(0, output.value.length -1)
      } else if (value === 'C') {output.value = '0'}
      else if (value === '=') {
        try {output.value = eval(output.value)}
        catch {output.value === 'Недопустимое значение!'}
        setTimeout( hander: () => {
          output.value = '0'
        }, 1500);
    } 
  }

  render() {
    return (
      <div className="container">
        <div className="output">
          <input ref={this.ref0utput}type= 'text' defaultValue = {this.state.out}></input>
        </div>
        <div className="buttons">
          {store.buttons.map(item =>  <button>{item.val}</button
          onclick={() => {this.tapeNumber(item.val)}}
          >)}
          {store.opertations.map(item =>  <button>{item.val}</button
          onclick={() => {this.opertations(item.val)}}
          >)}
        </div>
      </div>
    )
  }
}

export default App