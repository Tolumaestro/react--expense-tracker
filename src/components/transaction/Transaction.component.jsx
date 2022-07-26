import React, { useState } from "react";
import "./Transaction.styles.scss"
import { v4 as uuid } from 'uuid';

import { connect } from "react-redux";
import { addTransaction } from "../../redux/transaction/transaction.action";

const Transaction = ({ addTransaction}) => {

  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState(null)
  const unique_id = uuid();
  const small_id = unique_id.slice(0,3)

  const transaction = {
    id: small_id,
    text, 
    amount,
    type: amount > 0 ? "income" : "expense"
  }

  const handleSubmit = () => {
    if(amount !== "0" ){
      addTransaction(transaction)
      setAmount(""); 
      setText("")
    } else{
      setError("Amount can not 0")
    }
  }

  return <div>
    <h3 className="section-title">Add new transaction</h3>
    <form onSubmit={(e) =>{ e.preventDefault(); handleSubmit() }}>
        <div className="form-group">
            <label>Text</label>
            <input type="text" value={text} placeholder="Enter Text..." 
            onChange={
              e => {
                setText(e.target.value)
              } 
            } required />
        </div>

        <div className="form-group">
            <label>Amount</label>
            <label>(negative - expense, positive - income)</label>
            { error && <label style={ {color: "red"}}>{error}</label> }
            <input type="number" placeholder="Enter amount" value={amount} onChange={
              e => {
                setAmount(e.target.value)
              }
            } required />
        </div>
        
        <input type="submit" value="Add Transaction" />
    </form>
  </div>;
};

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction))
})

export default connect(null, mapDispatchToProps)(Transaction);
