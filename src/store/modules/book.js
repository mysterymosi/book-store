const book = {
	namespaced: true,
	state: {
		books: [
			{ 
				id: 1, 
				name: "Paul's gambit",
				genreId: 2,
				authorId: 1,
				quantity: 4
			},

			{ 
				id: 2, 
				name: "Ghetto baby",
				genreId: 2,
				authorId: 4,
				quantity: 3
			},

			{ 
				id: 3, 
				name: "Southpaw",
				genreId: 3,
				authorId: 1,
				quantity: 1
			}
		]
	},
	mutations: {},
	actions: {},
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