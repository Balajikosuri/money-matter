import './index.css'

const AddTransactions = props => {
  const {a} = props

  return (
    <div className="account-section">
      <div className="accounts">Account</div>
      <button type="button" className="plus">
        <h1 className="add-transaction">
          <span className="plus-char"> + </span>Add Transaction
        </h1>
      </button>
    </div>
  )
}

export default AddTransactions
