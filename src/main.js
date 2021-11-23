import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/compat/app'
import { getDatabase } from 'firebase/database'
import uiComponents from '@/components/UI'
import modalComponents from "@/components/modals"
import templateComponents from "@/components"

const firebaseConfig = {
  apiKey: "AIzaSyARhp47cwj1J-sE-QjF_5vXx8974DMIyho",
  authDomain: "test-firebase-c5a50.firebaseapp.com",
  projectId: "test-firebase-c5a50",
  storageBucket: "test-firebase-c5a50.appspot.com",
  messagingSenderId: "512572473057",
  appId: "1:512572473057:web:d26b539200844ccaebc1a0"
};

firebase.initializeApp(firebaseConfig);

let app;



console.log('app', getDatabase());


firebase.auth().onAuthStateChanged((user) => {
  console.log(user);

  if (!app) {
    app = createApp(App).use(store).use(router)
    app.config.globalProperties.axios = axios

    modalComponents.forEach(component => {
      app.component(component.name, component)
    })


    uiComponents.forEach(component => {
      app.component(component.name, component)
    });

    templateComponents.forEach(component => {
      app.component(component.name, component)
    })

    app.mount('#app')
  }
});