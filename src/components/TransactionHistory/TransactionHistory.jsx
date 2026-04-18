import { TransactionHistoryItem } from './TransactionHistoryItem';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles['transaction-history']}>
      <thead className={styles['transaction-head']}>
        <tr>
          <th className={styles['transaction-title']}>Type</th>
          <th className={styles['transaction-title']}>Amount</th>
          <th className={styles['transaction-title']}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return <TransactionHistoryItem item={item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
};
