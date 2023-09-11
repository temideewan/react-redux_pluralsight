import * as types from "./actionTypes";
import * as CourseApi from "../../api/courseApi";
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return CourseApi.getCourses()
      .then((courses) => { 
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((err) => {
        throw err;
      });
  };
}
