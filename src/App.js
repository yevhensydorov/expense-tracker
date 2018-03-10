import React from 'react';
import AddExpense from './AddExpense';
import ExpensessTable from './ExpensessTable';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: ''
    };

    this.getRow = this.getRow.bind(this);
  }

  getRow(expense) {
    console.log(expense);
    // console.log(typeof(expense));
    this.setState({
      data: expense
    });

    console.log(this.state.data); // SET.STATE IS ASYNC

  }

  render(){
    return (
      <div>
        <h1>ExpenseTracker</h1>
        <AddExpense receiver={this.getRow} />
        <ExpensessTable />
      </div>
    );
  }
}

export default App;
