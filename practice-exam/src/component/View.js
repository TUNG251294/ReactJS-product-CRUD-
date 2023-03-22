import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function View() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: ""
  });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:3001/products/${id}`);
    setProduct(result.data);
  };

  return (
    <div style={{textAlign: 'left'}} className="App">
          <h2>Thông tin sản Phẩm</h2>
            <div>
              id : {product.id}
              <ul>
                <li>
                  <b>Tên sản phẩm:</b>
                  {product.name}
                </li>
                <li>
                  <b>Giá:</b>
                  {product.price}
                </li>
                <li>
                  <b>Tồn Kho:</b>
                  {product.stock}
                </li>
                <li>
                  <b>Mô tả:</b>
                  {product.description}
                </li>
              </ul>
            </div>
          <Link to={"/"}>
            Back to Home
          </Link>
        </div>

  );
}
