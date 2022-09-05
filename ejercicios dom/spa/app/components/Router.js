import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");
  let { hash } = location;
  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        //  d.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
        // console.log(html);
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");
    if (!query) return false;
    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
      },
    });
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Seccion del Contacto</h2>";
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        $main.innerHTML = Post(post);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";

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
