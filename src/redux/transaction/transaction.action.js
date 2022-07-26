import transactionActionTypes from "./transaction.types"

export const addTransaction = (transaction) => ({
    type: transactionActionTypes.ADD_TRANSACTION,
    payload: transaction
})

export const removeTransaction = transaction => ({
    type: transactionActionTypes.REMOVE_TRANSACTION,
    payload: transaction
})