import React from "react";
import AddExpense from "./AddExpense";
import ExpensessTable from "./ExpensessTable";
import ExpenseRow from "./ExpenseRow";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.getRow = this.getRow.bind(this);
  }

  componentDidMount() {
    const cashedExpenses = localStorage.getItem("myExpenses");
    if (cashedExpenses) {
      this.setState({
        data: JSON.parse(cashedExpenses)
      });
    }
  }

  getRow(expense) {
    const list = [...this.state.data];
    list.push(expense);

    this.setState({
      data: list
    });

    localStorage.setItem("myExpenses", JSON.stringify(list));
  }

  render() {
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
