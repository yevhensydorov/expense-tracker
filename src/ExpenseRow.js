import React from 'react';

class ExpenseRow extends React.Component {

	render() {
		const oneExpense = this.props.expense;
		console.log('come from expense row', oneExpense)
		// let row = oneExpense.map((item, index) => {
		// 	// return 
		// 	// 	<tr key={index}>
		// 	// 		<td>item.description</td>
		// 	// 		<td>item.date</td>
		// 	// 		<td>item.amount</td>
		// 	// 	</tr>
		// 	// console.log(item)
		// });

		return (
			<tbody>
				{/*{row}*/}
			</tbody>
		);
	}
}

export default ExpenseRow;