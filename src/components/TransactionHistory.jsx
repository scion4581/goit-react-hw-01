import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.transactionTable}>
            <thead>
                <tr className={css.transactionHeader}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((transaction) => {
                    return (
                        <tr className={css.transactionRow} key={transaction.id}>
                            <td className={css.transactionType}>{transaction.type}</td>
                            <td className={css.transactionAmount}>{transaction.amount}</td>
                            <td className={css.transactionCurrency}>{transaction.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}