import styles from './TransactionHistory.module.css';
export const TransactionHistoryItem = ({
  item: { id, type, amount, currency },
}) => {
  return (
    <tr className={styles['transaction-row']} key={id}>
      <td className={styles['transaction-cell']}>{type}</td>
      <td className={styles['transaction-cell']}>{amount}</td>
      <td className={styles['transaction-cell']}>{currency}</td>
    </tr>
  );
};
