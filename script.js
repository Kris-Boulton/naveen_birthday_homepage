/* -----------------------------
   Daily motivational messages
   ----------------------------- */

const messages = {
  "01-01": "A new year, a new chapter — you're the hero of every page in our book.",
  "02-14": "Happy Valentine’s Day! My love only grows stronger. ❤️",
  "02-16": "Happy relationship anniversary xx",
  "03-08": "Celebrating you on International Women’s Day — you inspire me daily =)",
  "05-12": "Happy me day!",
  "06-07": "Today we made a house a home — not with furniture, but with us. I never stopped feeling that first-night glow.",
  "06-15": "Happy Birthday! The world became brighter the day you arrived.",
  "06-16": "Happy Birthday! The world became brighter the day you arrived.",
  "06-17": "Happy Birthday! The world became brighter the day you arrived.",
  "06-21": "The longest day of the year — and still not enough hours to tell you how much I love you.",
  "07-02": "Half the year behind us, half still to come — and every part is better with you beside me.",
  "12-17": "The day I asked, and you said yes — to me, to us, to forever. I still can’t believe I get to live in that answer.",
  "12-18": "2022 - Best day ever!",
  "12-21": "Even on the shortest day of the year, your light fills every corner of my life.",
  "12-25": "Merry Christmas, my favourite gift is you!",
  // …add as many fixed dates as you like
};

function setDailyMessage() {
  const today = new Date();
  const key = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const messageElement = document.getElementById("daily-message");

  const defaultMessage = "Remember: you light up every room you enter, today and always.";
  const message = messages[key] || defaultMessage;

  messageElement.textContent = message;

  // Add or remove the special class
  if (messages[key]) {
    messageElement.classList.add("message--special");
  } else {
    messageElement.classList.remove("message--special");
  }
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

function setupDebugSelector() {
  const urlParams = new URLSearchParams(window.location.search);
  const debugMode = urlParams.get("debug") === "true";

  if (!debugMode) return; // Exit early if not in debug mode

  const selector = document.getElementById("photoSelect");
  if (!selector || !Array.isArray(photoList)) return;

  photoList.forEach((filename, i) => {
    const opt = document.createElement("option");
    opt.value = filename;
    opt.textContent = `${i + 1}: ${filename}`;
    selector.appendChild(opt);
  });

  selector.addEventListener("change", (e) => {
    const selected = e.target.value;
    if (!selected) return;
    const img = document.getElementById("daily-photo");
    img.src = `photos/${selected}`;
    img.alt = `Debug: ${selected}`;
  });

  // Show the dropdown now that it's active
  document.querySelector(".debug-tools").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  setDailyMessage();
  setDailyPhoto();
  setYear();
  setupDebugSelector(); // ← add this here
});

document.addEventListener("DOMContentLoaded", () => {
  setDailyMessage();
  setDailyPhoto();
  setYear();
});