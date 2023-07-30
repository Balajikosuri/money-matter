import fmt from 'indian-number-format'

import './index.css'

const DebitSection = props => {
  const {a} = props
  return (
    <div className="credit-section">
      <div className="container">
        <div className="content-container  debit-amount">
          $<span>{fmt.format(5600)}</span>
        </div>
        <div className="credit1">Debit</div>
      </div>
      <img className="credit-icon" alt="credit money" src="img/debit-img.png" />
    </div>
  )
}

export default DebitSection
