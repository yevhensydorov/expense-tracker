import React from "react";

class ExpensessTable extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
    );
  }
}

export default ExpensessTable;
