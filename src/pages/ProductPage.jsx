import React, { useState } from 'react';
import "../styles/productPage.css";
import CardProduct from '../components/CardProduct';
import { allProducts } from '../data/product';

const ProductPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [filters, setFilters] = useState({
        fast: false,
        normal: false,
        senmall: false,
        shopplus: false,
        flashSale: false,
        saleShop: false,
    });

    const handleFilterChange = (e) => {
        const { id, checked } = e.target;
        setFilters((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    const applyFilters = () => {
        const newFilteredProducts = allProducts.filter((product) => {
            const statusMatches =
                (filters.flashSale && product.status === 'flash-sale') ||
                (filters.saleShop && product.status === 'sale-shop') ||
                (filters.senmall && product.status === 'senmall') ||
                (filters.shopplus && product.status === 'shopplus') ||
                (!filters.flashSale && !filters.saleShop && !filters.senmall && !filters.shopplus); // Nếu không chọn lọc thì cho tất cả sản phẩm
            return statusMatches;
        });
        setFilteredProducts(newFilteredProducts);
    };

    return (
        <div className="product-page">
            <div className="filter-section">
                <h2>Phương thức vận chuyển</h2>
                <ul>
                    <li><input type="checkbox" id="fast" onChange={handleFilterChange} /> <label htmlFor="fast">Hỏa tốc</label></li>
                    <li><input type="checkbox" id="normal" onChange={handleFilterChange} /> <label htmlFor="normal">Tiêu chuẩn</label></li>
                </ul>
                <h2>Loại shop</h2>
                <ul>
                    <li><input type="checkbox" id="senmall" onChange={handleFilterChange} /> <label htmlFor="senmall">SenMall</label></li>
                    <li><input type="checkbox" id="shopplus" onChange={handleFilterChange} /> <label htmlFor="shopplus">Shop+</label></li>
                </ul>
                <h2>Ưu đãi</h2>
                <ul>
                    <li><input type="checkbox" id="flashSale" onChange={handleFilterChange} /> <label htmlFor="flashSale">Flash Sale</label></li>
                    <li><input type="checkbox" id="saleShop" onChange={handleFilterChange} /> <label htmlFor="saleShop">SĂN SALE SHOP+</label></li>
                </ul>
                <button onClick={applyFilters}>Lọc</button>
            </div>
            <div className="product-list">
                <h1 className="page-title">Sản phẩm nổi bật</h1>
                <p className="page-description">Khám phá bộ sưu tập sản phẩm mới nhất của chúng tôi.</p>
                <div className="products">
                    {filteredProducts.map((product) => (
                        <CardProduct
                            key={product.id}
                            id={product.id}
                            title={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
