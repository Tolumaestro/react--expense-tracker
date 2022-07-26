import React from "react";
import HistoryItem from "../history-item/HistoryItem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHistoryItems } from "../../redux/transaction/transaction.selector";

const History = ({historyItems}) => {
  return <div>
    <h3 className="section-title">History</h3>
    {historyItems.length > 0 && <h5>Double click to delete</h5>}
    {
      historyItems.map(item => 
        <HistoryItem item={item} key={item.id} />
      )
    }

  </div>;
};

const mapStateToProps = createStructuredSelector({
  historyItems: selectHistoryItems
})

export default connect(mapStateToProps)(History);
