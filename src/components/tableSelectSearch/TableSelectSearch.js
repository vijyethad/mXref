import React, {PropTypes, Component} from 'react';
import {Button, Col} from 'react-bootstrap';
import SelectSearch from 'react-select-search';

let options = [
	{ name: 'Ruby', value: 'ruby' },
	{ name: 'JavaScript', value: 'javascript' },
	{ name: 'Lua', value: 'lua' },
	{ name: 'Go', value: 'go' },
	{ name: 'Julia', value: 'julia' }
]

class TableSelectSearch extends Component {
	constructor(props) {
		super(props);
		this.onItemMount = this.onItemMount.bind(this)
		this.onItemChange = this.onItemChange.bind(this)
		this.onItemHighlight = this.onItemHighlight.bind(this)
		this.onItemBlur = this.onItemBlur.bind(this)
		this.onItemFocus = this.onItemFocus.bind(this)
		this.state = {
			selectedOptions: ''
		}
	}
	
	onItemMount(value) {
		console.log('Mount', value);
	}
	
	onItemChange(value, state, props) {
		console.log('Change', value);
		this.setState({
			selectedOptions: value.length
		});
	}
	
	onItemHighlight(value, state, props) {
		console.log('Highlight', value);
	}
	
	onItemBlur(value, state, props) {
		console.log('Blur', value);
	}
	
	onItemFocus(value, state, props) {
		console.log('Focus', value);
	}
	
	render() {
		return (
			<div className="toolbar">
				<br />
				<div className="list-heading col-md-12">Tables</div>
				<div className="list-heading-hr col-md-12"><hr /></div>
				<Col md={8}>
					<SelectSearch
						options={options}
						name="language"
						multiple
						height="600"
						placeholder="Filter the tables"
						onMount={this.onItemMount}
						onChange={this.onItemChange}
						onHighlight={this.onItemHighlight}
						onBlur={this.onItemBlur}
						onFocus={this.onItemFocus}
					/>
				</Col>
				<Col md={4}>
					<div className="btn-toolbar">
						<Button
							bsStyle="warning"
							onClick={this.props.onClickUpdateModal}
							disabled={this.state.selectedOptions !== 1}
						>
							Update
						</Button>
						<Button bsStyle="danger" disabled={this.state.selectedOptions == 0}>Delete</Button>
						<Button
							bsStyle="primary"
							onClick={this.props.onClickCreateModal}
						>
							+ Create new Table
						</Button>
					</div>
				</Col>
			</div>
		);
	}
}

TableSelectSearch.propTypes = {

};

export default TableSelectSearch;
