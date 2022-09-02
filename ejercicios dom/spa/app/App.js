import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
export function App() {
  //document.getElementById("root").innerHTML = `<h1>bienvenidos a spa</h1>`;
  const d = document,
    $root = d.getElementById("root");
  $root.appendChild(Header());
  $root.appendChild(Loader());
}

// ajax({
//   url: api.POSTS,
//   cbSuccess: (posts) => {
//     console.log(posts);
//   },
// });

// ajax({
//   url: api.CATEGORIES,
//   cbSuccess: (categories) => {
//     console.log(categories);
//   },
// });
