import React from "react";
import "./HistoryItem.styles.scss"
import { connect } from "react-redux";
import { removeTransaction } from "../../redux/transaction/transaction.action";

const HistoryItem = ({item, removeTransaction}) => {
  const {text, amount, type} = item
  return <div className="history-item" onDoubleClick={() => removeTransaction(item)}>
    <span>{text}</span>
    <div>
        <span>{amount}</span>
        <div className={type}></div>
    </div>
  </div>;
};

const mapDispatchToProps = dispatch => ({
  removeTransaction: item => dispatch(removeTransaction(item))
})

export default connect(null, mapDispatchToProps)(HistoryItem);
