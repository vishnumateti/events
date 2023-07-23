// Write your code here
import './index.css'

const activeStatusConstant = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {regStatus} = props

  const renderClosedRegistrations = () => (
    <div className="registration-closed-container">
      <img
        className="logo-closed"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
      />
      <h1 className="heading">Registrations Are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="registration-closed-container">
      <img
        className="yet-register"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
      />
      <p className="para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationCompleted = () => (
    <div className="registration-closed-container">
      <img
        className="right-image"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
      />
      <h1 className="heading">You have already registered for the event</h1>
    </div>
  )

  const renderMethods = () => {
    switch (regStatus) {
      case activeStatusConstant.registered:
        return renderRegistrationCompleted()
      case activeStatusConstant.yetToRegister:
        return renderYetToRegister()
      case activeStatusConstant.closed:
        return renderClosedRegistrations()
      default:
        return (
          <p className="para1">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  return <div>{renderMethods()}</div>
}
export default ActiveEventRegistrationDetails
