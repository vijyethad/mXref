import rootReducer from '../reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import {thunkMiddleware, thunk} from 'redux-thunk'
import {createLogger} from 'redux-logger'

// enable redux devtools... can this be done with Webpack instead?
const enhancers = compose (
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const loggerMiddleware = createLogger()

export default (initialState) => {
	return createStore(
		rootReducer,
		initialState,
		enhancers,
		compose(applyMiddleware(
			thunk,
			thunkMiddleware,
			loggerMiddleware
		))
	);
};
