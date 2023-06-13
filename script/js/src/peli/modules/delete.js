import { List } from "./list.js";
import { Storage } from "./storage.js";
export default function () {
    const storage = new Storage();
    const list = new List();
    let moviesStored = storage.getData();
    let moviesOnScreen = document.querySelectorAll("#moviesRow .cardArticle");
    moviesOnScreen.forEach(movie => {
        let deleteBtn = movie.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", function () {
            const movieId = deleteBtn.getAttribute("data-id");
            const newMovies = moviesStored.filter((movie) => movie.id !== parseInt(movieId));
            storage.save(newMovies);
            list.show(newMovies);
        });
    });
}
