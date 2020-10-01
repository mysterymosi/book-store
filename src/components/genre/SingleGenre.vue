<template>
    <div class="col-md-12 my-4">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">{{ genre.name }}</h5>
                <p class="card-text">There are currently {{ genreBookCount }} books under this genre.</p>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Delete Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in genre.books" :key="book._id">
                            <td>{{ book._id }}</td>
                            <td>{{ book.name }}</td>
                            <td>{{ book.quantity }}</td>
                            <td><span @click="deleteBook(book._id)" class="badge badge-pill badge-danger">Delete</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div> <!-- simple table -->
</template>

<script>
export default {
    data () {
        return {
            routeId: this.$route.params.id
        }
    },
	computed: {
        genre() {
            return  this.$store.getters['genre/getGenre'];
        },

        genreBookCount() {
            return this.$store.getters['genre/getGenreBookCount']
        }
    },

    methods: {
    	// delete a book
    	deleteBook(bookId) {
    		this.$store.dispatch("book/deleteBook", bookId)
                .then((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Delete successful");
                    }
                });
    	}
    },

    mounted() {
        console.log("route id: ", this.routeId);
        this.$store.dispatch("genre/getGenre", this.routeId)
            .then((err) => {
                if (err) {console.log(err)}
                else {console.log("genre loaded successful")}
            })
            .catch(err => console.log("err from mounted", err));
    }
};
</script>

<style scoped>
.badge{
	cursor: pointer;
}
</style>