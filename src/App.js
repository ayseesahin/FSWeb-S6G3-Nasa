import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import OneComponent from "./components/OneComponent";

function App() {
  const [nasaData, setNasaData] = useState();
  // const [dataPicker, setDataPicker] = useState(new Date("2022-12-31"));

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2010-06-04",
        {
          params: {
            api_key: "wW4klK2HSiFYDP3utuSnAGbcWTdzaMau7pbCd9pG",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        {nasaData ? (
          <div>
            <img src={nasaData.url} alt="NASA" />
            <h1>{nasaData.title}</h1>
            <p>{nasaData.explanation}</p>
          </div>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </div>
    </div>
  );
}

export default App;
