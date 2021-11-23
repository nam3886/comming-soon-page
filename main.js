const efcc_countdown = new countdown({
  target: ".countdown",
  dayWord: " days",
  hourWord: " hours",
  minWord: " minutes",
  secWord: " seconds",
});

const modalCountdown = new bootstrap.Modal(
  document.getElementById("modalCountdown"),
  {
    keyboard: false,
    backdrop: false,
  }
);
const elModalCountdown = document.getElementById("modalCountdown");
modalCountdown.show(elModalCountdown);
