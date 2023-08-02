import './index.css'

const AddTrasactionsPopupContaine = props => {
  const {a} = props
  return (
    <div className="add-trasactions-popup-containe">
      <button type="button" className="iconoutlineclose">
        <img className="icon" alt="" src="/icon.svg" />
      </button>
      <button type="button" className="button">
        <div className="add-transaction1">{`Add Transaction `}</div>
      </button>
      <h1 className="add-transaction-heading">Add Transaction</h1>
      <p className="add-transaction-description">{`Lorem ipsum dolor sit amet, consectetur `}</p>
      <div className="transaction-type-container">
        <div className="transaction-type-label">Transaction Type</div>
        <input className="select-options" type="text" />
        <div className="select-transaction-type">{`Select Transaction Type `}</div>
        <img
          className="transaction-type-container-child"
          alt=""
          src="/vector-4.svg"
        />
      </div>
      <div className="transaction-name-container">
        <p className="transaction-name-lael">Transaction Name</p>
        <div className="name-input">
          <input className="name-input-child" type="text" />
          <div className="enter-name">Enter Name</div>
        </div>
      </div>
      <div className="amount-container">
        <p className="transaction-name-lael">Amount</p>
        <input
          className="amount-input"
          type="text"
          placeholder="Enter Your Amount"
        />
      </div>
      <div className="date-container">
        <p className="transaction-name-lael">Date</p>
        <input className="date-input" type="date" placeholder="Select Date" />
      </div>
      <div className="transaction-category-container">
        <p className="category">Category</p>
        <input className="select-options" type="text" />
        <div className="select-transaction-type">Select</div>
        <img
          className="transaction-type-container-child"
          alt=""
          src="/vector-4.svg"
        />
      </div>
    </div>
  )
}

export default AddTrasactionsPopupContaine
