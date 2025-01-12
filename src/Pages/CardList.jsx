import React from "react";
import Fetch from "../server/Fetch";
import { useNavigate, useParams } from "react-router-dom";
import Colors from "../imgs/color.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CardList() {
  const { id } = useParams();
  const { data } = Fetch("http://localhost:2008/furnitura/" + id);
  const navigate = useNavigate();
  const DeleteProduct = () => {
    Swal.fire({
      title: "O'chirmoqchimisiz?",
      text: "O'chirganingizdan keyin tiklash imkoni yoq'!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ha, O'chir!",
      cancelButtonText: "Yo'q , Bekor qil",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:2008/furnitura/${id}`, {
          method: "DELETE",
        }).then(() => {
          Swal.fire({
            title: "O'chirildi!",
            text: "Maxsulot muvaffaqiyatli o'chirildi.",
            icon: "success",
          });
          navigate("/");
        });
      }
    });
  };
  return (
    <>
      <div className="list-box">
        {data && (
          <div className="list">
            <div className="list-img-box">
              <img src={data.img} alt="" />
            </div>
            <div className="list-text-box">
              <h2>{data.title}</h2>
              <h4>{data.subtitle}</h4>
              <h5>Color</h5>
              <img src={Colors} alt="" />
              <p>{data.text}</p>
              <h6>${data.price}</h6>
              <div className="btn-box">
                <Link to={"/"}>
                  <button className="btn1">Back to Home</button>
                </Link>
                <Link to={`/edit/${data.id}`}>
                  <button className="btn1">Edit Product</button>
                </Link>
                <button onClick={DeleteProduct} className="btn2">
                  Delte Product
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CardList;
