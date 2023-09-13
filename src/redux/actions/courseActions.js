import * as types from "./actionTypes";
import * as CourseApi from "../../api/courseApi";
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}
export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}
export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

// this is a thunk that returns a function with the dispatch bound to it.
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
export function saveCourse(course) {
  return function (dispatch) {
    return CourseApi.saveCourse(course)
      .then((savedCourse) => { 
        course.id?
        dispatch(updateCourseSuccess(savedCourse)):
        dispatch(createCourseSuccess(savedCourse));
      })
      .catch((err) => {
        throw err;
      });
  };
}
