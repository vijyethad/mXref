import * as types from '../actions/action-types';

export default (state = [], action) => {
	switch (action.type) {
		case types.RECIEVE_TABLE_LIST:
			return [...state, Object.assign({}, action.tableList)];
		default:
			return state;
	}
};
