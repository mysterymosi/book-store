<template>
    <div class="col-md-12">
        <div class="card shadow mb-4">
            <div class="card-header">
                <strong class="card-title">Add Book To Store</strong>
            </div>
            <div class="card-body">
                <form class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <label for="validationCustom01">Name</label>
                            <input v-model="book.name" type="text" class="form-control" id="validationCustom01" required>
                            <div class="valid-feedback"> Looks good! </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationCustom04">Genre</label>
                            <select v-model="book.genreId" class="custom-select" id="validationCustom04" required>
                            	<option selected disabled value="">Select a genre</option>
                                <option v-for="genre in genres" :key="genre.id" :value="genre._id">{{ genre.name }}</option>
                            </select>
                            <div class="invalid-feedback"> Please select a genre. </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validationCustom05">Quantity</label>
                            <input v-model="book.quantity" type="text" class="form-control" id="validationCustom05" required>
                            <div class="invalid-feedback"> Please provide a quantity. </div>
                        </div>
                    </div>
                    <div class="form-row">
                    	<div class="col-md-12 mb-3">
                            <label for="validationCustom04">Author</label>
                            <select v-model="book.authorId" class="custom-select" id="validationCustom04" required>
                            	<option selected disabled value="">Select an author</option>
                                <option v-for="author in authors" :key="author.id" :value="author._id">{{ author.name }}</option>
                            </select>
                            <div class="invalid-feedback"> Please select a author. </div>
                        </div>
                    </div>
                    <button @click.prevent="createBook" class="btn btn-primary" type="submit">Submit form</button>
                </form>
            </div> <!-- /.card-body -->
        </div> <!-- /.card -->
    </div> <!-- /.col -->
</template>

<script>
export default {
	data () {
		return {
			book: {
				name: "",
				genreId: "",
				authorId: "",
				quantity: ""
			}
		}
	},

	computed: {
		genres() {
			return this.$store.getters["genre/genres"];
		},

		authors() {
			return this.$store.getters["author/authors"];
		}
	},

	methods: {
		createBook() {
			const book = {
				name: this.book.name,
				genreId: this.book.genreId,
				authorId: this.book.authorId,
				quantity: this.book.quantity
			};
            console.log("genreId: ", this.book.genreId);
            console.log("authorId: ", this.book.authorId);
			this.$store.dispatch("book/addBook", book).then((err) => {
                if (err) {
                    console.log(err);
                } else {
                    this.book = {
                        name: "",
                        quantity: ""
                    };
                }
            });
		}
	},

    mounted () {
        this.$store.dispatch("genre/loadGenres")
            .then(err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("genres loaded successfully");
                }
            });

        this.$store.dispatch("author/loadAuthors")
            .then(err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("authors loaded");
                }
            })
    }
}	
</script>