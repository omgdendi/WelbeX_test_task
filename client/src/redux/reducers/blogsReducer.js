import {BlogAPI} from "../../api/BlogAPI";

const SET_BLOGS = "SET_BLOGS";
const ADD_BLOG = "ADD_BLOG";
const REMOVE_BLOG = "REMOVE_BLOG";

const initialState = {
    blogs: []
};

const blogsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_BLOGS:
            return {
                ...state,
                blogs: action.blogs
            };
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.blog]
            };
        case REMOVE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(b => b.id !== action.id)
            }
        default:
            return state;
    }
}

export const setBlogs = (blogs) => {
    return {
        type: SET_BLOGS,
        blogs
    }
}

export const addBlog = (blog) => {
    return {
        type: ADD_BLOG,
        blog
    }
}

export const removeBlog = (id) => {
    return {
        type: REMOVE_BLOG,
        id
    }
}

export const getBlogs = () => (dispatch) => {
    BlogAPI.getBlogs()
        .then(response => {
            if (response.status === 200) {
                dispatch(setBlogs(response.data));
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export const deleteBlog = (id) => (dispatch) => {
    BlogAPI.deleteBlog(id)
        .then(response => {
            if (response.status === 200) {
                dispatch(removeBlog(id));
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export default blogsReducer;