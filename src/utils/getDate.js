export default function getDate() {
  let currentYear = new Date().getFullYear();
  currentYear = currentYear.toString().slice(2, 4);
  return currentYear;
}
