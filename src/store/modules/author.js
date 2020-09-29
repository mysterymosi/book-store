const author = {
	namespaced: true,
	state: {
		authors: [
			{ id: 1, name: "Stephen King" },
			{ id: 2, name: "Steve Harvey" },
			{ id: 3, name: "J.R.R Tolkein" },
			{ id: 4, name: "Bill Murray" }
		],
	},
	mutations: {
		addAuthor(state, author) {
			state.authors.push({ ...author, id: Math.random() });
		},

		deleteAuthor(state, authorId) {
			for (const i in state.authors) {
				if (+state.authors[i].id === +authorId) {
					state.authors.splice(i, 1);
				}
			}
		}
	},
	actions: {},
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