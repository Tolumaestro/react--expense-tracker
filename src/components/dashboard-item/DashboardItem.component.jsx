import React from "react";
import "./DashboardItem.styles.scss"

const DashboardItem = ({name, amount , type}) => {
  console.log( 2 + null);
  return <div className="dashboard-item">
    <h4>{name}</h4>
    <h2 className={type}>&#8358;{amount.length > 0 || amount[0] == null ? amount : 0}</h2>
  </div>;
};

export default DashboardItem;
