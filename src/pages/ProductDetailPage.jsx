import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "../styles/productDetailPage.css";
import { allProducts } from "../data/product";
import { CartContext } from '../contexts/CartContext';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const foundProduct = allProducts.find(
            (product) => product.id === parseInt(productId)
        );
        setProduct(foundProduct);
    }, [productId]);

    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [userRating, setUserRating] = useState(0);
    const [address, setAddress] = useState(""); // Thêm trạng thái cho địa chỉ
    const [fullName, setFullName] = useState(""); // Thêm trạng thái cho họ tên
    const [phoneNumber, setPhoneNumber] = useState(""); // Thêm trạng thái cho số điện thoại
    const [showAddressInput, setShowAddressInput] = useState(false); // Hiển thị thông tin nhập địa chỉ

    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    };

    const selectColor = (color) => {
        setSelectedColor(color);
    };

    const selectSize = (size) => {
        setSelectedSize(size);
    };

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const selectRating = (rating) => {
        setUserRating(rating);
    };

    if (!product) return <p>Loading...</p>;

    const handleBuyNow = () => {
        if (!selectedColor || !selectedSize) {
            alert("Vui lòng chọn màu sắc và kích thước trước khi mua!");
            return;
        }
        setShowAddressInput(true); // Hiển thị thông tin địa chỉ
    };

    const handleConfirmPurchase = () => {
        if (!fullName || !phoneNumber || !address) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        console.log("Thông tin người dùng:");
        console.log("Họ tên:", fullName);
        console.log("Số điện thoại:", phoneNumber);
        console.log("Địa chỉ giao hàng:", address);
        alert("Đơn hàng của bạn đã được xác nhận!");
        setShowAddressInput(false); // Đóng form nhập địa chỉ
        addToCart({ ...product, selectedColor, selectedSize, quantity });
    };

    return (
        <div className="product-details">
            <div className="main-image">
                <img
                    src={product.image}
                    alt="Tên sản phẩm"
                    className="product-image"
                />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="product-brand">Thương hiệu: OEM</p>
                <p className="product-price">
                    {formatCurrency(product.price)} <span className="discount">Giảm {product.discount}%</span>
                </p>

                <div className="rating">
                    <div className="stars">
                        {Array.from({ length: 5 }, (v, i) => (
                            <span key={i}
                                className={`star ${i < (userRating || product.rating) ? "filled" : ""}`}
                                onClick={() => selectRating(i + 1)}
                            >
                                ⭐
                            </span>
                        ))}
                    </div>
                    <span className="review-count">({product.reviews} đánh giá)</span>
                    <span className="purchase-count"> | {product.purchases} lượt mua</span>
                </div>

                <div className="options">
                    <div className="color-option">
                        <h4>Chọn màu sắc:</h4>
                        <div className="color-options">
                            {product.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`color-box ${selectedColor === color ? "selected" : ""}`}
                                    onClick={() => selectColor(color)}
                                >
                                    <img
                                        src={product.image} // Cập nhật dựa trên logic màu sắc
                                        alt={`Màu ${color}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="size-option">
                        <h4>Chọn kích thước:</h4>
                        <div className="size-options">
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`size-box ${selectedSize === size ? "selected" : ""}`}
                                    onClick={() => selectSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="quantity-option">
                        <h4>Chọn số lượng:</h4>
                        <div className="quantity-controls">
                            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                            <input
                                type="number"
                                value={quantity}
                                min="1"
                                className="quantity-input"
                                readOnly
                            />
                            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                </div>
                <button onClick={() => addToCart({ ...product, selectedColor, selectedSize, quantity })} className="add-to-cart">Thêm vào giỏ</button>
                <button onClick={handleBuyNow} className="buy-now">Mua ngay</button>

                {showAddressInput && (
                    <div className="address-input-container">
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
                        <button className="confirm-purchase-btn" onClick={handleConfirmPurchase}>
                            Xác nhận mua hàng
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetailPage;
