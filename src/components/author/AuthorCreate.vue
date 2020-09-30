<template>
    <div class="col-md-12">
        <div class="card shadow mb-4">
            <div class="card-header">
                <strong class="card-title">Add Author To Store</strong>
            </div>
            <div class="card-body">
                <form class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <label for="validationCustom01">Name</label>
                            <input v-model="author.name" type="text" class="form-control" id="validationCustom01" required>
                            <div class="valid-feedback"> Looks good! </div>
                        </div>
                    </div>
                    <button @click.prevent="createAuthor" class="btn btn-primary" type="submit">Submit form</button>
                </form>
            </div> <!-- /.card-body -->
        </div> <!-- /.card -->
    </div> <!-- /.col -->
</template>

<script>
export default {
	data () {
		return {
			author: {
				name: "",
			}
		}
	},

	methods: {
		createAuthor() {
			this.$store.dispatch("author/addAuthor", { name: this.author.name })
                .then((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Author added");
                    }
                });
            console.log("author: ", this.author.name);
		}
	}
}	
</script>