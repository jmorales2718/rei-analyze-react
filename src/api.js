import axios from "axios";

export default {
	user: {
		login: credentials =>
			axios.post("/api/auth", { credentials }).then(res => res.data.user),
		signup: user =>
			axios.post("/api/users", { user }).then(res => res.data.user),
		resetPasswordRequest: email =>
			axios.post("/api/auth/reset_password_request", { email }),
		validateToken: token =>
			axios.post("/api/auth/validate_token", { token }),
		resetPassword: data => axios.post("/api/auth/reset_password", { data })
	},
	// TODO: Prevent api call if searchFilters.city is undefined render result of error if so
	search: {
		updateSearchFilters: searchFilters =>
			axios
				.get(
					`/api/cities/search?q=${searchFilters.city}${
						searchFilters.minPrice
							? `&min-price=${searchFilters.minPrice}`
							: ""
					}${
						searchFilters.maxPrice
							? `&max-price=${searchFilters.maxPrice}`
							: ""
					}${
						searchFilters.minNumBeds
							? `&max-num-beds=${searchFilters.minNumBeds}`
							: ""
					}${
						searchFilters.minNumBaths
							? `&max-num-baths=${searchFilters.minNumBaths}`
							: ""
					}`
				)
				.then(res => res.data)
	}
	// 	updateMinPrice: searchFilters =>
	// 		axios
	// 			.get(`/api/cities/search?q=${price}`)
	// 			.then(res => res.data.cities[0].results),

	// 	updateMaxPrice: searchFilters =>
	// 		axios
	// 			.get(`/api/cities/search?q=${price}`)
	// 			.then(res => res.data.cities[0].results),

	// 	updateMinNumBeds: searchFilters =>
	// 		axios
	// 			.get(`/api/cities/search?q=${numBeds}`)
	// 			.then(res => res.data.cities[0].results),

	// 	updateMinNumBaths: searchFilters =>
	// 		axios
	// 			.get(`/api/cities/search?q=${numBaths}`)
	// 			.then(res => res.data.cities[0].results)
	// }
};
