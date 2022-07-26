import transactionActionTypes from "./transaction.types"
import { addNewTransaction } from "./transaction.util"

const INITIAL_STATE = {
    transactions: []
}

const transactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case transactionActionTypes.ADD_TRANSACTION:
            return{
                ...state,
                transactions: addNewTransaction(state.transactions, action.payload)
            }
        
        case transactionActionTypes.REMOVE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter(  
                    transaction => transaction.id !== action.payload.id
                )
            }
        
        default:
            return state
    }
}

export default transactionReducer