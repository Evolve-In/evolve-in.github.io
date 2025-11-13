<<<<<<< HEAD
// 🌙 Ramadan 2026 Countdown Script
=======
// 🌙 Ramadan 2026 Countdown Script (Stable Persistent Version)
>>>>>>> bc495cb (FIX: fixed the path for "/program/deen/" and fixed the countdown glitch)
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".ramadan-banner");
  const closeBtn = document.querySelector(".close-btn");
  const countdown = document.querySelector(".countdown");

  // Ramadan 2026 start time (your local timezone)
  const ramadanStart = new Date("February 18, 2026 05:14:00").getTime();

  // Local storage keys
  const dismissKey = "ramadanBannerDismissed";
  const dismissTimeKey = "ramadanBannerDismissedTime";
<<<<<<< HEAD

  // ---- Check dismissal state ----
  const dismissed = localStorage.getItem(dismissKey);
  const dismissedTime = localStorage.getItem(dismissTimeKey);

  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;

  // If dismissed and less than 24 hours ago, keep hidden
  if (dismissed === "true" && dismissedTime && now - parseInt(dismissedTime, 10) < twentyFourHours) {
=======
  const dismissDuration = 12 * 60 * 60 * 1000; // 12 hours (change to 24 if you want)

  // ---- Check if dismissed ----
  const dismissed = localStorage.getItem(dismissKey) === "true";
  const dismissedTime = parseInt(localStorage.getItem(dismissTimeKey), 10) || 0;
  const now = Date.now();

  // Only show if not dismissed within the time window
  if (dismissed && now - dismissedTime < dismissDuration) {
>>>>>>> bc495cb (FIX: fixed the path for "/program/deen/" and fixed the countdown glitch)
    banner.classList.add("hidden");
  } else {
    banner.classList.remove("hidden");
    localStorage.removeItem(dismissKey);
    localStorage.removeItem(dismissTimeKey);
  }

  // ---- Countdown update every second ----
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = ramadanStart - now;

    if (distance <= 0) {
      countdown.innerHTML = "<div><span>🌙</span><small>Ramadan Mubarak!</small></div>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
      <div><span>${days}</span><small>Days</small></div>
      <div><span>${hours}</span><small>Hours</small></div>
      <div><span>${minutes}</span><small>Minutes</small></div>
      <div><span>${seconds}</span><small>Seconds</small></div>
    `;
    countdown.classList.add("ready");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ---- Close button behavior ----
  closeBtn.addEventListener("click", () => {
    banner.classList.add("hidden");
    localStorage.setItem(dismissKey, "true");
    localStorage.setItem(dismissTimeKey, Date.now().toString());
  });

<<<<<<< HEAD
  // ---- Reset behavior (Ctrl + Shift + R / Hard reload) ----
  window.addEventListener("beforeunload", () => {
    try {
      // Detect hard reload: performance.navigation is deprecated, but still supported
      if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // Clear dismissal data on hard reload only
=======
  // ---- Optional: Hard reload (Ctrl + Shift + R) resets ----
  window.addEventListener("beforeunload", (event) => {
    try {
      const navEntries = performance.getEntriesByType("navigation");
      if (navEntries.length && navEntries[0].type === "reload" && event.ctrlKey && event.shiftKey) {
>>>>>>> bc495cb (FIX: fixed the path for "/program/deen/" and fixed the countdown glitch)
        localStorage.removeItem(dismissKey);
        localStorage.removeItem(dismissTimeKey);
      }
    } catch (e) {
<<<<<<< HEAD
      // Fallback (no crash)
=======
      // ignore safely
>>>>>>> bc495cb (FIX: fixed the path for "/program/deen/" and fixed the countdown glitch)
    }
  });
});
