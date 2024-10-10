import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/CardProduct.css"; // Make sure the path is correct

const CardProduct = ({ id, image, title, price }) => {
    return (
        <Link to={`/products/${id}`} className="card-product"> {/* Make the entire card clickable */}
            <img
                src={image}
                alt={title}
                className="card-product-image"
            />
            <h3 className="card-product-title">{title}</h3>
            <p className="card-product-price">{price.toLocaleString('vi-VN')} đ</p>
        </Link>
    );
};

export default CardProduct;



// Yêu cầu đề ra
// Vào folder styles tạo 1 file tên là CardProduct.css
// Import vào fie này (CardProduct.jsx)
// Sau đó viết lại cấu trúc html ở file này
// còn css viết ở file CardProduct.css
// Thẻ a thì thay bằng thẻ Link
// Giao diện trên xóa thoải mái làm sao để viết đc cái card đã
