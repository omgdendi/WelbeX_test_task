module.exports = class BlogError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static ChangingNotOwnedBlog() {
        return new BlogError(409, "Try to change not owned blog")
    }

    static BadRequest(message, errors = []) {
        return new BlogError(400, message, errors);
    }
}