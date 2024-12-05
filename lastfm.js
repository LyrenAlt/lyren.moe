const table = document.querySelector("#lastFmTable");
const urlLink = document.querySelector("#lastFmLink");
const albumCell = document.querySelector("#lastFmAlbum");

try {
  const response = await fetch("https://martiin.lima-city.de/lastfm/api.php");
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  const { artist, album, title, url } = data;

  urlLink.href = url;
  urlLink.textContent = `${artist} - ${title}`;
  albumCell.textContent = album;
} catch (error) {
  console.error(error);
  table.remove();
}
