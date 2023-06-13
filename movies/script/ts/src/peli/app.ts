import { Add } from "./modules/add.js";
import { List } from "./modules/list.js";
import { Storage } from "./modules/storage.js";
import searchMovie from "./modules/search.js"

export default class App{

   private add:Add;
   private list:List;
   private storage:Storage;

   constructor(){
      this.add = new Add();
      this.list = new List();
      this.storage = new Storage()
   }


   load(){
      // Add movie
      this.add.addMovie();
      
      // read movies
      const movies = this.storage.getData();
      this.list.show(movies)

      // search movies
      searchMovie();
   }
}