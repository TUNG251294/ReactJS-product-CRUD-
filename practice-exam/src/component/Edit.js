import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: ''
  });

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:3001/products/${id}`);
    setProduct(result.data);
    console.log(result.data)
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/products/${id}`, product);
    navigate("/");
  };

  return (
    <div style={{textAlign: 'left'}} className="App">
          <h2>Cập nhật sản phẩm</h2>

          <form onSubmit={(e) => onSubmit(e)}>
              <label>
                Tên sản phẩm
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={(e) => onInputChange(e)}
              /><br/>

              <label>
                Giá
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={(e) => onInputChange(e)}
              /><br/>

              <label>
                Tồn kho
              </label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={(e) => onInputChange(e)}
              /><br/>

              <label>
                Mô tả
              </label>
              <input
                type="text"
                name="description"
                value={product.description}
                onChange={(e) => onInputChange(e)}
              /><br/>

            <button type="submit">
              Update
            </button>
            <Link to="/">
              Cancel
            </Link>
          </form>
        </div>

  );
}
