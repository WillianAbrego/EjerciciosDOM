import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";
export function App() {
  //document.getElementById("root").innerHTML = `<h1>bienvenidos a spa</h1>`;
  const d = document,
    $root = d.getElementById("root");
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  Router();
  InfiniteScroll();
}
// ajax({
//   url: api.CATEGORIES,
//   cbSuccess: (categories) => {
//     console.log(categories);
//   },
// });
