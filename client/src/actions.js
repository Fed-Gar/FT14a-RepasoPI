import axios from "axios";

export const SET_PAGES = "SET_PAGES"
export const SET_PAGE = "SET_PAGE"

export function getPages() {
  return (dispatch) => {
    axios.get("/api/pages").then((response) => {
      dispatch({ type: SET_PAGES, payload: response.data });
    });
  }
}
export function getPage(urlTitle) {
  return (dispatch) => {
    axios.get(`/api/pages/${urlTitle}`)
      .then((response) => {
        dispatch({ type: SET_PAGE, payload: response.data })
      })
      .catch(error => {
        if (error.response?.status) {
          if (error.response.status === 404) {
            return dispatch({ type: SET_PAGE, payload: null })
          }
        }
        alert("Ups!!! 😥")
      })
  }
}

export function clearPage() {
  return { type: SET_PAGE, payload: undefined }
}
