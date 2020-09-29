import Vue from "vue";
import axios from "axios";

const book = {
	namespaced: true,
	state: {
		books: [
			// { 
			// 	id: 1, 
			// 	name: "Paul's gambit",
			// 	genreId: 2,
			// 	authorId: 1,
			// 	quantity: 4
			// },

			// { 
			// 	id: 2, 
			// 	name: "Ghetto baby",
			// 	genreId: 2,
			// 	authorId: 4,
			// 	quantity: 3
			// },

			// { 
			// 	id: 3, 
			// 	name: "Southpaw",
			// 	genreId: 3,
			// 	authorId: 1,
			// 	quantity: 1
			// }
		]
	},

	mutations: {
		ADD_BOOK(state, book) {
			state.books.push(book);
			console.log("book pushed");
		},

		SET_BOOKS(state, books) {
			// setting     books to books
			Vue.set(state, "books", books);
			console.log("books set");
		},

		DELETE_BOOK(state, bookId) {
			console.log(bookId);
			for(const i in state.books) {
				if (state.books[i]._id === bookId) {
					state.books.splice(i, 1);
				}
			}
		}
	},
	
	actions: {
		addBook ({ commit }, payload) {
			axios.post("http://localhost:3000/books", payload)
				.then(result => {
					console.log("result: ", result.data);
					commit("ADD_BOOK", result.data);
				})
				.catch(err => {
					return err;
				});
		},

		loadBooks ({ commit }) {
			return axios.get("http://localhost:3000/books")
				.then(result => {
					console.log("bookdata: ", result.data.books);
					commit("SET_BOOKS", result.data.books);
				})
				.catch(err => {
					console.log("error from lb",err);
					return err;
				});
		},

		deleteBook ({ commit }, bookId) {
			return axios.delete("http://localhost:3000/books/" + bookId)
				.then(result => {
					console.log("delete result: ", result);
					commit("DELETE_BOOK", bookId);
				})
				.catch(err => {
					return err;
				});
		}
	},
	getters: {
		books(state) {
			if(state.books.length > 0) return state.books;
		},

		bookCount(state) {
			if (state.books.length > 0) return state.books.length;
		}
	}
};

export default book;