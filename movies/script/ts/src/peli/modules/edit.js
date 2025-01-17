import { List } from "./list.js";
import { Storage } from "./storage.js";
export default function () {
    const storage = new Storage();
    const list = new List();
    let moviesStored = storage.getData();
    let moviesOnScreen = document.querySelectorAll("#moviesRow .cardArticle");
    moviesOnScreen.forEach((movie) => {
        let editBtn = movie.querySelector(".editBtn");
        editBtn.addEventListener("click", function () {
            const movieId = parseInt(editBtn.getAttribute("data-id"));
            editBtn.remove();
            movie.querySelector(".deleteBtn").remove();
            let buttonsContainer = movie.querySelector(".buttonsContainer");
            let editMovieForm = `
      <form>
         <div class="mb-3">
            <label for="movieTitleInput" class="form-label fs-5"><i class="fa-regular fa-pen-to-square"></i> Edit movie</label>
            <input type="text" class="form-control border border-3" id="movieEditedTitle"
               placeholder="movie name" value="${movie.querySelector('.card-title').textContent}">
         </div>
         <div class="form-floating mb-3">
            <textarea class="form-control border border-3" placeholder="Leave a comment here"
               id="movieEditedDescription" style="height: 100px">${movie.querySelector(".card-text").textContent}</textarea>
            <label for="movieDescriptionInput" class="fs-6 text-secondary">description</label>
         </div>
         <div class="d-grid gap-2">
            <button type="button" class="btn btn-outline-primary updateMovieBtn">Edit</button>
         </div>
      </form>
         `;
            buttonsContainer.innerHTML += editMovieForm;
            let updateMovieBtn = movie.querySelector(".updateMovieBtn");
            updateMovieBtn.addEventListener("click", (e) => {
                e.preventDefault();
                let index = moviesStored.findIndex((movie) => movie.id === movieId);
                moviesStored[index] = {
                    id: movieId,
                    title: movie.querySelector("#movieEditedDescription").value,
                    description: movie.querySelector("#movieEditedTitle").value
                };
                storage.save(moviesStored);
                list.show(moviesStored);
            });
        });
    });
}
