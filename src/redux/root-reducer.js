import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import transactionReducer from "./transaction/transaction.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "transactions"
    ]
}

const rootReducer= combineReducers({
    transactions: transactionReducer
})

export default persistReducer(persistConfig, rootReducer)