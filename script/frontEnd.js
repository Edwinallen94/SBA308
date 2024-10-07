export function displayCat(catUrl) {
  const container = document.getElementById("cat-container");
  container.innerHTML = `<img src="${catUrl}" alt="Random Cat">`;
}
