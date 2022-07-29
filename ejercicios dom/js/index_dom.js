import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import seachFilters from "./filtro_busqueda.js";
import getGeoLocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburgesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import resposiveTester from "./prueba_resposive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tem_oscuro.js";
import contactFormValidations from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/assets_alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jul 4, 2022 14:10:19", "Feliz Cumpleaños");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a
    href="https://www.youtube.com/watch?v=16geDhp5Xmg"
    target="_blank"
    rel="noopener"
  >Ver videos</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a
    href="https://goo.gl/maps/2nwBajWg1tZTcmsH6"
    target="_blank"
    rel="noopener"
  >Ver videos</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2825983096104!2d-89.2244339!3d13.7013266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330410eacae2d%3A0xf3bd10411c7f3afb!2sRotonda%20Divino%20Salvador%20del%20Mundo!5e0!3m2!1ses!2ssv!4v1657145488102!5m2!1ses!2ssv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  resposiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeoLocation("geolocation");
  seachFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
