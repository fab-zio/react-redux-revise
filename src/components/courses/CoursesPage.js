import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/action/courseActions';
import PropTypes from 'prop-types;'
//import { bindActionCreators } from "redux";

class CoursePage extends React.Component {
    // constructor(props) {
    //     super(props)

    // this.state = {
    state = {
        course: {
            title: ''
        }
    };
    // this.handleChange = this.handleChange.bind(this)

    // }
    handleChange = (event) => {
        const course = { ... this.state.course, title: event.target.value };
        this.setState({ course: course });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(courseActions.createCourse(this.state.course))
        // alert(this.state.course.title)
    }
    // handleChange(event) {
    //     console.log(event.target.value)
    //     const course = { ... this.state.course, title: event.target.value };
    //     this.setState({ course: course });
    // }

    // function handleChange() {
    //     console.log('this is clicked')
    // }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Courses</h3>
                <input
                    type='text'
                    // onChange={this.handleChange.bind(this)}
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />
                <input
                    type='submit'
                    value='Save'
                />
            </form>
        )
    }
}

CoursesPage.PropTypes = {
    dispatch: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursePage);