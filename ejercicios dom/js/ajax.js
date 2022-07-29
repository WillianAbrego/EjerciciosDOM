(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      //   console.log(xhr);
      //   console.log("exito");
      let json = JSON.parse(xhr.responseText);
      //console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      // console.log("error");
      let message = xhr.statusText || "ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();
