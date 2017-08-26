import { createStore, compose, applyMiddleware } from 'redux';
// thunk gives redux the ability to handle async
// thunk is a function that returns a value that is determined at runtime
import thunk from 'redux-thunk';
import reducer from './reducers';

// 'compose' is a middleware; enables middleware in Redux
// if in the browser and if it can find the tools, use it, or do nothing (identify func)
const showReduxDevTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f;

const store = createStore(reducer, compose(applyMiddleware(thunk), showReduxDevTools));

export default store;
