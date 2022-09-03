import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

export function Router() {
  const d = document,
    w = window,
    $posts = d.getElementById("posts");
  let { hash } = location;
  console.log(hash);

  $posts.innerHTML = null;

  if (!hash || hash === "#/") {
    $posts.innerHTML = "<h2>Seccion del Home</h2>";
  } else if (hash.includes("#/search")) {
    $posts.innerHTML = "<h2>Seccion del Buscador</h2>";
  } else if (hash === "#/contacto") {
    $posts.innerHTML = "<h2>Seccion del Contacto</h2>";
  } else {
    $posts.innerHTML =
      "<h2>aqui cargara el contenido del posr previamente seleccionado</h2>";
  }
  //   ajax({
  //     url: api.POSTS,
  //     cbSuccess: (posts) => {
  //       // console.log(posts);
  //       let html = "";
  //       posts.forEach((post) => (html += PostCard(post)));
  //       d.querySelector(".loader").style.display = "none";
  //       d.getElementById("posts").innerHTML = html;
  //       // console.log(html);
  //     },
  //   });
}
