import Vue from "vue";
import axios from "axios";

const author = {
	namespaced: true,
	state: {
		authors: [
			// { id: 1, name: "Stephen King" },
			// { id: 2, name: "Steve Harvey" },
			// { id: 3, name: "J.R.R Tolkein" },
			// { id: 4, name: "Bill Murray" }
		],
	},
	mutations: {
		ADD_AUTHOR(state, author) {
			state.authors.push(author);
		},

		DELETE_AUTHOR(state, authorId) {
			for (const i in state.authors) {
				if (state.authors[i]._id === authorId) {
					state.authors.splice(i, 1);
				}
			}
		},

		SET_AUTHORS(state, authors) {
			Vue.set(state, "authors", authors);
		}
	},
	actions: {
		addAuthor ({ commit }, author) {
			return axios.post("http://localhost:3000/authors", author)
				.then(result => {
					console.log("author data: ", result.data);
					commit("ADD_AUTHOR", result.data);
				})
				.catch(err => {
					return err;
				});
		},

		loadAuthors({ commit }) {
			return axios.get("http://localhost:3000/authors")
				.then(result => {
					console.log("authors: ", result.data);
					commit("SET_AUTHORS", result.data);
				})
				.catch(err => {
					return err;
				});
		},

		deleteAuthor({ commit }, authorId) {
			return axios.delete("http://localhost:3000/authors/" + authorId)
				.then((result) => {
					commit("DELETE_AUTHOR", authorId);
					console.log("deleted? ", result);
				})
				.catch(err => {
					return err;
				});
		}
	},
	getters: {
		authors(state) {
			if(state.authors.length > 0) return state.authors;
		},

		authorCount(state) {
			if(state.authors.length > 0) return state.authors.length;
		}
	}
};

export default author;