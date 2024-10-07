import { fetchRandomCat } from "./cats.js";
import { displayCat } from "./frontEnd.js";

document.getElementById("new-cat").addEventListener("click", async () => {
  const catData = await fetchRandomCat();
  displayCat(catData);
});
