import './index.css'

import Popup from 'reactjs-popup'

import AddTrasactionsPopup from '../AddTrasactionsPopup'

const AddTransactionsHeaderHeader = props => {
  const {a} = props

  return (
    <div className="accounts-header">
      <h2 className="accounts">Accounts</h2>
      <>
        <Popup
          trigger={
            <button type="button" className="add-transaction-button">
              <img className="plus-icon" alt="plus" src="img/plus-img.png" />
              <h1 className="add-transaction">Add Transaction</h1>
            </button>
          }
          modal
          // className="pop-container"
        >
          {close => (
            <div className="pop-container">
              <div>
                <div className="popup-card-pop-container ">
                  <button
                    type="button"
                    className=" cancel-btn cross-button"
                    onClick={close}
                  >
                    &times;
                  </button>

                  <div className="popup-card-pop-container-child">
                    <div className="content-container">
                      <div>
                        {/* start code here */}
                        <AddTrasactionsPopup />
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
  )
}

export default AddTransactionsHeaderHeader
