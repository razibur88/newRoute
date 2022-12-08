import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Paginatiooo from "./Paginatiooo";
import "./api.css";

const ApiData = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);

  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const allPage = info.slice(firstPage, lastPage);

  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let next = () => {
    if (currentPage < info.length / perPage) {
      setCurrentPage((current) => current + 1);
    }
  };

  let prve = () => {
    if (currentPage > 1) {
      setCurrentPage((current) => current - 1);
    }
  };

  let getData = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setInfo(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Post allpost={allPage} />
      <Paginatiooo
        perPage={perPage}
        totalPage={info.length}
        paginate={paginate}
        next={next}
        currentPage={currentPage}
        prve={prve}
      />
    </div>
  );
};

export default ApiData;
