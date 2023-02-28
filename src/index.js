import "./index.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ui from "./modules/ui";

library.add(fas, fab);

dom.i2svg();

document.addEventListener("DOMContentLoaded", ui.loadHomepage);
