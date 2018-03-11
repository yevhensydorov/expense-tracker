import React from 'react';

class AddExpense extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			description: '',
			date: '',
			amount: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name; // find a name of the input
		this.setState({
			[name]: value // add the input name to the state obj
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		// console.log(this.state);
		const expense = this.state;
		this.props.receiver(expense);
	}

	render() {
		return (
			<section className='add-block'>
				<form className='search-form' onSubmit={this.handleSubmit}>
					<div className='form-items'>

						<label 
							htmlFor="descr-input" 
							className='desrc-label'
						>
							Description
						</label>

						<input 
							onChange={this.handleChange}
							value={this.state.description}
							type='text'
							id='descr-input'
							className='descr-input'
							name='description'
						 />



						<label 
							htmlFor="date-input" 
							className='item-label'
						>
							Date
						</label>

						<input 
							onChange={this.handleChange}
							value={this.state.date}
							type='date'
							id='date-input'
							className='date-input'
							name='date'
						 />



						<label 
							htmlFor="amount-input" 
							className='item-label'
						>
							Amount
						</label>

						<input 
							onChange={this.handleChange}
							value={this.state.amount}
							type='text'
							id='amount-input'
							className='amount-input'
							name='amount'
						 />

					</div>

					<button className='submit-btn' type='submit'>Add</button>
					
				</form>
			</section>
		);
	}
}

export default AddExpense;