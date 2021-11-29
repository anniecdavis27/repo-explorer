import React, { useState } from "react";
import Repositories from "./Repositories";
import './style.css'

const Filter = ({ data }) => {
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState([...data]);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    let results = data.filter((item) => {
      if(item.name.includes(name)) {
          return item.name
      };
    });
    setSearchResults(results);
  };

  const resetState = (e) => {
    e.preventDefault();
    setSearchResults([...data]);
    //console.log('clicked')
  };

  return (
    <>
      <div>
        <form>
          <label htmlFor="findRepo" className='label'>Filter by Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={handleChange}
            id="findRepo"
          />
          <br />
          <button onClick={resetState}>See All Repositories</button>
        </form>
        <Repositories data={data} searchResults={searchResults} />
      </div>
    </>
  );
};

export default Filter;
