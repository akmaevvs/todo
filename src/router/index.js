import { createRouter, createWebHistory } from "vue-router";
import NoteList from "../views/NoteList.vue";
import CreateNote from "../views/CreateNote.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [{
    path: "/",
    name: "note-list",
    component: NoteList,
  },
  {
    path: "/create-note/:taskId?",
    name: "create-note",
    component: CreateNote,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "page-not-found",
    component: PageNotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;