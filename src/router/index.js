import Vue from "vue";
import VueRouter from "vue-router";
import Book from "../views/Book.vue";
import BookList from "../components/book/BookList.vue";
import BookCreate from "../components/book/BookCreate.vue";
import GenreList from "../components/genre/GenreList.vue";
import GenreCreate from "../components/genre/GenreCreate.vue";
import AuthorList from "../components/author/AuthorList.vue";
import AuthorCreate from "../components/author/AuthorCreate.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "*",
        redirect: "/store/books"
    },
    {
        path: "/store",
        name: "Book",
        component: Book,
        children: [
          {
            path: "books",
            component: BookList
          },
          {
            path: "book_create",
            component: BookCreate
          },
          {
            path: "genres",
            component: GenreList
          },
          {
            path: "genre_create",
            component: GenreCreate
          },
          {
            path: "authors",
            component: AuthorList
          },
          {
            path: "author_create",
            component: AuthorCreate
          }
        ]
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
export default router;