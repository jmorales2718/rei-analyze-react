import {
	UPDATE_SEARCH_CITY,
	UPDATE_SEARCH_RESULTS,
	UPDATE_SEARCH_FILTERS
} from "../types";

export default function search(state = {}, action = {}) {
	switch (action.type) {
		case UPDATE_SEARCH_CITY:
			return { ...state, city: action.city };
		case UPDATE_SEARCH_RESULTS:
			return { ...state, results: action.results };
		case UPDATE_SEARCH_FILTERS:
			return { ...state, searchFilters: action.searchFilters };
		default:
			return state;
	}
}
