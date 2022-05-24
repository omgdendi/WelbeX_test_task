import {connect} from "react-redux";
import BlogList from "./BlogList";

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.blogs
    };
}

export default connect(mapStateToProps, {

})(BlogList);
