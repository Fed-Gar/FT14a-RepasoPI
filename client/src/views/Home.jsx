import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPages } from "../actions";

function Home() {
  const pages = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);
  return (
    <>
      <h3>Pages</h3>
      <hr />
      <ul className="list-unstyled">
        {pages.map((page) => (
          <React.Fragment key={page.id}>
            <Link to={page.route}>
              <h3>{page.title}</h3>
            </Link>
            <h4>Categories</h4>
            {page.categories.map((category) => (
              <p key={category.id}>{category.name}</p>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default Home;
