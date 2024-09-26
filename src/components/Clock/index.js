import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log(`constuctor methode called`)
  }
  componentDidMount() {
    console.log(`component methode called`)
    this.tiId = setInterval(this.tick, 100)
  }

  tick = () => {
    this.setState({date: new Date()})
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount methode called`)

    clearInterval(this.tiId)
  }
  render() {
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
