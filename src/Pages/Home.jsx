import React, { useContext } from "react";
import Fetch from "../server/Fetch";
import { Link } from "react-router-dom";

function Home() {
  const { data } = Fetch("http://localhost:2008/furnitura");
  return (
    <>
      <div className="cards-box">
        {data &&
          data.map((item) => {
            return (
              <Link key={item.id} to={`/list/${item.id}`}>
                <div key={item.id} className="card">
                  <div className="card-head">
                    <img src={item.img} alt="" />
                  </div>
                  <h5>{item.type}</h5>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <span>${item.price}</span>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Home;
