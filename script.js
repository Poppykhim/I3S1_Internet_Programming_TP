// ==== Some setting values ====
const CANVAS_W = 800;
const CANVAS_H = 450;
const BALL_SPEED = 6; // try 1.5–2.5
const PADDLE_SPEED = 13; // try 3–5
const PADDLE_W = 120; // wider paddle helps beginners
const PADDLE_H = 12;

let score = 0;
let running = true;

// Ball & paddle
const ball = {
  x: CANVAS_W / 2,
  y: CANVAS_H / 2,
  r: 10,
  dx: BALL_SPEED,
  dy: BALL_SPEED,
};
const paddle = {
  x: CANVAS_W / 2 - PADDLE_W / 2,
  y: CANVAS_H - 40,
  w: PADDLE_W,
  h: PADDLE_H,
  speed: PADDLE_SPEED,
  dx: 0,
};

// === We should have Global Variables
// === to keep all the reference objects. So what are the referenced objects we should have?
// 1. A canvas constant
const canvas = document.getElementById("game");
// 2. A canvas' 2D context constant
const ctx = canvas.getContext("2d");
// 3. A score element, so we can update the score
const scoreEl = document.getElementById("score");
// 4. A restart button, so we can apply click on it
const restartBtn = document.getElementById("restart");
const highScoreEl = document.getElementById("highScore");

// Ensure canvas matches tunables (if you change in HTML, these still enforce)
canvas.width = CANVAS_W;
canvas.height = CANVAS_H;

// === We should define functions as well
// 1. A function to draw the ball and the paddle - draw() { .... }
function draw() {
  // Clear screen, to make the canvas blank so we can draw something new on it.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = "#facc15";
  ctx.fill();

  // Paddle
  ctx.fillStyle = "#4ade80";
  ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

  // If you lose the game, so message game over instead.
  if (!running) {
    ball.x = -300;
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.fillStyle = "#ffffff";
    ctx.font = "48px Poppins";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", CANVAS_W / 2, CANVAS_H / 2);
    ctx.font = "16px Poppins";
    ctx.fillText(
      "Click Restart to play again",
      CANVAS_W / 2,
      CANVAS_H / 2 + 35
    );
    if (score >= highScore) {
      ctx.fillText(
        "New High Score: " + highScore,
        CANVAS_W / 2,
        CANVAS_H / 2 + 65
      );
    } else {
      ctx.fillText(
        "Your Score: " + score + " Try again to beat High Score: " + highScore,
        CANVAS_W / 2,
        CANVAS_H / 2 + 65
      );
    }
  }
}
// 2. A function to move the paddle left/right - movePaddle() { .... }
function movePaddle() {
  // Make sure paddle stay in the same vertical position
  paddle.dx = 0;

  // let randomBounceTimer = 0; // track how long the fake bounce lasts
  // 🌀 Random bounce before paddle (5% chance)
  // const nearPaddle = ball.y + ball.r > paddle.y - 50 && ball.dy > 0;

  // if (nearPaddle && Math.random() < 0.05 && randomBounceTimer === 0) {
  //   console.log("⚡ Random fake bounce!");
  //   ball.dy = -Math.abs(ball.dy); // force upward
  //   if (Math.random() < 0.5) ball.dx *= -1; // left or right
  //   randomBounceTimer = 5; // stay in "fake bounce" mode for ~1 second
  // }

  // // Countdown until it should start falling again
  // if (randomBounceTimer > 0) {
  //   randomBounceTimer--;
  //   if (randomBounceTimer === 0) {
  //     ball.dy = Math.abs(ball.dy); // make the ball fall down again
  //     console.log("⬇️ Ball falling down again");
  //   }
  // }

  // If player press down on arrow left, move the paddle to the left
  // here is how you can move the paddle to the left:

  if (leftPressed) {
    paddle.dx = -paddle.speed;
  }

  // If player press down on arrow right, move the paddle to the right
  // here is how you can move the paddle to the right:
  if (rightPressed) {
    paddle.dx = paddle.speed;
  }

  paddle.x += paddle.dx;

  // clamp, make sure you can't move paddle outside the canvas:
  if (paddle.x < 0) paddle.x = 0;
  if (paddle.x + paddle.w > canvas.width) paddle.x = canvas.width - paddle.w;
}

// When a key is pressed down
// Track key state
let rightPressed = false;
let leftPressed = false;

// Detect key down
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    rightPressed = true;
  } else if (event.key === "ArrowLeft") {
    leftPressed = true;
  }
});

// Detect key up
document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight") {
    rightPressed = false;
  } else if (event.key === "ArrowLeft") {
    leftPressed = false;
  }
});
document.addEventListener("keypress", function (event) {
  console.log("Key pressed: " + event.key);
});

// 3. A function to move the ball, it bounces when touch the left/top/right wall of canvas - moveBall() { ..... }
function moveBall() {
  // These 2 lines of code are how your ball can be moved next
  // It depends on the value of dx and dy
  ball.x += ball.dx;
  ball.y += ball.dy;

  // left/right walls
  // Check if the ball reach the left/right wall, then
  if (ball.x + ball.r > canvas.width || ball.x - ball.r < 0) {
    ball.dx *= -1;
  }

  // top wall
  // Check if the ball reach top wall, then
  if (ball.y - ball.r < 0) {
    ball.dy *= -1;
  }

  if (ball.y + ball.r > canvas.height) {
    running = false;
  }
}
let highScore = 0;
// 4. A function to check collision with the paddle or miss - checkCollision() { .... }
function checkCollision() {
  const hitsPaddle =
    ball.y + ball.r >= paddle.y &&
    ball.x > paddle.x &&
    ball.x < paddle.x + paddle.w;

  if (hitsPaddle && ball.dy > 0) {
    ball.dy *= -1;
    score++;
    if (score < 10) {
      ball.dx *= 1.05;
      ball.dy *= 1.05;
    } else {
      ball.dx *= 1.02;
      ball.dy *= 1.02;
    }

    if (score > highScore) {
      highScore = score;
    }
    updateUI();
  }

  // Missed paddle
  // if the paddle miss the ball, then
  // running = false;
}
// 5. A function to update the score - updateUI() { ..... }
function updateUI() {
  scoreEl.textContent = score;
  highScoreEl.textContent = highScore;
}
restartBtn.addEventListener("click", () => {
  init();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    init();
  }
});

// === And the loop, to keep the game running
function init() {
  console.log("Game start pouk ah chkout lg tv");
  score = 0;
  running = true;
  ball.x = CANVAS_W / 2;
  ball.y = CANVAS_H / 2;
  ball.dx = BALL_SPEED;
  ball.dy = BALL_SPEED;
  paddle.x = CANVAS_W / 2 - PADDLE_W / 2;
  updateUI();
}

// === Loop ===
function loop() {
  if (running) {
    movePaddle();
    moveBall();
    checkCollision();
  }
  draw();
  requestAnimationFrame(loop);
}

// So we initialize the value
init();
// And then, we start the loop so everythign start running
loop();
