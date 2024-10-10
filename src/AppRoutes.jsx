// AppRoutes.js
import { Routes, Route } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CartPage from "./pages/CartPage"
import { CartProvider } from "./contexts/CartContext"


const AppRoutes = () => {
    return (
            <Routes>
                {/* http://localhost:5173/ */}
                <Route path="/" element={<HomePage />} />

                {/* http://localhost:5173/products */}
                <Route path="/products" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage/>} />
                {/* Product detail page route (dynamic route) */}
                <Route path="/products/:productId" element={<ProductDetailPage />} />

                {/* http://localhost:5173/abcdefghkdf.... */}
                <Route path="*" element={<NotFoundPage />} />

                {/* Thêm các router tiếp theo dưới đây... */}
            </Routes>
    )
}

export default AppRoutes
