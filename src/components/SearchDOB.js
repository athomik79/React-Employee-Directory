import React, { useContext } from "react";
import EmployeeAreaContext from "../utils/EmployeeAreaContext";

const SearchDOB = () => {
  const context = useContext(EmployeeAreaContext);

  return (
    <div className="searchbox">
       <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">
          DOB
          </span>
      </div>
      <input type="date" className="form-control"   onChange={e => context.handleSearchChange(e)}/>
      </div>
    </div>
  );
};
export default SearchDOB;