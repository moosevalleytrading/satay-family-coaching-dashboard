// calendar.js
async function loadContentCalendarData() {
  const response = await fetch(
    "/satay-family-coaching-dashboard/data/content-calendar.json"
  );
  const data = await response.json();
  console.log("Content Calendar Data:", data);
}
document.addEventListener("DOMContentLoaded", loadContentCalendarData);
