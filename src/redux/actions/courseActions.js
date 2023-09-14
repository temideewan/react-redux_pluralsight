import * as types from "./actionTypes";
import * as CourseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
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
export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

// this is a thunk that returns a function with the dispatch bound to it.
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return CourseApi.getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((err) => {
        dispatch(apiCallError(err));
        throw err;
      });
  };
}
export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return CourseApi.saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((err) => {
        dispatch(apiCallError(err));
        throw err;
      });
  };
}

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course));

    return CourseApi.deleteCourse(course.id);
  };
}
