import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPage, getPage } from "../actions";

function Page() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const { urlTitle } = useParams();
  // cuando se monta la pagina hace el fetch
  useEffect(() => {
    dispatch(getPage(urlTitle));
    return () => dispatch(clearPage())
  }, [urlTitle, dispatch]);
  console.log(page)
  return (
    <div>
      {page ? (
        <>
          <h3>{page.title}</h3>
          <hr />
          <div className="page-body">{page.content}</div>
          <hr />
          <a href="PLACEHOLDER_URL_TITLE/edit" className="btn btn-primary">
            EDIT
          </a>
          <a href="PLACEHOLDER_URL_TITLE/delete" className="btn btn-danger">
            DELETE
          </a>
        </>
      ) : page === undefined ? (
        <div>Cargando...</div>
      ) : (
        <h1>Pagina no encontrada</h1>
      )}
    </div>
  );
}

export default Page;
