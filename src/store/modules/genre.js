import Vue from "vue";
import axios from "axios";

const genre = {
	namespaced: true,
	state: {
		genres: [
			// { id: 1, name: "Thriller"},
			// { id: 2, name: "Drama"},
			// { id: 3, name: "Sci-fi"},
			// { id: 4, name: "Historical fiction"}
		]
	},
	mutations: {
		ADD_GENRE(state, genre) {
			state.genres.push(genre);
		},

		SET_GENRES(state, genres) {
			Vue.set(state, "genres", genres);
			console.log("Genre loaded");
		},

		DELETE_GENRE(state, genreId) {
			for (const i in state.genres) {
				if (state.genres[i]._id === genreId) {
					state.genres.splice(i, 1);
				}
			}
		}
	},
	actions: {
		addGenre({ commit }, genre) {
			return axios.post("http://localhost:3000/genres", genre)
				.then(result => {
					console.log("result genre: ", result);
					commit("ADD_GENRE", result.data);
				})
				.catch(err => {
					return err;
				});
		},

		loadGenres({ commit }) {
			return axios.get("http://localhost:3000/genres")
				.then(result => {
					commit("SET_GENRES", result.data);
				})
				.catch(err => {
					return err;
				});
		},

		deleteGenre({ commit }, genreId) {
			return axios.delete("http://localhost:3000/genres/" + genreId)
				.then(result => {
					commit("DELETE_GENRE", genreId);
					return result;
				})
				.catch(err => {
					return err;
				});
		}
	},
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