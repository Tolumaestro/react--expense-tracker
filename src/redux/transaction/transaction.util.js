export const addNewTransaction = (transactions, transactionToAdd) => {
    return [...transactions, {...transactionToAdd}]
}
