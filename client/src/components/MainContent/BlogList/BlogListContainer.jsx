import {connect} from "react-redux";
import BlogList from "./BlogList";

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.blogs,
        user: state.auth.user
    };
}

export default connect(mapStateToProps, {

})(BlogList);
