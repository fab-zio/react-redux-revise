import React, { useEffect } from 'react'; //second class is hooks to handle state and side effect in function components
import { connect } from 'react-redux';
import * as courseActions from '../../redux/action/courseActions';
import * as authorActions from '../../redux/action/authorActions';
// import { bindActionCreators } from 'redux'; //if u wanna remove this binder follow uncomment code 
import PropTypes from 'prop-types';




function ManageCoursePage({ courses, authors, loadCourses, loadAuthors }) {

    useEffect(() => {

        // const { courses, authors, loadCourses, loadAuthors } = this.props;
        // if (courses.length === 0) {
        //     loadCourses().catch(error => {
        //         alert('Loading courses failed due' + error)
        //     })
        // }

        // if (authors.length === 0) {
        //     loadAuthors().catch(error => {
        //         alert('Loading author failed due' + error)
        //     })
        // }

        if (courses.length === 0) {
            loadCourses().catch(error => {
                alert('Loading courses failed due' + error)
            })
        }

        if (authors.length === 0) {
            loadAuthors().catch(error => {
                alert('Loading author failed due' + error)
            })
        }
    })


    return (
        <>
            <h1>Manage Course</h1>
        </>
    )

}

ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    // actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
}


function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors
    };
}


// // OBJECT WAY
const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorActions.loadAuthors,
};


// function mapDispatchToProps(dispatch) {
//     return {
//         actions: {
//             loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//             loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
//         }
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

