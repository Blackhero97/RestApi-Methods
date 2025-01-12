import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Fetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);
  return { data };
}

export default Fetch;
