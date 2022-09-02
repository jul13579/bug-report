import "./bootstrap";

import { createVuetify } from "vuetify/lib/framework.mjs";
import { createApp } from "vue";
import App from "./App.vue";

import "../css/app.css";

const vuetify = createVuetify();

const app = createApp(App);
app.use(vuetify);

app.mount("#app");