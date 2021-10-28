const selection = document.querySelector("#moods");
const body = document.querySelector("body");

selection.addEventListener("change", function (e) {
  const mood = e.target.value;
  if (mood === "happy") {
    body.classList.add("happy");
    body.classList.remove("sad");
    body.classList.remove("passionate");
  } else if (mood === "sad") {
    body.classList.add("sad");
    body.classList.remove("happy");
    body.classList.remove("passionate");
  } else if (mood === "passionate") {
    body.classList.add("passionate");
    body.classList.remove("happy");
    body.classList.remove("sad");
  }
});
