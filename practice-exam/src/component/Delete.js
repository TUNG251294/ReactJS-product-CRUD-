import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Delete() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState({});

  const { name, price, stock, description } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
    .delete(`http://localhost:3001/products/${id}`, product);
    navigate("/");
  };

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:3001/products/${id}`);
    setProduct(result.data);
  };

  return (
    <div style={{textAlign: 'left'}} className="App">
 
          <h2>Xóa sản phẩm</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label>
                Tên sản phẩm: 
              </label>
              <input
                readOnly
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label>
                Giá : 
              </label>
              <input
                readOnly
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label>
                Tồn kho :
              </label>
              <input
                readOnly
                name="stock"
                value={stock}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div>
              <label>
                Mô tả :
              </label>
              <input
                readOnly
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit">
              Delete
            </button>
            <Link to="/">
              Cancel
            </Link>
          </form>
        </div>

  );
}
