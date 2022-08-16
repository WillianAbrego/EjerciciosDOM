import STRIP_KEY from "./stripe-keys.js";
//console.log(STRIP_KEY);
const d = document,
  $tacos = d.getElementById("tacos"),
  $template = d.getElementById("taco-template").content,
  $fragment = d.createDocumentFragment();

fetch("https://api.stripe.com/v1/products", {
  headers: {
    Authorization: `Bearer ${STRIP_KEY.secret}`,
  },
})
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });

fetch("https://api.stripe.com/v1/prices", {
  headers: {
    Authorization: `Bearer ${STRIP_KEY.secret}`,
  },
})
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });
