import { List } from "./list.js";
import { Storage } from "./storage.js";
export class Add {
    constructor() {
        this.storage = new Storage();
        this.list = new List();
        // DOM elements
        this.movieTitleInput = document.querySelector("#movieTitleInput");
        this.movieDescriptionInput = document.querySelector("#movieDescriptionInput");
        this.addMovieBtn = document.querySelector("#addMovieBtn");
    }
    addMovie() {
        this.addMovieBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let movies = this.storage.getData();
            let lastId = this.storage.getId();
            // save data
            let title = this.movieTitleInput.value;
            let description = this.movieDescriptionInput.value;
            if (title != "" || description != "") {
                let movie = {
                    id: lastId++,
                    title,
                    description
                };
                movies.push(movie);
                this.storage.save(movies);
                this.list.show(movies);
                this.movieTitleInput.value = "";
                this.movieDescriptionInput.value = "";
            }
            else
                alert("No se puede degar ningun campo vacio");
        });
    }
}
