<template>
    <div class="wrapper">
      <TheHeader />
      <TheSidebar />
      <main role="main" class="main-content">
        <router-view />
      </main>
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
export default {
  components: {
    TheHeader,
    TheSidebar
  }
}
</script>

<style>
@import "./assets/css/simplebar.css";
@import "./assets/css/feather.css";
@import "./assets/css/select2.css";
@import "./assets/css/dropzone.css";
@import "./assets/css/uppy.min.css";
@import "./assets/css/jquery.steps.css";
@import "./assets/css/jquery.timepicker.css";
@import "./assets/css/quill.snow.css";
@import "./assets/css/daterangepicker.css";
@import "./assets/css/app-light.css";
@import "./assets/css/app-dark.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
