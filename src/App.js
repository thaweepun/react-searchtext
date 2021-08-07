import "./App.css";
import React, { useState, useEffect } from "react";
import JSONDATA from "./MOCK_DATA.json";
// import TEXT from "./text.txt";
// import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  //const [allData, setAllData] = useState([]);

  const searchData = JSONDATA.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else {
      return val.first_name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    }
  });

  // const searchData = allData.filter((val) => {
  //   if (searchTerm === "") {
  //     return val;
  //   } else {
  //     return val.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  //   }
  // });

  //   useEffect(() => {
  //   axios(TEXT).then((response) => {
  //     let arr = Object.entries(response.data.split("\n"));
  //     let mapped = [];
  //     arr.forEach(([key, value]) => mapped.push(value));
  //     setAllData(mapped);
  //   });
  // }, []);

  return (
    <div className="App" style={{ fontSize: 20 }}>
      <br />
      <input
        style={{ fontSize: 30 }}
        type="text"
        placeholder="Key First Name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {searchData.length !== 0 && <p>Result : {searchData.length}</p>}
      </div>

      <div style={{ padding: 10 }}>
        {searchData.map((val) => {
          return (
            <div key={val.id}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
