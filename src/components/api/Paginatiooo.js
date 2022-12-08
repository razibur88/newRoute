import React from "react";
import "./api.css";
import { Pagination } from "react-bootstrap";

const Paginatiooo = ({
  perPage,
  totalPage,
  paginate,
  next,
  prve,
  currentPage,
}) => {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <Pagination>
        <Pagination.First onClick={prve} />
        {pageNumber.map((item) => (
          <Pagination.Item
            className={currentPage == item ? "active" : ""}
            onClick={() => paginate(item)}
          >
            {item}
          </Pagination.Item>
        ))}

        <Pagination.Last onClick={next} />
      </Pagination>
    </div>
  );
};

export default Paginatiooo;

let active = {
  color: "red",
};
