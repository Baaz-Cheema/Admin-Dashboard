import { useSelector } from "react-redux";
import TransactionItem from "./TransactionItem";
export default function Transactions() {
    const transactions = useSelector(state => state.portfolio.transactions)
    return (
        transactions.map((a, i) =>
            <div key={i} className="px-10">
                <TransactionItem a={a} />
            </div>
        )
    )
}