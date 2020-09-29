<template>
    <div class="col-md-12 my-4">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">Author List</h5>
                <p class="card-text">There are currently {{ authorCount }} authors in the store.</p>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <!-- <th>Date</th> -->
                            <th>Delete Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="author in authors" :key="author.id">
                            <td>{{ author.id }}</td>
                            <td>{{ author.name }}</td>
                            <!-- <td>901-6206 Cras Av.</td> -->
                            <!-- <td>Apr 24, 2019</td> -->
                            <td><span @click="deleteAuthor(author.id)" class="badge badge-pill badge-danger">Delete</span></td>
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
        authors() {
        	return this.$store.getters['author/authors'];
        },

        authorCount() {
        	return this.$store.getters['author/authorCount'];
        }
    },

    methods: {
    	// delete a author
    	deleteAuthor(authorId) {
    		this.$store.commit("author/deleteAuthor", authorId);
    	}
    }
};
</script>

<style scoped>
.badge{
	cursor: pointer;
}
</style>