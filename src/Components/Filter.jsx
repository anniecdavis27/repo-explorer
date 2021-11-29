import React, { useState } from "react";
import Repositories from "./Repositories";
import './style.css'

const Filter = ({ data }) => {
    //hook to set search parameter
  const [name, setName] = useState("");
  // hook to set search results to be displayed
  const [searchResults, setSearchResults] = useState([...data]);


  //function to handle seach term as the user updates the text and update the search results
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

  //function to reset state to the full list upon button click 
  const resetState = (e) => {
    e.preventDefault();
    setSearchResults([...data]);
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
