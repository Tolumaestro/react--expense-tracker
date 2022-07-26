import React from "react";
import "./homepage.styles.scss"

import Balance from "../../components/balance/Balance.component";
import Dashboard from "../../components/dashboard/Dashboard.component";
import History from "../../components/history/History.component";
import Transaction from "../../components/transaction/Transaction.component";


const homepage = () => {
  return (
    <div className="homepage">
      <h1 className="title">Expense Tracker</h1>
      <Balance />
      <Dashboard />
      <History />
      <Transaction />
    </div>
  )
};

export default homepage;
