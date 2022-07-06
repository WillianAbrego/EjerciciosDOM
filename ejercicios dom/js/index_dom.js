import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tem_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/assets_alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jul 4, 2022 14:10:19", "Feliz Cumpleaños");
  scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
