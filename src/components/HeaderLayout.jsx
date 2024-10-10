import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/headerLayout.scss";

// Importing the CSS for the layout

const HeaderLayout = () => {
    return (
        <header id="header-wp">
            <div className="header-top">
                <div className="header-top-list container">
                    <div className="header-top-item">Tải ứng dụng</div>
                    <div className="header-top-item">Chăm sóc khách hàng</div>
                    <div className="header-top-item">Nhà cung cấp</div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="header-menu-container container">
                    <NavLink to="/" className="header-logo">Sendo</NavLink>

                    <div className="header-search d-flex align-items-center">
                        <input
                            className="header-search-input"
                            type="text"
                            placeholder="Tìm trên sendo..."
                        />
                        <button className="header-search-btn"><i class='bx bx-search-alt-2'></i></button>
                    </div>

                    <NavLink to="/cart" className="cart">
                        <i className="bx bxs-shopping-bag-alt"></i>
                    </NavLink>

                    <button className="login-btn">Đăng nhập</button>
                </div>

                <div className="header-list-menu">
                    <ul>
                        <li><NavLink to="/products">Cho bạn</NavLink></li>
                        <li><NavLink to="/products">Motor, xe máy, xe đạp điện</NavLink></li>
                        <li><NavLink to="/products">Đồ dùng nhà bếp</NavLink></li>
                        <li><NavLink to="/products">Vệ sinh, chăm sóc nhà cửa</NavLink></li>
                        <li><NavLink to="/products">Đầm, váy</NavLink></li>
                        <li><NavLink to="/products">Áo nữ</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>






        // <header className="header-wp">
        //     {/* Top Bar */}
        //     <div className="top-bar">
        //         <ul className="top-bar-menu">
        //             <li><a href="#">Tải ứng dụng</a></li>
        //             <li><a href="#">Chăm sóc khách hàng</a></li>
        //             <li><a href="#">Nhà cung cấp</a></li>
        //         </ul>
        //     </div>

        //     {/* Main Navigation */}
        //     <div className="main-nav">
        //         <div className="logo">
        //             <NavLink to="/">
        //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyFImAZqdP8J50TkwYMxO1IdmppOlkv9Saw&s" alt="Sendo Logo" style={{width:"150px"}}/>                    </NavLink>
        //         </div>
        //         <div className="search-bar">
        //             <input type="text" placeholder="Tìm trên Sendo" />
        //             <button className="search-btn">
        //                 <i className="fa fa-search"><i class='bx bx-search-alt-2' ></i></i>
        //             </button>
        //         </div>
        //         <div className="nav-icons">
        //             <button className="cart-btn">
        //                 <i className="fa fa-shopping-cart"><i class='bx bxs-cart-alt'></i></i>
        //             </button>
        //             <button className="login-btn">Đăng nhập</button>
        //         </div>
        //     </div>
        //     {/* Main Links Navigation */}
        //     <div className="header-layout-container">
        //         <NavLink className="menu-link" to="/">Trang chủ</NavLink>
        //         <NavLink className="menu-link" to="/products">Trang danh sách sản phẩm</NavLink>
        //         <NavLink className="menu-link" to="/cart">Giỏ hàng</NavLink>
        //         <NavLink className="menu-link" to="/products/id-cua-trang-chi-tiet-demo">Trang chi tiết sản phẩm</NavLink>
        //         <NavLink className="menu-link" to="/demo-trang-khong-ton-tai">Trang không tồn tại</NavLink>
        //     </div>
        // </header>
    );
};

export default HeaderLayout;