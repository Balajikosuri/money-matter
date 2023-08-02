import fmt from 'indian-number-format'

import './index.css'

const DebitSection = props => {
  const {a} = props
  return (
    <div className="debit-section">
      <div className="container">
        <div className="content-container  debit-amount">
          $<span>{fmt.format(5600)}</span>
        </div>
        <div className="debit1">Debit</div>
      </div>
      <img className="debit-icon" alt="debit money" src="img/debit-img.png" />
    </div>
  )
}

export default DebitSection
