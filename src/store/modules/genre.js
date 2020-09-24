const genre = {
	namespaced: true,
	state: {
		genres: [
			{ id: 1, name: "Thriller"},
			{ id: 2, name: "Drama"},
			{ id: 3, name: "Sci-fi"},
			{ id: 4, name: "Historical fiction"}
		]
	},
	mutations: {},
	actions: {},
	getters: {
		genres(state) {
			if(state.genres.length > 0) return state.genres;
		}
	}
};

export default genre;