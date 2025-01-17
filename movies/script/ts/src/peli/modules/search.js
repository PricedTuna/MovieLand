import { List } from "./list.js";
import { Storage } from "./storage.js";
export default function () {
    const storage = new Storage();
    const list = new List();
    let moviesStored = storage.getData();
    let searchMovieBtn = document.querySelector("#searchMovieBtn");
    searchMovieBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let movieSearchInput = document.querySelector("#movieSearchInput");
        let movieToSearch = movieSearchInput.value;
        let moviesFiltered = moviesStored.filter((movie) => movie.title === movieToSearch);
        (moviesFiltered.length <= 0) ? list.show(moviesStored) : list.show(moviesFiltered);
        movieSearchInput.value = "";
    });
}
