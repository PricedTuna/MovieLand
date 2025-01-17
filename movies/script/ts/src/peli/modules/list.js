import deleteMovie from "./delete.js";
import editMovie from "./edit.js";
export class List {
    constructor() {
        this.moviesRow = document.querySelector("#moviesRow");
    }
    movieTemplate(movie) {
        return `<article class="col cardArticle" id="movie-${movie.id}">
      <div class="card shadow">
         <div class="card-body cardArticle">
            <div class="card-body d-flex flex-column justify-content-between">
               <h5 class="card-title">${movie.title}</h5>
               <p class="card-text">${movie.description}</p>
               <div class="d-grid gap-2 d-md-block buttonsContainer">
                  <button class="btn btn-outline-info editBtn" type="button" data-id="${movie.id}">Edit</button>
                  <button class="btn btn-outline-danger deleteBtn" type="button" data-id="${movie.id}">Delete</button>
               </div>
            </div>
         </div>
      </div>
   </article>`;
    }
    show(movies) {
        this.moviesRow.innerHTML = "";
        movies.forEach(movie => {
            this.moviesRow.innerHTML += this.movieTemplate(movie);
        });
        deleteMovie();
        editMovie();
    }
}
