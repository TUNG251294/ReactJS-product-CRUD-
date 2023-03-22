import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Add() {
  let navigate = useNavigate();

  const [product, setProduct] = useState({});

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/products", product);
    navigate("/");
  };

  return (
    <div style={{textAlign: 'left'}} className="App">
          <h2>Thêm Sản Phẩm</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label>
                Tên Sản Phẩm
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div>
              <label>
                Giá: 
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div>
              <label>
                Tồn Kho: 
              </label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label>
                Mô tả: 
              </label>
              <input
                type="text"
                name="description"
                value={product.description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit">
              Submit
            </button>
            <Link to="/">
              Cancel
            </Link>
          </form>
        </div>
  );
}
