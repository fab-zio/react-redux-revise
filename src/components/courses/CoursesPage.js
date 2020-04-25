import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/action/courseActions';
import * as authorActions from '../../redux/action/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    // constructor(props) {
    //     super(props)

    // this.state = {
    ///////////////////////
    // state = {
    //     course: {
    //         title: ''
    //     }
    // };
    /////////////////////////////
    // this.handleChange = this.handleChange.bind(this)

    // }
    // //////////////////
    // handleChange = (event) => {
    //     const course = { ... this.state.course, title: event.target.value };
    //     this.setState({ course: course });
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.actions.createCourse(this.state.course);  
    // };
    ///////////////////////////
    // handleChange(event) {
    //     console.log(event.target.value)
    //     const course = { ... this.state.course, title: event.target.value };
    //     this.setState({ course: course });
    // }

    // function handleChange() {
    //     console.log('this is clicked')
    // }
    componentDidMount() {
        const { courses, authors, actions } = this.props;
        if (courses.length === 0) {
            actions.loadCourses().catch(error => {
                alert('Loading courses failed' + error);
            });
        }
        if (authors.length === 0) {
            actions.loadAuthors().catch(error => {
                alert('Loading authors failed' + error);
            });
        }
    }
    render() {
        return (
            <>
                {/* <form onSubmit={this.handleSubmit}> */}
                <h2>Courses</h2>
                <CourseList courses={this.props.courses}></CourseList>
                {/* <h3>Add Courses</h3>
                <input
                    type='text'
                    // onChange={this.handleChange.bind(this)}
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />
                <input
                    type='submit'
                    value='Save'
                /> */}
                {/* {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))} */}
                {/* </form> */}
            </>
        )
    }
}

CoursesPage.propTypes = {

    // createCourse: PropTypes.func.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
}
function mapStateToProps(state) {
    return {
        courses:
            state.authors.length === 0
                ? []
                : state.courses.map(course => {
                    return {
                        ...course,
                        authorName: state.authors.find(a => a.id === course.authorId).name
                    };
                }),
        authors: state.authors
    };
}
function mapDispatchToProps(dispatch) {
    return {
        // createCourse: (course) => dispatch(courseActions.createCourse(course))
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);