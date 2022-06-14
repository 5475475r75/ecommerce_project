import React from 'react';

function Home(props) {
    return (
        <div>
            <div>
                {/* offcanvas area start */}
                <div className="offcanvas__area">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__close">
                            <button className="offcanvas__close-btn" id="offcanvas__close-btn">
                                <i className="fal fa-times" />
                            </button>
                        </div>
                        <div className="offcanvas__content">
                            <div className="offcanvas__logo mb-40">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo-white.png" alt="logo" />
                                </a>
                            </div>
                            <div className="offcanvas__search mb-25">
                                <form action="#">
                                    <input type="text" placeholder="What are you searching for?" />
                                    <button type="submit"><i className="far fa-search" /></button>
                                </form>
                            </div>
                            <div className="mobile-menu fix" />
                            <div className="offcanvas__action">
                            </div>
                        </div>
                    </div>
                </div>
                {/* offcanvas area end */}
                <div className="body-overlay" />
                {/* offcanvas area end */}
                <main>
                    {/* slider-area-start */}
                    <div className="slider-area">
                        <div className="swiper-container slider__active">
                            <div className="slider-wrapper swiper-wrapper">
                                <div className="single-slider swiper-slide slider-height d-flex align-items-center" data-background="%PUBLIC_URL%/assets/img/slider/01-slide-1.jpg">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="slider-content">
                                                    <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1.5s">
                                                        <a href="product-details.html" className="st-btn b-radius">HOT DEALS</a>
                                                    </div>
                                                    <h2 data-animation="fadeInLeft" data-delay="1.7s" className="pt-15 slider-title pb-5">SALE 30% OFF <br /> FUTURE FOOTBALL BOOTS</h2>
                                                    <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.9s">Discount 30% On Products &amp; Free Shipping</p>
                                                    <div className="slider-bottom-btn mt-75">
                                                        <a data-animation="fadeInUp" data-delay="1.15s" href="shop.html" className="st-btn-b b-radius">Discover now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* /single-slider */}
                                <div className="single-slider swiper-slide slider-height d-flex align-items-center" data-background="%PUBLIC_URL%/assets/img/slider/01-slide-2.jpg">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="slider-content">
                                                    <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1s">
                                                        <a href="product-details.html" className="st-btn b-radius">New Arraivels</a>
                                                    </div>
                                                    <h2 data-animation="fadeInLeft" data-delay="1.5s" className="pt-15 slider-title pb-5">SALE 20% OFF<br /> SAMSUNG GALAXY BUDS </h2>
                                                    <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.7s">Discount 30% On Products &amp; Free Shipping</p>
                                                    <div className="slider-bottom-btn mt-75">
                                                        <a data-animation="fadeInUp" data-delay="1.9s" href="shop.html" className="st-btn-b b-radius">Discover now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* /single-slider */}
                                <div className="single-slider swiper-slide slider-height d-flex align-items-center" data-background="%PUBLIC_URL%/assets/img/slider/01-slide-3.jpg">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="slider-content">
                                                    <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1s">
                                                        <a href="product-details.html" className="st-btn b-radius">New DEALS</a>
                                                    </div>
                                                    <h2 data-animation="fadeInLeft" data-delay="1.5s" className="pt-15 slider-title pb-5">SALE 30% OFF <br /> FUTURE FOOTBALL BOOTS</h2>
                                                    <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.8s">Discount 30% On Products &amp; Free Shipping</p>
                                                    <div className="slider-bottom-btn mt-75">
                                                        <a data-animation="fadeInUp" data-delay="1.10s" href="shop.html" className="st-btn-b b-radius">Discover now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* /single-slider */}
                                <div className="main-slider-paginations" />
                            </div>
                        </div>
                    </div>
                    {/* slider-area-end */}
                    {/* features__area-start */}
                    <section className="features__area pt-20">
                        <div className="container">
                            <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
                                <div className="col">
                                    <div className="features__item d-flex white-bg">
                                        <div className="features__icon mr-20">
                                            <i className="fal fa-truck" />
                                        </div>
                                        <div className="features__content">
                                            <h6>FREE DELIVERY</h6>
                                            <p>For all orders over $120</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="features__item d-flex white-bg">
                                        <div className="features__icon mr-20">
                                            <i className="fal fa-money-check" />
                                        </div>
                                        <div className="features__content">
                                            <h6>SAFE PAYMENT</h6>
                                            <p>100% secure payment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="features__item d-flex white-bg">
                                        <div className="features__icon mr-20">
                                            <i className="fal fa-comments-alt" />
                                        </div>
                                        <div className="features__content">
                                            <h6>24/7 HELP CENTER</h6>
                                            <p>Delicated 24/7 support</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="features__item features__item-last d-flex white-bg">
                                        <div className="features__icon mr-20">
                                            <i className="fad fa-user-headset" />
                                        </div>
                                        <div className="features__content">
                                            <h6>FRIENDLY SERVICES</h6>
                                            <p>30 day satisfaction guarantee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* features__area-end */}
                    {/* banner__area-start */}
                    <section className="banner__area pt-20 pb-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="banner__item p-relative w-img mb-30">
                                        <div className="banner__img">
                                            <a href="product-details.html"><img src="assets/img/banner/banner-1.jpg" alt /></a>
                                        </div>
                                        <div className="banner__content">
                                            <h6><a href="product-details.html">Intelligent <br /> New Touch Control</a></h6>
                                            <p>Discount  20% On Products</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="banner__item p-relative mb-30 w-img">
                                        <div className="banner__img">
                                            <a href="product-details.html"><img src="assets/img/banner/banner-2.jpg" alt /></a>
                                        </div>
                                        <div className="banner__content">
                                            <h6><a href="product-details.html">On-sale <br /> Best Prices</a></h6>
                                            <p>Limited Time: Online Only!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="banner__item p-relative mb-30 w-img">
                                        <div className="banner__img">
                                            <a href="product-details.html"><img src="assets/img/banner/banner-3.jpg" alt /></a>
                                        </div>
                                        <div className="banner__content">
                                            <h6><a href="product-details.html">Hot Sale <br /> Super Laptops 2022 </a></h6>
                                            <p>Free Shipping All Order</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* banner__area-end */}
                    {/* topsell__area-start */}
                    <section className="topsell__area-1 pt-15">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="section__head d-flex justify-content-between mb-10">
                                        <div className="section__title">
                                            <h5 className="st-titile-d">Top Deals Of The Day</h5>
                                        </div>
                                        <div className="offer-time">
                                            <span className="offer-title d-none d-sm-block">Hurry Up! Offer ends in:</span>
                                            <div className="countdown">
                                                <div className="countdown-inner b-radius" data-countdown data-date="Mar 02 2022 20:20:22">
                                                    <ul className="text-center">
                                                        <li><span data-days>36</span> Days</li>
                                                        <li><span data-hours>8</span> Hours</li>
                                                        <li><span data-minutes>16</span> Mins</li>
                                                        <li><span data-seconds>54</span> Secs</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="product-bs-slider">
                                    <div className="product-slider swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-1.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                        <span className="discount">-15%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price mb-10">
                                                        <span>$105-$110</span>
                                                    </div>
                                                    <div className="progress mb-5">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '10%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <div className="progress-rate">
                                                        <span>Sold:312/1225</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-2.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price mb-10">
                                                        <span>$105-$150</span>
                                                    </div>
                                                    <div className="progress mb-5">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <div className="progress-rate">
                                                        <span>Sold:315/1225</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-3.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                        <span className="discount">-9%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price mb-10">
                                                        <span>$200-$280</span>
                                                    </div>
                                                    <div className="progress mb-5">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '25%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <div className="progress-rate">
                                                        <span>Sold:370/1225</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-4.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price mb-10">
                                                        <span>$100-$180</span>
                                                    </div>
                                                    <div className="progress mb-5">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '35%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <div className="progress-rate">
                                                        <span>Sold:420/1225</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-5.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                        <span className="discount">-10%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price mb-10">
                                                        <span><del>$270</del> $200</span>
                                                    </div>
                                                    <div className="progress mb-5">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '10%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <div className="progress-rate">
                                                        <span>Sold:312/1225</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-6.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price mb-10">
                                                        <span>$150-$270</span>
                                                    </div>
                                                    <div className="progress mb-5">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '10%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <div className="progress-rate">
                                                        <span>Sold:370/1225</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* If we need navigation buttons */}
                                    <div className="bs-button bs-button-prev"><i className="fal fa-chevron-left" /></div>
                                    <div className="bs-button bs-button-next"><i className="fal fa-chevron-right" /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* topsell__area-end */}
                    {/* banner__area-start */}
                    <section className="banner__area banner__area-d pb-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="banner__item p-relative w-img mb-30">
                                        <div className="banner__img">
                                            <a href="product-details.html"><img src="assets/img/banner/banner-4.jpg" alt /></a>
                                        </div>
                                        <div className="banner__content">
                                            <span>Bestseller Products</span>
                                            <h6><a href="product-details.html">PC &amp; Docking Station</a></h6>
                                            <p>Discount 20% Off, Top Quality Products</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="banner__item p-relative mb-30 w-img">
                                        <div className="banner__img">
                                            <a href="product-details.html"><img src="assets/img/banner/banner-5.jpg" alt /></a>
                                        </div>
                                        <div className="banner__content">
                                            <span>Featured Products</span>
                                            <h6><a href="product-details.html">Accessories iPhone</a></h6>
                                            <p>Free Shipping All Order Over $99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* banner__area-end */}
                    {/* topsell__area-start */}
                    <section className="topsell__area-2 pt-15">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="section__head d-flex justify-content-between mb-10">
                                        <div className="section__title">
                                            <h5 className="st-titile">Top Selling Products</h5>
                                        </div>
                                        <div className="product__nav-tab">
                                            <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="computer-tab" data-bs-toggle="tab" data-bs-target="#computer" type="button" role="tab" aria-controls="computer" aria-selected="false">computer</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="samsung-tab" data-bs-toggle="tab" data-bs-target="#samsung" type="button" role="tab" aria-selected="false">samsung</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="htc-tab" data-bs-toggle="tab" data-bs-target="#htc" type="button" role="tab" aria-selected="false">HTC</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="nokia-tab" data-bs-toggle="tab" data-bs-target="#nokia" type="button" role="tab" aria-selected="false">Nokia</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" type="button" role="tab" aria-selected="true">Cell Phones</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="tab-content" id="flast-sell-tabContent">
                                        <div className="tab-pane fade active show" id="computer" role="tabpanel" aria-labelledby="computer-tab">
                                            <div className="product-bs-slider-2">
                                                <div className="product-slider-2 swiper-container">
                                                    <div className="swiper-wrapper">
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-1.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-15%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$110</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-2.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$150</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-3.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-9%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$200-$280</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-4.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$100-$180</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-5.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-10%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span><del>$270</del> $200</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-6.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$150-$270</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* If we need navigation buttons */}
                                                <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                                                <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="samsung" role="tabpanel" aria-labelledby="samsung-tab">
                                            <div className="product-bs-slider-2">
                                                <div className="product-slider-2 swiper-container">
                                                    <div className="swiper-wrapper">
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-1.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-15%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$110</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-4.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$100-$180</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-5.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-10%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span><del>$270</del> $200</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-6.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$150-$270</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-2.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$150</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-3.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-9%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$200-$280</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* If we need navigation buttons */}
                                                </div>
                                                <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                                                <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="htc" role="tabpanel" aria-labelledby="htc-tab">
                                            <div className="product-bs-slider-2">
                                                <div className="product-slider-2 swiper-container">
                                                    <div className="swiper-wrapper">
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-4.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$100-$180</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-5.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-10%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span><del>$270</del> $200</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-6.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$150-$270</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-1.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-15%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$110</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-2.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$150</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-3.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-9%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$200-$280</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* If we need navigation buttons */}
                                                <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                                                <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nokia" role="tabpanel" aria-labelledby="nokia-tab">
                                            <div className="product-bs-slider-2">
                                                <div className="product-slider-2 swiper-container">
                                                    <div className="swiper-wrapper">
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-1.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-15%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$110</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-2.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$150</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-3.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-9%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$200-$280</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-4.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$100-$180</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-5.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-10%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span><del>$270</del> $200</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-6.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$150-$270</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* If we need navigation buttons */}
                                                <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                                                <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="cell" role="tabpanel" aria-labelledby="cell-tab">
                                            <div className="product-bs-slider-2">
                                                <div className="product-slider-2 swiper-container">
                                                    <div className="swiper-wrapper">
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-1.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-15%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$110</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-2.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$105-$150</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-3.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-9%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$200-$280</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-4.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Wireless Bluetooth Over-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$100-$180</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-5.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-10%</span>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span><del>$270</del> $200</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product__item swiper-slide">
                                                            <div className="product__thumb fix">
                                                                <div className="product-image w-img">
                                                                    <a href="product-details.html">
                                                                        <img src="assets/img/product/tp-6.jpg" alt="product" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-action">
                                                                    <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                        <i className="fal fa-eye" />
                                                                        <i className="fal fa-eye" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-heart" />
                                                                        <i className="fal fa-heart" />
                                                                    </a>
                                                                    <a href="#" className="icon-box icon-box-1">
                                                                        <i className="fal fa-layer-group" />
                                                                        <i className="fal fa-layer-group" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product__content">
                                                                <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                        <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>$150-$270</span>
                                                                </div>
                                                            </div>
                                                            <div className="product__add-cart text-center">
                                                                <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* If we need navigation buttons */}
                                                <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                                                <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* topsell__area-end */}
                    {/* featured-start */}
                    <section className="featured light-bg pt-55 pb-40">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="section__head d-flex justify-content-between mb-30">
                                        <div className="section__title">
                                            <h5 className="st-titile">Top Featured Products</h5>
                                        </div>
                                        <div className="button-wrap">
                                            <a href="shop.html">See All Product <i className="fal fa-chevron-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="single-features-item single-features-item-d b-radius mb-20">
                                        <div className="row  g-0 align-items-center">
                                            <div className="col-md-6">
                                                <div className="features-thum">
                                                    <div className="features-product-image w-img">
                                                        <a href="product-details.html"><img src="assets/img/features-product/fpb-1.jpg" alt /></a>
                                                    </div>
                                                    <div className="product__offer">
                                                        <span className="discount">-15%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="product__content product__content-d">
                                                    <h6><a href="product-details.html">Samsang Galaxy A70 128GB Dual-SIM</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul className="rating-d">
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price d-price mb-10">
                                                        <span>$307.00 <del>$110</del></span>
                                                    </div>
                                                    <div className="features-des mb-25">
                                                        <ul>
                                                            <li><a href="product-details.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                                            <li><a href="product-details.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                                            <li><a href="product-details.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                            <li><a href="product-details.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="cart-option">
                                                        <a href="cart.html" className="cart-btn-2 w-100 mr-10">Add to Cart</a>
                                                        <a href="cart.html" className="transperant-btn"><i className="fal fa-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-features-item b-radius mb-20">
                                                <div className="row  g-0 align-items-center">
                                                    <div className="col-6">
                                                        <div className="features-thum">
                                                            <div className="features-product-image w-img">
                                                                <a href="product-details.html"><img src="assets/img/features-product/fp-1.jpg" alt /></a>
                                                            </div>
                                                            <div className="product__offer">
                                                                <span className="discount">-15%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="product__content product__content-d">
                                                            <h6><a href="product-details.html">Epple Watch SE Gold Aluminum</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price d-price">
                                                                <span>$307.00 <del>$110</del></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-features-item b-radius mb-20">
                                                <div className="row  g-0 align-items-center">
                                                    <div className="col-6">
                                                        <div className="features-thum">
                                                            <div className="features-product-image w-img">
                                                                <a href="product-details.html"><img src="assets/img/features-product/fp-2.jpg" alt /></a>
                                                            </div>
                                                            <div className="product__offer">
                                                                <span className="discount">-5%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="product__content product__content-d">
                                                            <h6><a href="product-details.html">G951s Pink Stereo Gaming Headset</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price d-price">
                                                                <span>$307.00 <del>$110</del></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-features-item b-radius mb-20">
                                                <div className="row  g-0 align-items-center">
                                                    <div className="col-6">
                                                        <div className="features-thum">
                                                            <div className="features-product-image w-img">
                                                                <a href="product-details.html"><img src="assets/img/features-product/fp-3.jpg" alt /></a>
                                                            </div>
                                                            <div className="product__offer">
                                                                <span className="discount">-25%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="product__content product__content-d">
                                                            <h6><a href="product-details.html">Solo3 Wireless On-Ear Headphones</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price d-price">
                                                                <span>$307.00 <del>$110</del></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-features-item b-radius mb-20">
                                                <div className="row  g-0 align-items-center">
                                                    <div className="col-6">
                                                        <div className="features-thum">
                                                            <div className="features-product-image w-img">
                                                                <a href="product-details.html"><img src="assets/img/features-product/fp-4.jpg" alt /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="product__content product__content-d">
                                                            <h6><a href="product-details.html">Men’s Short-Sleeve Pocket Oxford Shirt</a></h6>
                                                            <div className="rating mb-5">
                                                                <ul>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                </ul>
                                                                <span>(01 review)</span>
                                                            </div>
                                                            <div className="price d-price">
                                                                <span>$307.00 <del>$110</del></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* featured-end */}
                    {/* moveing-text-area-start */}
                    <section className="moveing-text-area">
                        <div className="container">
                            <div className="ovic-running">
                                <div className="wrap">
                                    <div className="inner">
                                        <p className="item">Free UK Delivery - Return Over $100.00 ( Excluding Homeware )   |   Free UK Collect From Store</p>
                                        <p className="item">Design Week / 15% Off the website / Code: AYOSALE-2020</p>
                                        <p className="item">Always iconic. Now organic. Introducing the $20 Organic Tee.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* moveing-text-area-end */}
                    {/* banner__area-start */}
                    <section className="banner__area pt-60 pb-25">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-12">
                                    <div className="banner__item p-relative w-img mb-30">
                                        <div className="banner__img">
                                            <a href="product-details.html"><img src="assets/img/banner/banner-6.jpg" alt /></a>
                                        </div>
                                        <div className="banner__content banner__content-sd text-center">
                                            <div className="banner-button mb-20">
                                                <a href="product-details.html" className="st-btn">HOT DEALS</a>
                                            </div>
                                            <h6><a href="product-details.html">Sale 30% Off <br /> Top Computer Case Gaming</a></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="banner__item p-relative mb-30 w-img">
                                                <div className="banner__img">
                                                    <a href="product-details.html"><img src="assets/img/banner/banner-7.jpg" alt /></a>
                                                </div>
                                                <div className="banner__content banner__content-sd text-center">
                                                    <h6><a href="product-details.html">Electronic Deals</a></h6>
                                                    <p>Laptop, Computer, Smartphone, Gampad</p>
                                                    <div className="banner-button mt-20 d-none d-sm-block">
                                                        <a href="product-details.html" className="st-btn-3 b-radius">Shop Deals</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="banner__item p-relative w-img mb-30">
                                                <div className="banner__img">
                                                    <a href="product-details.html"><img src="assets/img/banner/banner-8.jpg" alt /></a>
                                                </div>
                                                <div className="banner__content">
                                                    <h6><a href="product-details.html">Hot Products <br /> Laptop Ultra 4K 16”</a></h6>
                                                    <p>Discount  20% On Products</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12">
                                    <div className="banner__item p-relative mb-30 w-img">
                                        <div className="banner__img">
                                            <a href="product-details.html"><img src="assets/img/banner/banner-9.jpg" alt /></a>
                                        </div>
                                        <div className="banner__content banner__content-sd text-center">
                                            <div className="banner-button mb-20">
                                                <a href="product-details.html" className="st-btn">HOT DEALS</a>
                                            </div>
                                            <h6><a href="product-details.html">Sport Edition <br /> Best Choice of The Year</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* banner__area-end */}
                    {/* recomand-product-area-start */}
                    <section className="recomand-product-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="section__head d-flex justify-content-between mb-10">
                                        <div className="section__title">
                                            <h5 className="st-titile">Recommended For You</h5>
                                        </div>
                                        <div className="button-wrap">
                                            <a href="shop.html">See All Product <i className="fal fa-chevron-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="product-bs-slider-2">
                                    <div className="product-slider-3 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="product__item mb-20 swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-1.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                        <span className="discount">-15%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Epple iPad Pro 10.5-inch Cellular 64G</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$110</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item mb-20 swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-2.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$105-$150</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item mb-20 swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-3.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product__offer">
                                                        <span className="discount">-9%</span>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Xbox Wireless Game Controller Pink</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$200-$280</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item mb-20 swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-7.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">APPO R11s 64GB Dual 20MP Cameras</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$150.00-$270.00</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item mb-20 swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-10.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">G951s Pink Stereo Gaming Headset</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$120.00-$210.00</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product__item mb-20 swiper-slide">
                                                <div className="product__thumb fix">
                                                    <div className="product-image w-img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/tp-9.jpg" alt="product" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                            <i className="fal fa-eye" />
                                                            <i className="fal fa-eye" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-heart" />
                                                            <i className="fal fa-heart" />
                                                        </a>
                                                        <a href="#" className="icon-box icon-box-1">
                                                            <i className="fal fa-layer-group" />
                                                            <i className="fal fa-layer-group" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h6><a href="product-details.html">Epple iPhone 11 Pro Max 64GB Gold</a></h6>
                                                    <div className="rating mb-5">
                                                        <ul>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            <li><a href="#"><i className="fal fa-star" /></a></li>
                                                        </ul>
                                                        <span>(01 review)</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>$120.00-$140.00</span>
                                                    </div>
                                                </div>
                                                <div className="product__add-cart text-center">
                                                    <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* recomand-product-area-end */}
                    {/* brand-area-start */}
                    <section className="brand-area brand-area-d">
                        <div className="container">
                            <div className="brand-slider swiper-container pt-50 pb-45">
                                <div className="swiper-wrapper">
                                    <div className="brand-item w-img swiper-slide">
                                        <a href="#"><img src="assets/img/brand/brand-1.jpg" alt="brand" /></a>
                                    </div>
                                    <div className="brand-item w-img swiper-slide">
                                        <a href="#"><img src="assets/img/brand/brand-2.jpg" alt="brand" /></a>
                                    </div>
                                    <div className="brand-item w-img swiper-slide">
                                        <a href="#"><img src="assets/img/brand/brand-3.jpg" alt="brand" /></a>
                                    </div>
                                    <div className="brand-item w-img swiper-slide">
                                        <a href="#"><img src="assets/img/brand/brand-4.jpg" alt="brand" /></a>
                                    </div>
                                    <div className="brand-item w-img swiper-slide">
                                        <a href="#"><img src="assets/img/brand/brand-5.jpg" alt="brand" /></a>
                                    </div>
                                    <div className="brand-item w-img swiper-slide">
                                        <a href="#"><img src="assets/img/brand/brand-6.jpg" alt="brand" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* brand-area-end */}
                    {/* cta-area-start */}
                    <section className="cta-area d-ldark-bg pt-55 pb-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="cta-item cta-item-d mb-30">
                                        <h5 className="cta-title">Follow Us</h5>
                                        <p>We make consolidating, marketing and tracking your social media website easy.</p>
                                        <div className="cta-social">
                                            <div className="social-icon">
                                                <a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
                                                <a href="#" className="twitter"><i className="fab fa-twitter" /></a>
                                                <a href="#" className="youtube"><i className="fab fa-youtube" /></a>
                                                <a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a>
                                                <a href="#" className="rss"><i className="fas fa-rss" /></a>
                                                <a href="#" className="dribbble"><i className="fab fa-dribbble" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="cta-item mb-30">
                                        <h5 className="cta-title">Sign Up To Newsletter</h5>
                                        <p>Join 60.000+ subscribers and get a new discount coupon  on every Saturday.</p>
                                        <div className="subscribe__form">
                                            <form action="#">
                                                <input type="email" placeholder="Enter your email here..." />
                                                <button>subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="cta-item mb-30">
                                        <h5 className="cta-title">Download App</h5>
                                        <p>DukaMarket App is now available on App Store &amp; Google Play. Get it now.</p>
                                        <div className="cta-apps">
                                            <div className="apps-store">
                                                <a href="#"><img src="assets/img/brand/app_ios.png" alt /></a>
                                                <a href="#"><img src="assets/img/brand/app_android.png" alt /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* cta-area-end */}
                    {/* shop modal start */}
                    <div className="modal fade" id="productModalId" tabIndex={-1} role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered product__modal" role="document">
                            <div className="modal-content">
                                <div className="product__modal-wrapper p-relative">
                                    <div className="product__modal-close p-absolute">
                                        <button data-bs-dismiss="modal"><i className="fal fa-times" /></button>
                                    </div>
                                    <div className="product__modal-inner">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="product__modal-box">
                                                    <div className="tab-content" id="modalTabContent">
                                                        <div className="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                                                            <div className="product__modal-img w-img">
                                                                <img src="assets/img/quick-view/quick-view-1.jpg" alt />
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                                                            <div className="product__modal-img w-img">
                                                                <img src="assets/img/quick-view/quick-view-2.jpg" alt />
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                                                            <div className="product__modal-img w-img">
                                                                <img src="assets/img/quick-view/quick-view-3.jpg" alt />
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                                                            <div className="product__modal-img w-img">
                                                                <img src="assets/img/quick-view/quick-view-4.jpg" alt />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="nav nav-tabs" id="modalTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab" data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1" aria-selected="true">
                                                                <img src="assets/img/quick-view/quick-nav-1.jpg" alt />
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                                                                <img src="assets/img/quick-view/quick-nav-2.jpg" alt />
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="nav3-tab" data-bs-toggle="tab" data-bs-target="#nav3" type="button" role="tab" aria-controls="nav3" aria-selected="false">
                                                                <img src="assets/img/quick-view/quick-nav-3.jpg" alt />
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="nav4-tab" data-bs-toggle="tab" data-bs-target="#nav4" type="button" role="tab" aria-controls="nav4" aria-selected="false">
                                                                <img src="assets/img/quick-view/quick-nav-4.jpg" alt />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="product__modal-content">
                                                    <h4><a href="product-details.html">Samsung C49J89: £875, Debenhams Plus</a></h4>
                                                    <div className="product__review d-sm-flex">
                                                        <div className="rating rating__shop mb-10 mr-30">
                                                            <ul>
                                                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                                                <li><a href="#"><i className="fal fa-star" /></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product__add-review mb-15">
                                                            <span>01 review</span>
                                                        </div>
                                                    </div>
                                                    <div className="product__price">
                                                        <span>$109.00 – $307.00</span>
                                                    </div>
                                                    <div className="product__modal-des mt-20 mb-15">
                                                        <ul>
                                                            <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                                            <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                                            <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                            <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__stock mb-20">
                                                        <span className="mr-10">Availability :</span>
                                                        <span>1795 in stock</span>
                                                    </div>
                                                    <div className="product__modal-form">
                                                        <form action="#">
                                                            <div className="pro-quan-area d-lg-flex align-items-center">
                                                                <div className="product-quantity mr-20 mb-25">
                                                                    <div className="cart-plus-minus p-relative"><input type="text" defaultValue={1} /></div>
                                                                </div>
                                                                <div className="pro-cart-btn mb-25">
                                                                    <button className="cart-btn" type="submit">Add to cart</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="product__stock mb-30">
                                                        <ul>
                                                            <li><a href="#">
                                                                <span className="sku mr-10">SKU:</span>
                                                                <span>Samsung C49J89: £875, Debenhams Plus</span></a>
                                                            </li>
                                                            <li><a href="#">
                                                                <span className="cat mr-10">Categories:</span>
                                                                <span>iPhone, Tablets</span></a>
                                                            </li>
                                                            <li><a href="#">
                                                                <span className="tag mr-10">Tags:</span>
                                                                <span>Smartphone, Tablets</span></a>
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
                    {/* shop modal end */}
                </main>
            </div>

        </div>
    );
}

export default Home;