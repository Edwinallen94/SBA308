//// Function to fetch that random cat pic from the API
export async function fetchRandomCat() {
  try {
    // fetching from the cat api eithout delays
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    //catching the data
    const data = await response.json();

    //finally passing back the cat pic url
    return data[0].url;
  } catch (error) {
    //catching the erros
    console.error("Error fetching cat data:", error);
  }
}
