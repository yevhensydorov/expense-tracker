import React from 'react';
import AddExpense from './AddExpense';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <h1>ExpenseTracker</h1>
        <AddExpense />
        {/*<ExpensessTable />*/}
      </div>
    );
  }
}

export default App;
