module.exports = class BlogError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static DeletingNotOwnedBlog() {
        return new BlogError(409, "Попытка удалить непринадлежащий пользователю блог")
    }

    static BadRequest(message, errors = []) {
        return new BlogError(400, message, errors);
    }
}