//sound effects

const audio = new Audio("audio/referee-whistle-blow-gymnasium-6320.mp3");
const buttons = document.querySelectorAll("button");  //"coach-contact"

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
      }
    );
  }
);

const audio2 = new Audio("audio/basketball-90869.mp3");
const navbar = document.querySelectorAll("nav");

navbar.forEach(nav => {
  nav.addEventListener("click", () => {
    audio2.play();
  });
});

const audio3 = new Audio("audio/basketball-backboard-83558.mp3");
const ball_images = document.querySelectorAll(".img-ball");

ball_images.forEach(img_ball => {
  img_ball.addEventListener("click", () => {
    audio3.play();
  })
})

const audio4 = new Audio("audio/long-medium-swish-44324.mp3");
const swish_images = document.querySelectorAll(".img-swish");

swish_images.forEach(img_swish => {
  img_swish.addEventListener("click", () => {
    audio4.play();
  });
});

const audio5 = new Audio("audio/buzzerwav-14908.mp3");
const buzzer_images = document.querySelectorAll(".img-buzzer");

buzzer_images.forEach(img_buzzer => {
  img_buzzer.addEventListener("click", () => {
    audio5.play();
  });
});

const audio6 = new Audio("audio/yo-1-108117.mp3");
const player_images = document.querySelectorAll(".img-player");

player_images.forEach(img_player => {
  img_player.addEventListener("click", () => {
    audio6.play();
  });
});

//alert box

function coachContact() {
  alert('The head coach is not available right now, since he/she is preparing for a game.  Try again later, player.');
}

function settingsChange() {
  alert('Now is not the time to change strategies.  You will have to join the huddle later, player.');
}

