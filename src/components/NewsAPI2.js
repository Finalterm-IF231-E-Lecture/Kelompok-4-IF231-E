import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NewsAPI2() {
  const [data, setData] = useState(null);
  const url =
    "https://newsdata.io/api/1/news?apikey=pub_79661b02889b8963b95e8a2369f0640eaa03&q=pegasus&language=en";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <div className="App-scrollable">
        {data &&
          data.results.map((film) => (
            <div>
              <h2 key={film.id}> {film.title} </h2>
              <p>{film.description}</p>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}
