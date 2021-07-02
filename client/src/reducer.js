import { SET_PAGES, SET_PAGE } from "./actions"

const initialState = {
  pages: [],
  page: undefined
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PAGES: return {
      ...state,
      pages: payload
    }
    case SET_PAGE: return {
      ...state,
      page: payload
    }
    default: return state
  }
}