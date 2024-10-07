//migrating the functions from the other files.

import { fetchRandomCat } from "./cats.js";
import { displayCat } from "./frontEnd.js";

//making sure the click button works
document.getElementById("new-cat").addEventListener("click", async () => {
  const catData = await fetchRandomCat();
  displayCat(catData);
});
