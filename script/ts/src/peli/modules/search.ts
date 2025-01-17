import { List } from "./list.js";
import { Storage } from "./storage.js";

export default function () {
   const storage: Storage = new Storage();
   const list: List = new List();

   let moviesStored = storage.getData();
   let searchMovieBtn = document.querySelector("#searchMovieBtn");

   searchMovieBtn.addEventListener("click", (e) => {
      e.preventDefault();

      let movieSearchInput: any = document.querySelector("#movieSearchInput");
      let movieToSearch = movieSearchInput.value;

      let moviesFiltered = moviesStored.filter((movie: any) => movie.title === movieToSearch);

      alert("No movie was found, please, type the exact title of the movie you want to search for.");

      (moviesFiltered.length <= 0) ? list.show(moviesStored) : list.show(moviesFiltered)

      movieSearchInput.value = ""
   })
}