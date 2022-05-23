module.exports = class BlogDTO {
    id;
    message;

    constructor(model) {
        this.id = model.id;
        this.message = model.message;
    }
}