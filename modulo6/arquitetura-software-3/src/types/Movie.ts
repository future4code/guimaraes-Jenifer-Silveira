export class Movie{
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private duration_in_minutes: string,
        private year_of_release: string,
    ) { }

    getId() {
        return this.id
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getDuration_in_minutes() {
        return this.duration_in_minutes
    }

    getYear_of_release() {
        return this.year_of_release
    }

    setId(newId: string){
        this.id = newId
    }

    setTitle( newTitle: string){
        this.title = newTitle
    }

    setDescription( newDescription: string){
        this.title = newDescription
    }

    
}