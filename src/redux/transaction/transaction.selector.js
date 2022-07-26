import { createSelector } from "reselect";

const selectTransactions = state => state.transactions

export const selectHistoryItems = createSelector(
    [selectTransactions],
    transactions => transactions.transactions
)

export const selectBalance = createSelector(
    [selectHistoryItems],
    transactions => transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0)
)

export const selectIncome = createSelector(
    [selectHistoryItems],
    transactions => transactions.reduce(
        (total,transaction) => parseFloat(transaction.amount) > 0 ? (total + parseFloat(transaction.amount)) : total
    ,0)
)



export const selectExpense = createSelector(
    [selectHistoryItems],
    transactions => transactions.reduce(
        (total,transaction) => parseFloat(transaction.amount) < 0 ? (total - parseFloat(transaction.amount)) : total
    ,0)
)