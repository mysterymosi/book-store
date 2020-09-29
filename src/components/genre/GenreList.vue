<template>
    <div class="col-md-12 my-4">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">Genre List</h5>
                <p class="card-text">There are currently {{ genreCount }} genres in the store.</p>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <!-- <th>Date</th> -->
                            <th>Delete Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="genre in genres" :key="genre.id">
                            <td>{{ genre._id }}</td>
                            <td>{{ genre.name }}</td>
                            <!-- <td>901-6206 Cras Av.</td> -->
                            <!-- <td>Apr 24, 2019</td> -->
                            <td><span @click="deleteGenre(genre._id)" class="badge badge-pill badge-danger">Delete</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div> <!-- simple table -->
</template>

<script>
export default {
	computed: {
        genres() {
        	return this.$store.getters['genre/genres'];
        },

        genreCount() {
        	return this.$store.getters['genre/genreCount'];
        }
    },

    methods: {
    	// delete a genre
    	deleteGenre(genreId) {
    		this.$store.dispatch("genre/deleteGenre", genreId)
                .then(err => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Genre deleted successfully");
                    }
                });
    	}
    },

    mounted() {
        this.$store.dispatch("genre/loadGenres")
            .then(err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("genres loaded successfully");
                }
            });
    }
};
</script>

<style scoped>
.badge{
	cursor: pointer;
}
</style>