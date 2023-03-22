import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
 
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3001/products");
    setProducts(result.data);
    console.log(result.data)
  };

  return (
    <div className="App">
      <h1 style={{textAlign: 'left'}}>Danh sách sản phẩm</h1>
      <div style={{textAlign: 'left'}}>
        <button onClick={() => navigate("/add")}>Thêm sản phẩm</button>
      </div>
      
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Count</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Tồn Kho</th>
              <th>Thông tin</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                  <td>
                  <Link to={`/view/${product.id}`}>Xem</Link>
                  </td>
                  <td>
                    <button onClick={() => navigate(`/edit/${product.id}`)}>Cập nhập</button>
                  </td>
                  <td>
                    <button onClick={() => navigate(`/delete/${product.id}`)}>Xóa</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
