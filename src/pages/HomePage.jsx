import React from 'react';
import { Link } from 'react-router-dom'; // Sử dụng Link để điều hướng
import '../styles/homePage.scss';

const HomePage = () => {
    const products = [
        { id: 1, name: 'Bình Giữ Nhiệt INOX 304', price: '73.000đ', image: 'https://media3.scdn.vn/img4/2023/09_30/U7jRAdbG4xZ8lWufWGCW_simg_b5529c_250x250_maxb.jpg', rating: '4.7/5' },
        { id: 2, name: 'Nguyệt Quế Hoa Trắng Thơm', price: '99.000đ', image: 'https://media3.scdn.vn/img4/2024/06_23/8Y301xHLwlJRzwdBBOhT_simg_b5529c_250x250_maxb.jpg', rating: '5/5' },
        { id: 3, name: 'Sét Đồ Bộ Nữ Phối Sọc', price: '109.000đ', image: 'https://media3.scdn.vn/img4/2022/11_08/F88IVX74RnMQkWKgMKh2_simg_b5529c_250x250_maxb.jpg', rating: '4.4/5' },
        { id: 4, name: 'Ắc Quy Yamato 12V', price: '390.000đ', image: 'https://media3.scdn.vn/img4/2022/12_31/091gaauTWO198tBIyxSk_simg_b5529c_250x250_maxb.jpg', rating: '4.6/5' },
        { id: 5, name: 'Máy Xay Sinh Tố', price: '199.000đ', image: 'https://media3.scdn.vn/img4/2023/07_01/hTZ8JS2UuKvlROTsOror_simg_b5529c_250x250_maxb.jpg', rating: '4.5/5' },
        { id: 6, name: 'Nồi Cơm Điện 1.8L', price: '599.000đ', image: 'https://media3.scdn.vn/img4/2024/06_30/N17f2Z4T2cM1TjzMxTzH_simg_b5529c_250x250_maxb.jpg', rating: '4.8/5' },
        { id: 7, name: 'Tai Nghe Bluetooth', price: '150.000đ', image: 'https://media3.scdn.vn/img4/2023/09_25/I7Gz8NV2WQy6gNdS9ZsG_simg_b5529c_250x250_maxb.jpg', rating: '4.5/5' },
        { id: 8, name: 'Bộ Dụng Cụ Làm Bếp', price: '450.000đ', image: 'https://media3.scdn.vn/img4/2023/07_15/M1U0h3x5z1nKBo8G9BnN_simg_b5529c_250x250_maxb.jpg', rating: '4.6/5' },
        { id: 9, name: 'Sản Phẩm Chăm Sóc Da', price: '220.000đ', image: 'https://media3.scdn.vn/img4/2024/05_21/I7D1Fz2Q9nCdvD5KZJw5_simg_b5529c_250x250_maxb.jpg', rating: '4.9/5' },
        { id: 10, name: 'Bàn Là Hơi Nước', price: '280.000đ', image: 'https://media3.scdn.vn/img4/2024/03_12/F0Tg2Zc3q9pTrX0F5BmD_simg_b5529c_250x250_maxb.jpg', rating: '4.4/5' },
        { id: 11, name: 'Giày Thể Thao Nam', price: '750.000đ', image: 'https://media3.scdn.vn/img4/2024/01_18/N3D1zX0bP6bXyN8P5ChH_simg_b5529c_250x250_maxb.jpg', rating: '4.7/5' },
        { id: 12, name: 'Đèn LED Thông Minh', price: '199.000đ', image: 'https://media3.scdn.vn/img4/2023/10_02/G4T7zB0D6bD4W4XxN1F4_simg_b5529c_250x250_maxb.jpg', rating: '4.8/5' },
        { id: 13, name: 'Ghế Sofa Đơn', price: '1.200.000đ', image: 'https://media3.scdn.vn/img4/2023/08_14/K1T5D4D6B5Z9W0Q1A8F9_simg_b5529c_250x250_maxb.jpg', rating: '4.5/5' },
        { id: 14, name: 'Balo Thời Trang', price: '350.000đ', image: 'https://media3.scdn.vn/img4/2023/11_10/F3Q6P8D7Y5H2D2A9C4F5_simg_b5529c_250x250_maxb.jpg', rating: '4.6/5' },
        { id: 15, name: 'Mô Hình Xe Hơi', price: '450.000đ', image: 'https://media3.scdn.vn/img4/2023/06_05/G6J1B3K7D4F2F1B9T1K5_simg_b5529c_250x250_maxb.jpg', rating: '4.4/5' },
        { id: 16, name: 'Khung Ảnh Để Bàn', price: '180.000đ', image: 'https://media3.scdn.vn/img4/2024/05_05/A1B8Y9T7Q8K1D2W0C5R3_simg_b5529c_250x250_maxb.jpg', rating: '4.7/5' },
    ];


    const cardData = [
        { imgSrc: "https://media3.scdn.vn/img4/2024/06_10/sGMLqxgjllrEQlpuHZl7.png", alt: "Image 1", text: "Siêu thị Sendo Farm" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/10_03/gRCiMuyrcKwdd4xFTH26.png", alt: "Image 2", text: "Cơn lốc điện tử" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/09_18/0KazkGJq17Pv96jwB2qb.png", alt: "Image 3", text: "Thiết bị nhà bếp từ 39K" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/09_20/oK6xmoL8e3gx95yHoyPk.png", alt: "Image 4", text: "Bí kíp đi mưa" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/06_10/owAS5kCPJRuSWgVKZaL4.png", alt: "Image 5", text: "Tiện ích phòng ngủ" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/09_18/t9AXfHZNnSZ76urBp3fH.png", alt: "Image 6", text: "Vệ sinh nhà cửa" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/10_03/3x0hyhpJgYwnWGy5QxT9.png", alt: "Image 7", text: "Aftee tặng 100K" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/06_10/aJj7wNNeq58Oh4fa6gsS.png", alt: "Image 8", text: "Bảo vệ sức khỏe" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/09_18/mkamHobYxMHrkO3Dv4AX.png", alt: "Image 9", text: "Nạp thẻ & dịch vụ" },
        { imgSrc: "https://media3.scdn.vn/img4/2024/09_18/nNSEYDf7BBFxmlz8EWZR.png", alt: "Image 10", text: "Mã giảm giá & Freeship" }

    ];

    const newsData = [
        {
            imgSrc: "https://media3.scdn.vn/img4/2023/02_13/zn0TS70mLyK6Nb6EB5W3_simg_de2fe0_250x250_maxb.jpg",
            title: "Giảm giá cực sốc 50% cho tất cả các sản phẩm mùa hè",
            description: "Xem chi tiết",
        },
        {
            imgSrc: "https://media3.scdn.vn/img4/2023/09_21/eIyEK5W15rbEMbDH1Z0F_simg_b5529c_250x250_maxb.jpg",
            title: "Khám phá bộ sưu tập mùa thu mới nhất",
            description: "Xem chi tiết",
        },
        {
            imgSrc: "https://media3.scdn.vn/img4/2022/05_22/R0jx918koEpfzgFoDnpK_simg_b5529c_250x250_maxb.jpg",
            title: "Khuyến mãi cuối tuần: Mua 1 tặng 1",
            description: "Xem chi tiết",
        },
    ];

    return (
        <div className="homepage">
            {/* Hero Banner */}
            <div className="wrapper">
                <div className="card-container container">
                    {cardData.map((card, index) => (
                        <div className="card" key={index}>
                            <img src={card.imgSrc} alt={card.alt} />
                            <span>{card.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Banner Quảng Cáo */}
            <section className="advertisement-banner">
                <img src="https://down-vn.img.susercontent.com/file/66f6fcb67c81747f7d6b63e8bbbd0b33" alt="Banner quảng cáo" />
                <img className="banner-center" src="https://down-vn.img.susercontent.com/file/66f6fcb67c81747f7d6b63e8bbbd0b33" alt="Banner quảng cáo" />
                <img src="https://down-vn.img.susercontent.com/file/66f6fcb67c81747f7d6b63e8bbbd0b33" alt="Banner quảng cáo" />

            </section>

            {/* Sản phẩm giảm giá */}
            <section className="sale-products">
                <h2>Sản phẩm giảm giá</h2>

                <div className="product-list">
                    {products.slice(0, 6).map(product => (
                        <Link to={`/productDetail/${product.id}`} key={product.id} className="product-link">
                            <div className="product-item">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>Giá: {product.price}</p>
                                <p>Đánh giá: {product.rating}</p>
                                <span className="sale-tag">Giảm giá</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Tin tức mới nhất */}
            <section className="latest-news">
                <h2>Tin tức mới nhất</h2>
                <div className="news-list">
                    {newsData.map((news, index) => (
                        <div className="news-item" key={index}>
                            <img src={news.imgSrc} alt="news" />
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Danh sách sản phẩm nổi bật */}
            <section className="products">
                <h2>Sản phẩm nổi bật</h2>
                <div className="product-list">
                    {products.map(product => (
                        <Link to={`/productDetail/${product.id}`} key={product.id} className="product-link">
                            <div className="product-item">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>Giá: {product.price} đ</p>
                                <p>Đánh giá: {product.rating}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>


            {/* Footer */}
            <footer className="footer">
                <p>© 2024 Shop Online. Tất cả các quyền được bảo lưu.</p>
            </footer>
        </div>
    );
};

export default HomePage;
