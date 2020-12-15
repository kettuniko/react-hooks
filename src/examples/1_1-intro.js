import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Lisa'
    }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange = e => {
    this.setState({ firstName: e.target.value })
  }

  render() {
    const { firstName } = this.state
    return (
      <div>
        First name: <input value={firstName} onChange={this.handleNameChange} />
        <div className="app__greeting">Hello {firstName}!</div>
      </div>
    )
  }
}

export default App
