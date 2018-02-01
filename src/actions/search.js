import {
	UPDATE_SEARCH_CITY,
	UPDATE_SEARCH_RESULTS,
	UPDATE_SEARCH_FILTERS
} from "../types";
import api from "../api";

export const searchCityUpdated = city => ({
	type: UPDATE_SEARCH_CITY,
	city
});

export const searchResultsUpdated = results => ({
	type: UPDATE_SEARCH_RESULTS,
	results
});

export const searchFiltersUpdated = searchFilters => ({
	type: UPDATE_SEARCH_FILTERS,
	searchFilters
});

export const updateSearchCity = searchFilters => dispatch =>
	api.search
		.updateSearchFilters(searchFilters)
		.then(results => {
			dispatch(searchResultsUpdated(results));
		})
		.then(() => dispatch(searchCityUpdated(searchFilters.city)))
		.then(() => dispatch(searchFiltersUpdated(searchFilters)));

export const updateMinPrice = searchFilters => dispatch =>
	api.search
		.updateSearchFilters(searchFilters)
		.then(results => {
			dispatch(searchResultsUpdated(results));
		})
		.then(() => dispatch(searchFiltersUpdated(searchFilters)));

export const updateMaxPrice = searchFilters => dispatch =>
	api.search
		.updateSearchFilters(searchFilters)
		.then(results => {
			dispatch(searchResultsUpdated(results));
		})
		.then(() => dispatch(searchFiltersUpdated(searchFilters)));

export const updateMinNumBeds = searchFilters => dispatch =>
	api.search
		.updateSearchFilters(searchFilters)
		.then(results => {
			dispatch(searchResultsUpdated(results));
		})
		.then(() => dispatch(searchFiltersUpdated(searchFilters)));

export const updateMinNumBaths = searchFilters => dispatch =>
	api.search
		.updateSearchFilters(searchFilters)
		.then(results => {
			dispatch(searchResultsUpdated(results));
		})
		.then(() => dispatch(searchFiltersUpdated(searchFilters)));
