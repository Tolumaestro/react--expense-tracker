import React from "react";
import "./Balance.styles.scss"

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectBalance } from "../../redux/transaction/transaction.selector";

const Balance = ({balance}) => {
  return <div>
    <h4>YOUR BALANCE</h4>
    <h1>&#8358; {balance}</h1>
  </div>;
};

const mapStateToProps = createStructuredSelector({
  balance: selectBalance
})

export default connect(mapStateToProps)(Balance);
