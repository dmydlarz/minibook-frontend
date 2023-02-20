import React from "react";
import { useSelector } from "react-redux";
import { IUser } from "../interfaces/IUser";
import { ISearch } from "../interfaces/ISearch";

const SearchPage = () => {
  const results = useSelector(
    (data: { search: { search: ISearch[] } }) => data.search.search
  );

  return (
    <div className={"searchPage"}>
      <span>Search Result</span>
      <div className={"searchPage__container"}>
        {results.map((elem, index) => (
          <div className={"searchPage__result"}>
            <img src={elem.photo} alt={"icon"} />
            <div>
              <div>Title: {elem.title}</div>
              <div>Summary: {elem.summary}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
