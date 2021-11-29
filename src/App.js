import React, {useEffect, useState} from 'react';
import './App.css';
import Filter from './Components/Filter';
import axios from 'axios';

function App() {

  //hook to set state of incoming repository data from the github api
  const [data, setData] = useState([])

  //UseEffect hook to render repo data from the api. Uses two axios calls to bypass the fact that the github api only displays 30 results at a time.
  useEffect(() => {
    let allData = []
    const org = 'faradayio'
    const dataUrl = `https://api.github.com/orgs/${org}/repos?per_page=100&page=1`
    const dataUrlTwo = `https://api.github.com/orgs/${org}/repos?per_page=100&page=2`
    const makeApiCall = async () => {
      try {
        const response = await axios(dataUrl);
        response.data.map((i) => {
          allData.push(i)
        });
      } catch (err) {
        console.error(err);
      }
    }
    makeApiCall()
    const makeAnotherApiCall = async () => {
      try {
        const response = await axios(dataUrlTwo);
        response.data.map((i) => {
          allData.push(i)
        });
      } catch (err) {
        console.error(err);
      }
    }
    makeAnotherApiCall()
    setData(allData)
  }, [])

  if (!data === 0) {
    return <p>...loading</p>;
  }

  return (
    <div className="App">
      <h1>Faraday Repository Explorer</h1>
      <Filter data={data} />
    </div>
  );
}

export default App;
