const d = document;
let x = 0,
  y = 0;
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  //  console.log(e.keyCode);
  // console.log(limitBall, limitStage);
  // const move = (direction) => {
  //   $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
  // };
  switch (e.keyCode) {
    case 37:
      //  move("left");
      if (limitBall.left > limitStage.left) {
        e.preventDefault();
        x--;
      }

      break;
    case 38:
      //move("up");
      if (limitBall.top > limitStage.top) {
        e.preventDefault();
        y--;
      }

      break;
    case 39:
      //move("right");
      if (limitBall.right < limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      //move("down");
      if (limitBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }

      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
export function shortcuts(e) {
  // console.log(e);
  // console.log(e.type);
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}
