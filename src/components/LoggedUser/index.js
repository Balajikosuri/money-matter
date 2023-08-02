import './index.css'
import Popup from 'reactjs-popup'

const LoggedUser = props => {
  const {clickOnLogout} = props

  return (
    <div className="footer">
      <div className="account">
        <div className="avatar-label-group">
          <img className="avatar-icon" alt="user" src="img/loggedUser.png" />
          <div className="name-email-container">
            <h2 className="username">Rhye</h2>
            <p className="emailid">olivia@untitledui.com</p>
          </div>
        </div>
        <>
          <Popup
            trigger={
              <button type="button" className="log-out-01">
                <img
                  className="logout-icon"
                  alt="logout"
                  src="img/log-out-icon.png"
                />
              </button>
            }
            modal
            // className="pop-container"
          >
            {close => (
              <div className="pop-container">
                <div>
                  <div className="logout-pop-container ">
                    <button
                      type="button"
                      className=" cancel-btn cross-button"
                      onClick={close}
                    >
                      &times;
                    </button>

                    <div className="logout-pop-container-child">
                      <img
                        className="colorful-logout-icon"
                        alt=""
                        src="img/colorful-log-out-img.png"
                      />

                      <div className="content-container">
                        {/* content */}
                        <div>
                          <h1 className="logout-msg-heading">
                            Are you sure you want to Logout?
                          </h1>
                          <p className="logout-msg-description">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed `}</p>
                        </div>
                        <div className="logout-buttons-container">
                          <button
                            onClick={clickOnLogout}
                            type="button"
                            className="yes-logout-btn yes-logout"
                          >
                            Yes, Logout
                          </button>
                          <button
                            onClick={() => {
                              close()
                            }}
                            type="button"
                            className="cancel-btn cancel"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </>
      </div>
    </div>
  )
}

export default LoggedUser

// {
//   ;<button onClick={clickOnLogout} type="button" className="log-out-01">
//     <img className="icon" alt="logout" src="img/log-out-icon.png" />
//   </button>
// }
