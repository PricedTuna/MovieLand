export class Storage{

   private id:number = 0;
   constructor(){
      this.id=1;
   }

   getData(): [object]{
      let pelis = JSON.parse(localStorage.getItem("movie"));

      if (!pelis || pelis.length <= 1) {
         pelis = [
            {
               id: 0,
               title: "Send me a mail ;)",
               description: "edgarevegar04@gmail.com"
            }
         ]

         this.save(pelis);
         this.id = 1;
      } else this.id = pelis[pelis.length-1].id +1

      return pelis;
   }

   getId():number {
      return this.id;
   }

   save(data:object){
      localStorage.setItem("movie", JSON.stringify(data))
   }
}