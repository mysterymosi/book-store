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
	mutations: {
		addGenre(state, genre) {
			state.genres.push({ ...genre, id: Math.random() });
		},

		deleteGenre(state, genreId) {
			for (const i in state.genres) {
				if (+state.genres[i].id === +genreId) {
					state.genres.splice(i, 1);
				}
			}
		}
	},
	actions: {},
	getters: {
		genres(state) {
			if (state.genres.length > 0) return state.genres;
		},

		genreCount(state) {
			if (state.genres.length > 0) return state.genres.length;
		}
	}
};

export default genre;