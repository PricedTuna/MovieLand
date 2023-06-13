import { List } from "./list.js";
import { Storage } from "./storage.js";

export class Add {

   private storage: Storage;
   private list: List;
   private movieTitleInput;
   private movieDescriptionInput;
   private addMovieBtn;

   constructor() {
      this.storage = new Storage();
      this.list = new List();


      // DOM elements
      this.movieTitleInput = document.querySelector("#movieTitleInput");
      this.movieDescriptionInput = document.querySelector("#movieDescriptionInput");
      this.addMovieBtn = document.querySelector("#addMovieBtn");
   }

   addMovie(): void {
      this.addMovieBtn.addEventListener("click", (e: any) => {
         e.preventDefault()

         let movies: [object] = this.storage.getData();
         let lastId: number = this.storage.getId();

         // save data
         let title: string = this.movieTitleInput.value;
         let description: string = this.movieDescriptionInput.value;

         if (title != "" || description != "") {
            let movie: object = {
               id: lastId++,
               title,
               description
            }
            movies.push(movie)

         this.storage.save(movies);
         this.list.show(movies);

         this.movieTitleInput.value = ""
         this.movieDescriptionInput.value = ""

         } else alert("No se puede degar ningun campo vacio")
      })
   }
}
