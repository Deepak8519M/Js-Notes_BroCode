const dates = ["2024-1-10", "2025-2-20", "2026-5-10", "2029-6-19"];

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formatedDates = dates.map(formatDates);

console.log(formatedDates);
