import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Route } from "react-router-dom";
import rootReducer from "./rootReducer";
import { userLoggedIn } from "./actions/auth";
// import "semantic-ui-css/semantic.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.reiAnalyzeJWT) {
	const user = { token: localStorage.reiAnalyzeJWT };
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
