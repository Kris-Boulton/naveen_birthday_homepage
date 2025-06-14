/* -----------------------------
   Daily motivational messages
   ----------------------------- */

const messages = {
  "01-01": "A new year, a new chapter—you're the hero of every page.",
  "02-14": "Happy Valentine’s Day! My love only grows stronger. ❤️",
  "03-08": "Celebrating you on International Women’s Day—you inspire me daily.",
  "06-11": "Happy Birthday! The world became brighter the day you arrived.",
  "12-25": "Merry Christmas, my favourite gift is you!",
  // …add as many fixed dates as you like
};

function setDailyMessage() {
  const today = new Date();
  const key =
    `${String(today.getMonth() + 1).padStart(2, "0")}-` +
    `${String(today.getDate()).padStart(2, "0")}`;

  const message =
    messages[key] ||
    "Remember: you light up every room you enter, today and always.";
  document.getElementById("daily-message").textContent = message;
}

/* -----------------------------
   Footer year auto-update
   ----------------------------- */
function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  setDailyMessage();
  setYear();
});