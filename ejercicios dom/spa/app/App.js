import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/Router.js";
export function App() {
  //document.getElementById("root").innerHTML = `<h1>bienvenidos a spa</h1>`;
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());
  Router();
}
// ajax({
//   url: api.CATEGORIES,
//   cbSuccess: (categories) => {
//     console.log(categories);
//   },
// });
