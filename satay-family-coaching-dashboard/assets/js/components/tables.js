// tables.js
async function loadKeywordData() {
  const response = await fetch(
    "/satay-family-coaching-dashboard/data/keywords.json"
  );
  const data = await response.json();
  console.log("Keyword Data:", data);
}
document.addEventListener("DOMContentLoaded", loadKeywordData);
