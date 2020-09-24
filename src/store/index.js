import Vue from "vue";
import Vuex from "vuex";
import book from "./modules/book";
import author from "./modules/author";
import genre from "./modules/genre";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
  	book,
  	author,
  	genre
  }
});
