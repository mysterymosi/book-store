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
	mutations: {},
	actions: {},
	getters: {
		authors(state) {
			if(state.authors.length > 0) return state.authors;
		}
	}
};

export default author;