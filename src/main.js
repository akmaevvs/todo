import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import uiComponents from "@/components/UI";
import modalComponents from "@/components/modals";
import templateComponents from "@/components";

let app;

if (!app) {
  app = createApp(App).use(store).use(router);
  app.config.globalProperties.axios = axios;

  modalComponents.forEach((component) => {
    app.component(component.name, component);
  });

  uiComponents.forEach((component) => {
    app.component(component.name, component);
  });

  templateComponents.forEach((component) => {
    app.component(component.name, component);
  });

  app.mount("#app");
}