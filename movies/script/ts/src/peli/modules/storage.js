export class Storage {
    constructor() {
        this.id = 0;
        this.id = 1;
    }
    getData() {
        let pelis = JSON.parse(localStorage.getItem("movie"));
        if (!pelis || pelis.length <= 1) {
            pelis = [
                {
                    id: 0,
                    title: "Send me a mail ;)",
                    description: "edgarevegar04@gmail.com"
                }
            ];
            this.save(pelis);
            this.id = 1;
        }
        else
            this.id = pelis[pelis.length - 1].id + 1;
        return pelis;
    }
    getId() {
        return this.id;
    }
    save(data) {
        localStorage.setItem("movie", JSON.stringify(data));
    }
}
