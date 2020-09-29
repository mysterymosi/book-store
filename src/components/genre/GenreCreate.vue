<template>
    <div class="col-md-12">
        <div class="card shadow mb-4">
            <div class="card-header">
                <strong class="card-title">Add Genre To Store</strong>
            </div>
            <div class="card-body">
                <form class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <label for="validationCustom01">Name</label>
                            <input v-model="genre.name" type="text" class="form-control" id="validationCustom01" required>
                            <div class="valid-feedback"> Looks good! </div>
                        </div>
                    </div>
                    <button @click.prevent="createGenre" class="btn btn-primary" type="submit">Submit form</button>
                </form>
            </div> <!-- /.card-body -->
        </div> <!-- /.card -->
    </div> <!-- /.col -->
</template>

<script>
export default {
	data () {
		return {
			genre: {
				name: "",
			}
		}
	},

	methods: {
		createGenre() {
			this.$store.dispatch("genre/addGenre", { name: this.genre.name })
                .then(data => {
                    console.log(data);
                    this.$router.replace({ path: "/store/genres" });
                    this.genre = {
                        name: ""
                    };
                });
		}
	}
}	
</script>