import React from 'react';
import ExpenseRow from './ExpenseRow';

class ExpensessTable extends React.Component {



	render() {
		return (
			<section className="expensess-table">
				<table>
					<tbody>
						<tr>
							<th>Description</th>
							<th>Date</th>
							<th>Amount</th>
						</tr>
						<ExpenseRow /> 
					</tbody>
				</table>
			</section>
		);
	}
}

export default ExpensessTable;