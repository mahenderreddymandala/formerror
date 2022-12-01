// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    firsterr: '',
    seconderr: '',
    lastname: '',
    isSubmitted: false,
  }

  eventHandler = event => {
    if (event.target.value === '') {
      this.setState({firsterr: '*Required'})
    } else {
      this.setState({firsterr: ''})
    }
  }

  onfirst = event => {
    this.setState({firstname: event.target.value})
  }

  onlast = event => {
    this.setState({lastname: event.target.value})
  }

  eventHandlerlast = event => {
    if (event.target.value === '') {
      this.setState({seconderr: '*Required'})
    } else {
      this.setState({firsterr: ''})
    }
  }

  onClick = () => {
    const {firstname, lastname, firsterr, seconderr} = this.state

    if (firstname === '' && lastname === '') {
      this.setState({
        firsterr: '*Required',
        seconderr: '*Required',
        isSubmitted: false,
      })
    } else if (firstname !== '' && lastname !== '') {
      this.setState({firsterr: '', seconderr: '', isSubmitted: true})
    } else if (firstname === '' && lastname !== '') {
      this.setState({firsterr: '*Required', seconderr: '', isSubmitted: false})
    } else if (firstname !== '' && lastname === '') {
      this.setState({firsterr: '', seconderr: '*Required', isSubmitted: false})
    }
    console.log(firsterr)
    console.log(seconderr)
    console.log(firstname)
    console.log(lastname)
  }

  onsubmitForm = event => {
    event.preventDefault()

    const {firstname, lastname, firsterr, seconderr} = this.state

    if (firstname === '' && lastname === '') {
      this.setState({
        firsterr: '*Required',
        seconderr: '*Required',
        isSubmitted: false,
      })
    } else if (firstname !== '' && lastname !== '') {
      this.setState({firsterr: '', seconderr: '', isSubmitted: true})
    }
    console.log(firsterr)
    console.log(seconderr)
    console.log(firstname)
    console.log(lastname)
  }

  reset = () => {
    this.setState({firsterr: '', seconderr: '', isSubmitted: false})
  }

  render() {
    const {firsterr, seconderr, firstname, lastname, isSubmitted} = this.state
    console.log(firsterr)
    console.log(seconderr)
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? (
          <div className="style-sheet">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button type="button" className="button" onClick={this.reset}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="style-sheet">
            <div onSubmit={this.onsubmitForm}>
              <div>
                <label htmlFor="firstname">FIRST NAME</label>
              </div>
              <div>
                <input
                  type="text"
                  id="firstname"
                  placeholder="First name"
                  onBlur={this.eventHandler}
                  onChange={this.onfirst}
                  value={firstname}
                />
              </div>
              <p className="Error-style"> {firsterr}</p>
              <div>
                <label htmlFor="secondname">LAST NAME</label>
              </div>
              <div>
                <input
                  id="secondname"
                  type="text"
                  onBlur={this.eventHandlerlast}
                  placeholder="Last name"
                  onChange={this.onlast}
                  value={lastname}
                />
                <p className="Error-style"> {seconderr}</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="button1"
                  onClick={this.onClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
