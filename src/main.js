import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/global.scss";

import { Icon } from "@altipla/fa6-icon";
import "./icons";

let app = createApp(App);
app.component(Icon.name, Icon);
app.mount("#app");
