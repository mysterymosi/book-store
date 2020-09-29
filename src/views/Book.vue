<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12">
                <h2 class="page-title">Book Store</h2>
                <div class="row">
                    <router-view />
                </div>
            </div>
        </div>
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
</template>
<script>
// @ is an alias to /src
// import BookList from "@/components/BookList.vue";

export default {
    name: "Home",
    components: {
        // BookList
    }


};
</script>