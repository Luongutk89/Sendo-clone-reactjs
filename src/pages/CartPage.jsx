import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/Cart.css';  // Nhớ import tệp CSS vào component

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isCheckoutPopupOpen, setCheckoutPopupOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState(""); // Thêm trạng thái cho họ tên
  const [phoneNumber, setPhoneNumber] = useState(""); // Thêm trạng thái cho số điện thoại

  // Hàm định dạng tiền tệ
  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  };

  // Tính tổng tiền của giỏ hàng
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const productTotal = product.price * product.quantity;
      return total + productTotal;
    }, 0);
  };

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  const handleCheckoutClick = () => {
    setCheckoutPopupOpen(true);
  };

  const handleClosePopup = () => {
    setCheckoutPopupOpen(false);
  };

  const handleSubmitOrder = () => {
    console.log("Thông tin người dùng:");
    console.log("Họ tên:", fullName);
    console.log("Số điện thoại:", phoneNumber);
    console.log("Địa chỉ giao hàng:", address);
    setCheckoutPopupOpen(false);
    alert("Đơn hàng của bạn đã được xác nhận!");
  };

  return (
    <div className="cart-container">
      <h1>Giỏ hàng của bạn</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Giỏ hàng trống!</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((product, index) => (
              <li key={index}>
                <img src={product.image} alt={product.name} />
                <div>
                  <span>{product.name} - {formatCurrency(product.price)}</span>
                  <div>Màu sắc: {product.selectedColor}</div>
                  <div>Kích thước: {product.selectedSize}</div>
                  <div>
                    Số lượng: {product.quantity}
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="remove-btn"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
          <h2 className="total-price">Tổng giá: {formatCurrency(totalPrice)}</h2>

          <button
            className="checkout-btn"
            onClick={handleCheckoutClick}
          >
            Tiến hành thanh toán
          </button>

          {isCheckoutPopupOpen && (
            <div className="checkout-popup">
              <div className="popup-content">
                <h2>Nhập thông tin giao hàng</h2>

                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="address-input"
                />

                <input
                  type="text"
                  placeholder="Số điện thoại"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="address-input"
                />

                <input
                  type="text"
                  placeholder="Nhập địa chỉ của bạn"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="address-input"
                />

                <button
                  className="submit-order-btn"
                  onClick={handleSubmitOrder}
                >
                  Xác nhận đơn hàng
                </button>
                <button
                  className="close-popup-btn"
                  onClick={handleClosePopup}
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
