import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
  const [img, setImg] = useState();
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [text, setText] = useState();
  const [price, setPrice] = useState();
  const history = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:2008/furnitura/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setImg(data.img);
        setTitle(data.title);
        setSubtitle(data.subtitle);
        setText(data.text);
        setPrice(data.price);
        setType(data.type);
      });
  }, []);

  const sendData = (e) => {
    e.preventDefault();
    const upDate = {
      img,
      type,
      title,
      subtitle,
      text,
      price,
    };
    fetch(`http://localhost:2008/furnitura/${id}`, {
      method: "PUT",
      body: JSON.stringify(upDate),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => history("/"));
  };
  return (
    <>
      <div className="new">
        <div className="new-top">
          <h1>Edit Element</h1>
        </div>
        <div className="new-bottom">
          <div className="new-left">
            <h4>Preview</h4>
            <div className="home-card">
              <div className="card-img-box">
                <img src={img} alt="" />
              </div>
              <span>{type}</span>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <h5>{price}</h5>
            </div>
          </div>
          <form onSubmit={sendData}>
            <div className="input-box">
              <label htmlFor="">Upload img link</label>
              <input
                value={img}
                onChange={(e) => setImg(e.target.value)}
                type="text"
                placeholder="img link"
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Name</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="title"
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Info</label>
              <input
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                type="text"
                placeholder="info"
              />
            </div>
            <div className="input-box">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Description (optionnal)"
                name="text"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="input-box">
              <label htmlFor="">Property (optionnal)</label>
              <div className="input">
                <input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  type="text"
                  placeholder="ZType"
                />
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Price"
                />
              </div>
            </div>
            <button className="one">Change item</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Edit;
