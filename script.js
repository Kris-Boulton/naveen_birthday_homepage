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

function setDailyPhoto() {
  console.log("photoList:", photoList);
  if (!Array.isArray(photoList) || photoList.length === 0) return;

  const today = new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / 86400000
  );
  const index = dayOfYear % photoList.length;
  const chosenPhoto = photoList[index];

  const img = document.getElementById("daily-photo");
  img.src = `photos/${chosenPhoto}`;
  img.alt = `Memory ${index + 1}`;
}

document.addEventListener("DOMContentLoaded", () => {
  setDailyMessage();
  setDailyPhoto();
  setYear();
});