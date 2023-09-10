import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// receives state as first argument and original props passed to component as 
// second argument and any object returned is spread into the component to be accessible on it's props
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

// receives the dispatch and then any object returned is available on the props. when this function is passed in, there's no access to dispatch anymore, only the actions specified on the return object.
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
