// Function to show off the random cat pic on the page

export function displayCat(catUrl) {
  const container = document.getElementById("cat-container"); // Finding the spot to drop the cat
  container.innerHTML = `<img src="${catUrl}" alt="Random Cat">`; // Displaying that cat, loud and clear
}
