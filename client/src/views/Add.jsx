import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPages } from "../actions";

function Add() {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const [values, setValues] = React.useState({
    authorName: "",
    authorEmail: "",
    title: "",
    content: "",
    categories: ["1"]
  });

  function handleChange(e) {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/pages', values)
    .then(response => {
      dispatch(getPages())
      push(response.data.route)
    })
  }
  return (
    <>
      <h3>Add a Page</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 control-label">
            Author
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.authorName} name="authorName" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="col-sm-2 control-label">
            Author Email
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.authorEmail} name="authorEmail" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">
            Page Title
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.title} name="title" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="col-sm-2 control-label">
            Content
          </label>
          <div className="col-sm-10">
            <textarea onChange={handleChange} value={values.content} name="content" className="form-control"></textarea>
          </div>
        </div>
        <div className="form-group">
          <p>
            {/* {"Categorías:"}
            <br />
            <label>
              <input type="checkbox" name="categories" value="1" />
              Autos
            </label>
            <br />
            <label>
              <input type="checkbox" name="categories" value="2" /> Deportes
            </label>
            <br />
            <label>
              <input type="checkbox" name="categories" value="3" /> Videojuegos
            </label> */}
          </p>
        </div>
        <div className="col-sm-offset-2 col-sm-10">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px", float: "right" }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default Add;
