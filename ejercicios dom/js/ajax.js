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

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //   //console.log(res);
    //   return res.ok ? res.json() : Promise.reject(res);
    // })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      // $fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //  console.log(err);
      let message = err.statusText || "ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("esto se ejecutara siempre");
    });
})();

(() => {
  const $fetch_async = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/user"),
        json = await res.json();
      //if(!res.ok)throw new Error("ocurrio un error al solicitar los datos")
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch_async.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "ocurrio un error";
      $fetch_async.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
    }
  }

  getData();
})();
