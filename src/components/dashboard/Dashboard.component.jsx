import React from "react";
import "./Dashboard.styles.scss"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIncome, selectExpense } from "../../redux/transaction/transaction.selector";

import DashboardItem from "../dashboard-item/DashboardItem.component";

const Dashboard = ({income, expense}) => {
  return <div className="dashboard">
    <DashboardItem name="INCOME" amount={income} type="income" />
    <DashboardItem name="EXPENSE" amount={expense} type="expense" />
  </div>;
};

const mapStateToProps = createStructuredSelector({
  income: selectIncome,
  expense: selectExpense
})

export default connect(mapStateToProps)(Dashboard);
