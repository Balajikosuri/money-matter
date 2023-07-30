import fmt from 'indian-number-format'

import './index.css'

const CreditSection = props => {
  const {a} = props
  return (
    <div className="credit-section">
      <div className="container">
        <div className="content-container">
          $<span>{fmt.format(12750)}</span>
        </div>
        <div className="credit1">Credit</div>
      </div>
      <img
        className="credit-icon"
        alt="credit money"
        src="https://img.freepik.com/premium-vector/finances-management-budget-assessment-financial-literacy-accounting-economist-holding-coin_566886-3841.jpg?w=900"
      />
    </div>
  )
}

export default CreditSection
