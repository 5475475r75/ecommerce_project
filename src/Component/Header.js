import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <header className="header d-blue-bg">
                <div className="header-top">
                    <div className="container">
                        <div className="header-inner">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-7">
                                    <div className="header-inner-start">
                                        <div className="header__currency border-right">
                                            <div className="s-name">
                                                <span>Language: </span>
                                            </div>
                                            <select>
                                                <option>English</option>
                                                <option>Deutsch</option>
                                                <option>Français</option>
                                                <option>Espanol</option>
                                            </select>
                                        </div>
                                        <div className="header__lang border-right">
                                            <div className="s-name">
                                                <span>Currency: </span>
                                            </div>
                                            <select>
                                                <option> USD</option>
                                                <option>EUR</option>
                                                <option>INR</option>
                                                <option>BDT</option>
                                                <option>BGD</option>
                                            </select>
                                        </div>
                                        <div className="support d-none d-sm-block">
                                            <p>Need Help? <a href="tel:+001123456789">+001 123 456 789</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                                    <div className="header-inner-end text-md-end">
                                        <div className="ovic-menu-wrapper">
                                            <ul>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="contact.html">Order Tracking</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li><a href="faq.html">FAQs</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-mid">
                    <div className="container">
                        <div className="heade-mid-inner">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                                    <div className="header__info">
                                        <div className="logo">
                                            <a href="index.html" className="logo-image"><img src="assets/img/logo/logo1.svg" alt="logo" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                                    <div className="header__search">
                                        <form action="#">
                                            <div className="header__search-box">
                                                <input className="search-input" type="text" placeholder="I'm shopping for..." />
                                                <button className="button" type="submit"><i className="far fa-search" /></button>
                                            </div>
                                            <div className="header__search-cat">
                                                <select>
                                                    <option>All Categories</option>
                                                    <option>Best Seller Products</option>
                                                    <option>Top 10 Offers</option>
                                                    <option>New Arrivals</option>
                                                    <option>Phones &amp; Tablets</option>
                                                    <option>Electronics &amp; Digital</option>
                                                    <option>Fashion &amp; Clothings</option>
                                                    <option>Jewelry &amp; Watches</option>
                                                    <option>Health &amp; Beauty</option>
                                                    <option>Sound &amp; Speakers</option>
                                                    <option>TV &amp; Audio</option>
                                                    <option>Computers</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
                                    <div className="header-action">
                                        <div className="block-userlink">
                                            <a className="icon-link" href="my-account.html">
                                                <i className="flaticon-user" />
                                                <span className="text">
                                                    <span className="sub">Login </span>
                                                    My Account </span>
                                            </a>
                                        </div>
                                        <div className="block-wishlist action">
                                            <a className="icon-link" href="wishlist.html">
                                                <i className="flaticon-heart" />
                                                <span className="count">0</span>
                                                <span className="text">
                                                    <span className="sub">Favorite</span>
                                                    My Wishlist </span>
                                            </a>
                                        </div>
                                        <div className="block-cart action">
                                            <a className="icon-link" href="cart.html">
                                                <i className="flaticon-shopping-bag" />
                                                <span className="count">1</span>
                                                <span className="text">
                                                    <span className="sub">Your Cart:</span>
                                                    $00.00 </span>
                                            </a>
                                            <div className="cart">
                                                <div className="cart__mini">
                                                    <ul>
                                                        <li>
                                                            <div className="cart__title">
                                                                <h4>Your Cart</h4>
                                                                <span>(1 Item in Cart)</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cart__item d-flex justify-content-between align-items-center">
                                                                <div className="cart__inner d-flex">
                                                                    <div className="cart__thumb">
                                                                        <a href="product-details.html">
                                                                            <img src="assets/img/cart/20.jpg" alt />
                                                                        </a>
                                                                    </div>
                                                                    <div className="cart__details">
                                                                        <h6><a href="product-details.html"> Samsung C49J89: £875, Debenhams Plus</a></h6>
                                                                        <div className="cart__price">
                                                                            <span>$255.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="cart__del">
                                                                    <a href="#"><i className="fal fa-times" /></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cart__sub d-flex justify-content-between align-items-center">
                                                                <h6>Subtotal</h6>
                                                                <span className="cart__sub-total">$255.00</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html" className="wc-cart mb-10">View cart</a>
                                                            <a href="checkout.html" className="wc-checkout">Checkout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="container">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-3">
                                <div className="cat__menu-wrapper side-border d-none d-lg-block">
                                    <div className="cat-toggle">
                                        <button type="button" className="cat-toggle-btn cat-toggle-btn-1"><i className="fal fa-bars" /> Shop by department</button>
                                        <div className="cat__menu">
                                            <nav id="mobile-menu" style={{ display: 'block' }}>
                                                <ul>
                                                    <li>
                                                        <a href="shop.html">All Categories <i className="far fa-angle-down" /></a>
                                                        <ul className="mega-menu">
                                                            <li><a href="shop.html">Shop Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Standard SHop Page</a></li>
                                                                    <li><a href="product-details.html">Shop Right Sidebar</a></li>
                                                                    <li><a href="product-details.html">Shop Left Sidebar</a></li>
                                                                    <li><a href="product-details.html">Shop 3 Column</a></li>
                                                                    <li><a href="product-details.html">Shop 4 Column</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Product Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Product Details</a></li>
                                                                    <li><a href="product-details.html">Product V2</a></li>
                                                                    <li><a href="product-details.html">Product V3</a></li>
                                                                    <li><a href="product-details.html">Varriable Product</a></li>
                                                                    <li><a href="product-details.html">External Product</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Other Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">wishlist</a></li>
                                                                    <li><a href="product-details.html">Shopping Cart</a></li>
                                                                    <li><a href="product-details.html">Checkout</a></li>
                                                                    <li><a href="product-details.html">Login</a></li>
                                                                    <li><a href="product-details.html">Register</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Phone &amp; Tablets</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Catagory 1</a></li>
                                                                    <li><a href="product-details.html">Catagory 2</a></li>
                                                                    <li><a href="product-details.html">Catagory 3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Phone &amp; Tablets</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Catagory 1</a></li>
                                                                    <li><a href="product-details.html">Catagory 2</a></li>
                                                                    <li><a href="product-details.html">Catagory 3</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Phone and Electronics <i className="far fa-angle-down" /></a>
                                                        <ul className="mega-menu mega-menu-2">
                                                            <li><a href="shop.html">Shop Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Standard SHop Page</a></li>
                                                                    <li><a href="product-details.html">Shop Right Sidebar</a></li>
                                                                    <li><a href="product-details.html">Shop Left Sidebar</a></li>
                                                                    <li><a href="product-details.html">Shop 3 Column</a></li>
                                                                    <li><a href="product-details.html">Shop 4 Column</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Product Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Product Details</a></li>
                                                                    <li><a href="product-details.html">Product V2</a></li>
                                                                    <li><a href="product-details.html">Product V3</a></li>
                                                                    <li><a href="product-details.html">Varriable Product</a></li>
                                                                    <li><a href="product-details.html">External Product</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Other Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">wishlist</a></li>
                                                                    <li><a href="product-details.html">Shopping Cart</a></li>
                                                                    <li><a href="product-details.html">Checkout</a></li>
                                                                    <li><a href="product-details.html">Login</a></li>
                                                                    <li><a href="product-details.html">Register</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Phone &amp; Tablets</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Catagory 1</a></li>
                                                                    <li><a href="product-details.html">Catagory 2</a></li>
                                                                    <li><a href="product-details.html">Catagory 3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Phone &amp; Tablets</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Catagory 1</a></li>
                                                                    <li><a href="product-details.html">Catagory 2</a></li>
                                                                    <li><a href="product-details.html">Catagory 3</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Best Seller Products
                                                            <span className="cat-label">hot!</span>
                                                            <i className="far fa-angle-down" />
                                                        </a>
                                                        <ul className="mega-menu">
                                                            <li><a href="shop.html">Shop Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Standard SHop Page</a></li>
                                                                    <li><a href="product-details.html">Shop Right Sidebar</a></li>
                                                                    <li><a href="product-details.html">Shop Left Sidebar</a></li>
                                                                    <li><a href="product-details.html">Shop 3 Column</a></li>
                                                                    <li><a href="product-details.html">Shop 4 Column</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Product Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Product Details</a></li>
                                                                    <li><a href="product-details.html">Product V2</a></li>
                                                                    <li><a href="product-details.html">Product V3</a></li>
                                                                    <li><a href="product-details.html">Varriable Product</a></li>
                                                                    <li><a href="product-details.html">External Product</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Other Pages</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">wishlist</a></li>
                                                                    <li><a href="product-details.html">Shopping Cart</a></li>
                                                                    <li><a href="product-details.html">Checkout</a></li>
                                                                    <li><a href="product-details.html">Login</a></li>
                                                                    <li><a href="product-details.html">Register</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Phone &amp; Tablets</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Catagory 1</a></li>
                                                                    <li><a href="product-details.html">Catagory 2</a></li>
                                                                    <li><a href="product-details.html">Catagory 3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Phone &amp; Tablets</a>
                                                                <ul className="mega-item">
                                                                    <li><a href="product-details.html">Catagory 1</a></li>
                                                                    <li><a href="product-details.html">Catagory 2</a></li>
                                                                    <li><a href="product-details.html">Catagory 3</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Top 10 Offers
                                                            <span className="cat-label green">new!</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">New Arrivals <i className="far fa-angle-down" /></a>
                                                        <ul className="submenu">
                                                            <li><a href="shop.html">Home Appliances</a></li>
                                                            <li><a href="shop.html">Technology</a>
                                                                <ul className="submenu">
                                                                    <li><a href="shop.html">Storage Devices</a></li>
                                                                    <li><a href="shop.html">Monitors</a></li>
                                                                    <li><a href="shop.html">Laptops</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop.html">Office Equipments</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="shop.html">TV &amp; Audio</a></li>
                                                    <li><a href="shop.html">Electronics &amp; Digital</a></li>
                                                    <li className="d-laptop-none"><a href="shop.html">Fashion &amp; Clothings</a></li>
                                                    <li className="d-laptop-none"><a href="shop.html">Jewelry &amp; Watches</a></li>
                                                    <li><a href="shop.html">Health &amp; Beauty</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-3">
                                <div className="header__bottom-left d-flex d-xl-block align-items-center">
                                    <div className="side-menu d-lg-none mr-20">
                                        <button type="button" className="side-menu-btn offcanvas-toggle-btn"><i className="fas fa-bars" /></button>
                                    </div>
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href="index.html" className="active">Home</a>
                                                </li>

                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>

                                                <li>
                                                    <a href="shop.html">Shop</a>
                                                </li>

                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <NavLink className="nav-link scrollto" to="/contact">Contact</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-9">
                                <div className="shopeing-text text-sm-end">
                                    <p>Spend $120 more and get free shipping!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;