import {Component} from 'react'
import './index.css'

const registrationStatusConstants = {
  initial: 'NO_ACTIVE_EVENT',
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderNoActiveEventView = () => (
    <div className="status-view-container">
      <p className="no-active-view-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToRegisterView = () => (
    <div className="yet-to-register-View-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="yet-to-register-img"
        alt="yet to register"
      />
      <p className="yet-to-register-heading">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register here
      </button>
    </div>
  )

  renderRegisteredView = () => (
    <div className="registered-View-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-img"
        alt="registered"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationsClosedView = () => (
    <div className="registrations-closed-View-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registrations-closed-img"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {registrationStatus} = this.props

    switch (registrationStatus) {
      case registrationStatusConstants.initial:
        return this.renderNoActiveEventView()
      case registrationStatusConstants.registered:
        return this.renderRegisteredView()
      case registrationStatusConstants.closed:
        return this.renderRegistrationsClosedView()
      case registrationStatusConstants.yetToRegister:
        return this.renderYetToRegisterView()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
