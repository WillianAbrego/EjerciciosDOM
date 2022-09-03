export function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `
  <a href="#/">Home</a>
  <spam></spam>
  <a href="#/search">Busqueda</a>
  <spam></spam>
  <a href="#/contacto">Contacto</a>
  <spam></spam>
  `;
  return $menu;
}
