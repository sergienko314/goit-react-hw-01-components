import style from "./Transactions.module.css"
import PropTypes from 'prop-types';

const Transactions = ({ transactions }) => {
    return ( <table className={style.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
        ))}
            </tbody>
        </table>
  );
}
 
export default Transactions;
Transactions.propTypes = {
    id: PropTypes.string,
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string,
}