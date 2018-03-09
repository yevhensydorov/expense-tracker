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
		this.setState({
			description: event.target.description,
			date: event.target.date,
			amount: event.target.amount
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.description);
	}

	render() {
		return (
			<section 
				className='add-block'
			>
				<form 
					className='search-form'
					onSubmit={this.handleSubmit}
				>
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
							name='descr-input'
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
							type='text'
							id='date-input'
							className='date-input'
							name='date-input'
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
							name='amount-input'
						 />


					</div>

					<button className='submit-btn' type='submit'>Add</button>
					
				</form>
			</section>
		);
	}
}

export default AddExpense;