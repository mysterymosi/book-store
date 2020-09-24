<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12">
                <h2 class="page-title">Books</h2>
                <div class="row">
                    <div class="col-md-12 my-4">
                        <div class="card shadow">
                            <div class="card-body">
                                <h5 class="card-title">Book List</h5>
                                <p class="card-text">There are currently {{ bookCount }} books in the store.</p>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Genre(s)</th>
                                            <th>Authors(s)</th>
                                            <!-- <th>Address</th> -->
                                            <!-- <th>Date</th> -->
                                            <!-- <th>Status</th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="book in books" :key="book.id">

                                            <td>{{ book.id }}</td>
                                            <td>{{ book.name }}</td>
                                            <td>{{ book.quantity }}</td>
                                            <td>{{ getGenre(book) }}</td>
                                            <td>{{ getAuthor(book) }}</td>
                                            <!-- <td>901-6206 Cras Av.</td> -->
                                            <!-- <td>Apr 24, 2019</td>
                                            <td><span class="badge badge-pill badge-warning">Hold</span></td> -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> <!-- simple table -->
                </div>
            </div>
        </div>
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        // HelloWorld
    },

    computed: {
        books() {
            return this.$store.getters['book/books'];
        },

        genres() {
        	return this.$store.getters['genre/genres'];
        },

        authors() {
        	return this.$store.getters['author/authors'];
        },

        bookCount() {
        	return this.$store.getters['book/bookCount'];
        }
    },

    mounted() {
    	console.log("bookciunt: ", this.bookCount);
    },

    methods: {
	// refactor later
    	// get genre via id
    	getGenre(book) {
    		let genreName;
    		for (const genre of this.genres) {
    			if (+book.genreId === +genre.id) {
    				genreName = genre.name;
    			}
    		}
    		return genreName;
    	},

    	// get author via id
    	getAuthor(book) {
    		let authorName;
    		this.authors.forEach((author) => {
    			if (+book.authorId === +author.id) {
    				authorName = author.name;
    			}
    		});
    		return authorName;
    	}
    }


};
</script>