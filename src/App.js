import React from 'react';
import AddExpense from './AddExpense';
import ExpensessTable from './ExpensessTable';
import ExpenseRow from './ExpenseRow';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    };

    this.getRow = this.getRow.bind(this);
  }

  getRow(expense) {
    // console.log("come from get row", expense);
    // console.log(typeof(expense));
    const newRow = this.state.data;
    newRow.unshift(expense);
    this.setState({
      data: newRow
    });

    // console.log("come from state", this.state); // SET.STATE IS ASYNC

  }

  render(){
    return (
      <div>
        <h1>ExpenseTracker</h1>
        <AddExpense receiver={this.getRow} />
        <section className="expesess-table">
          <table>
            <ExpensessTable />
            <ExpenseRow expense={this.state.data} /> 
          </table>
        </section>
      </div>
    );
  }
}

export default App;
