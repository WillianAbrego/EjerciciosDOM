import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Title } from "./components/Title.js";
import { Loader } from "./components/Loader.js";
export function App() {
  //document.getElementById("root").innerHTML = `<h1>bienvenidos a spa</h1>`;
  const d = document,
    $root = d.getElementById("root");
  $root.appendChild(Title());
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
