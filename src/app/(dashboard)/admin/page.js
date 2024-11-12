import React from 'react'
import Script from "next/script";

function page() {
    return (
        <>


            <div className="tap-top">
                <i data-feather="chevrons-up" />
            </div>
            {/* tap on tap ends*/}
            {/* page-wrapper Start   */}
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                {/* Page Header Start*/}
                <div className="page-header">
                    <div className="header-wrapper row m-0">
                        <div className="header-logo-wrapper col-auto p-0">
                            <div className="logo-wrapper">
                                <a href="index.html">
                                    {" "}
                                    <img
                                        className="img-fluid for-light"
                                        src="../assets/images/logo/logo.png"
                                        alt=""
                                    />
                                    <img
                                        className="img-fluid for-dark"
                                        src="../assets/images/logo/logo_dark.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="toggle-sidebar">
                                <svg className="sidebar-toggle">
                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-animation" />
                                </svg>
                            </div>
                        </div>
                        <form
                            className="col-sm-4 form-inline search-full d-none d-xl-block"
                            action="#"
                            method="get"
                        >
                            <div className="form-group">
                                <div className="Typeahead Typeahead--twitterUsers">
                                    <div className="u-posRelative">
                                        <input
                                            className="demo-input Typeahead-input form-control-plaintext w-100"
                                            type="text"
                                            placeholder="Type to Search .."
                                            name="q"
                                            title=""
                                            autofocus=""
                                        />
                                        <svg className="search-bg svg-color">
                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#search" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="nav-right col-xl-8 col-lg-12 col-auto pull-right right-header p-0">
                            <ul className="nav-menus">
                                <li className="serchinput">
                                    <div className="serchbox">
                                        <svg>
                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#search" />
                                        </svg>
                                    </div>
                                    <div className="form-group search-form">
                                        <input type="text" placeholder="Search here..." />
                                    </div>
                                </li>
                                <li className="onhover-dropdown">
                                    <div className="notification-box">
                                        <svg>
                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Bell" />
                                        </svg>
                                    </div>
                                    <div className="onhover-show-div notification-dropdown">
                                        <h6 className="f-18 mb-0 dropdown-title">Notifications</h6>
                                        <div className="notification-card">
                                            <ul>
                                                <li>
                                                    <div className="user-notification">
                                                        <div>
                                                            <img
                                                                src="../assets/images/avtar/2.jpg"
                                                                alt="avatar"
                                                            />
                                                        </div>
                                                        <div className="user-description">
                                                            <a href="letter-box.html">
                                                                <h4>You have new finical page design.</h4>
                                                            </a>
                                                            <span>Today 11:45pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="notification-btn">
                                                        <button
                                                            className="btn btn-pill btn-primary"
                                                            type="button"
                                                            title="btn btn-pill btn-primary"
                                                        >
                                                            Accpet
                                                        </button>
                                                        <button
                                                            className="btn btn-pill btn-secondary"
                                                            type="button"
                                                            title="btn btn-pill btn-primary"
                                                        >
                                                            Decline
                                                        </button>
                                                    </div>
                                                    <div className="show-btn">
                                                        <a href="index.html">
                                                            {" "}
                                                            <span>Show</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="user-notification">
                                                        <div>
                                                            <img
                                                                src="../assets/images/avtar/17.jpg"
                                                                alt="avatar"
                                                            />
                                                        </div>
                                                        <div className="user-description">
                                                            <a href="letter-box.html">
                                                                <h4>Congrats! you all task for today.</h4>
                                                            </a>
                                                            <span>Today 01:05pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="notification-btn">
                                                        <button
                                                            className="btn btn-pill btn-primary"
                                                            type="button"
                                                            title="btn btn-pill btn-primary"
                                                        >
                                                            Accpet
                                                        </button>
                                                        <button
                                                            className="btn btn-pill btn-secondary"
                                                            type="button"
                                                            title="btn btn-pill btn-primary"
                                                        >
                                                            Decline
                                                        </button>
                                                    </div>
                                                    <div className="show-btn">
                                                        <a href="index.html">
                                                            {" "}
                                                            <span>Show</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="user-notification">
                                                        <div>
                                                            {" "}
                                                            <img
                                                                src="../assets/images/avtar/18.jpg"
                                                                alt="avatar"
                                                            />
                                                        </div>
                                                        <div className="user-description">
                                                            <a href="letter-box.html">
                                                                <h4>You have new in landing page design.</h4>
                                                            </a>
                                                            <span>Today 06:55pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="notification-btn">
                                                        <button
                                                            className="btn btn-pill btn-primary"
                                                            type="button"
                                                            title="btn btn-pill btn-primary"
                                                        >
                                                            Accpet
                                                        </button>
                                                        <button
                                                            className="btn btn-pill btn-secondary"
                                                            type="button"
                                                            title="btn btn-pill btn-primary"
                                                        >
                                                            Decline
                                                        </button>
                                                    </div>
                                                    <div className="show-btn">
                                                        <a href="index.html">
                                                            {" "}
                                                            <span>Show</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="user-notification">
                                                        <div>
                                                            <img
                                                                src="../assets/images/avtar/19.jpg"
                                                                alt="avatar"
                                                            />
                                                        </div>
                                                        <div className="user-description">
                                                            <a href="letter-box.html">
                                                                <h4>Congrats! you all task for today.</h4>
                                                            </a>
                                                            <span>Today 06:55pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="notification-btn">
                                                        <button
                                                            className="btn btn-pill btn-primary"
                                                            type="button"
                                                            title="btn btn-pill btn-primary"
                                                        >
                                                            Accpet
                                                        </button>
                                                        <button
                                                            className="btn btn-pill btn-secondary"
                                                            type="button"
                                                            title="btn btn-pill btn-primary"
                                                        >
                                                            Decline
                                                        </button>
                                                    </div>
                                                    <div className="show-btn">
                                                        {" "}
                                                        <a href="index.html">
                                                            {" "}
                                                            <span>Show</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    {" "}
                                                    <a className="f-w-700" href="letter-box.html">
                                                        Check all{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="onhover-dropdown">
                                    <svg>
                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Bookmark" />
                                    </svg>
                                    <div className="onhover-show-div bookmark-flip">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="front">
                                                    <h6 className="f-18 mb-0 dropdown-title">Bookmark</h6>
                                                    <ul className="bookmark-dropdown">
                                                        <li>
                                                            <div className="row">
                                                                <div className="col-4 text-center">
                                                                    <a href="form-validation.html">
                                                                        <div className="bookmark-content">
                                                                            <div className="bookmark-icon bg-light-primary">
                                                                                <i data-feather="file-text" />
                                                                            </div>
                                                                            <span>Forms</span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="col-4 text-center">
                                                                    <a href="user-profile.html">
                                                                        <div className="bookmark-content">
                                                                            <div className="bookmark-icon bg-light-secondary">
                                                                                <i data-feather="user" />
                                                                            </div>
                                                                            <span>Profile</span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="col-4 text-center">
                                                                    <a href="bootstrap-basic-table.html">
                                                                        <div className="bookmark-content">
                                                                            <div className="bookmark-icon bg-light-warning">
                                                                                {" "}
                                                                                <i data-feather="server"> </i>
                                                                            </div>
                                                                            <span>Tables </span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="text-centermedia-body">
                                                            {" "}
                                                            <a
                                                                className="flip-btn f-w-700"
                                                                id="flip-btn"
                                                                href="javascript:void(0)"
                                                            >
                                                                Add New Bookmark
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="back">
                                                    <ul>
                                                        <li>
                                                            <div className="bookmark-dropdown flip-back-content">
                                                                <input type="text" placeholder="search..." />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="f-w-700 d-block flip-back"
                                                                id="flip-back"
                                                                href="javascript:void(0)"
                                                            >
                                                                Back
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="onhover-dropdown">
                                    <div className="message position-relative">
                                        <svg>
                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Message" />
                                        </svg>
                                        <span className="rounded-pill badge-danger" />
                                    </div>
                                    <div className="onhover-show-div message-dropdown">
                                        <h6 className="f-18 mb-0 dropdown-title">Message </h6>
                                        <ul>
                                            <li>
                                                <div className="d-flex align-items-start">
                                                    <div className="message-img bg-light-primary">
                                                        <img src="../assets/images/user/3.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5>
                                                            <a href="letter-box.html">Emay Walter</a>
                                                        </h5>
                                                        <p>Do you want to go see movie?</p>
                                                    </div>
                                                    <div className="notification-right">
                                                        <i data-feather="x" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-start">
                                                    <div className="message-img bg-light-primary">
                                                        <img src="../assets/images/user/6.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5>
                                                            {" "}
                                                            <a href="letter-box.html">Jason Borne</a>
                                                        </h5>
                                                        <p>Thank you for rating us.</p>
                                                    </div>
                                                    <div className="notification-right">
                                                        <i data-feather="x" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-start">
                                                    <div className="message-img bg-light-primary">
                                                        <img src="../assets/images/user/10.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5>
                                                            {" "}
                                                            <a href="letter-box.html">Sarah Loren</a>
                                                        </h5>
                                                        <p>What`s the project report update?</p>
                                                    </div>
                                                    <div className="notification-right">
                                                        <i data-feather="x" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                {" "}
                                                <a className="f-w-700" href="private-chat.html">
                                                    Check all
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="cart-nav onhover-dropdown">
                                    <div className="cart-box">
                                        <svg>
                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Buy" />
                                        </svg>
                                    </div>
                                    <div className="cart-dropdown onhover-show-div">
                                        <h6 className="f-18 mb-0 dropdown-title">Cart</h6>
                                        <ul>
                                            <li>
                                                <div className="d-flex">
                                                    <img
                                                        className="img-fluid b-r-5 img-50"
                                                        src="../assets/images/ecommerce/05.jpg"
                                                        alt=""
                                                    />
                                                    <div className="flex-grow-1">
                                                        {" "}
                                                        <span>Women's Track Suit</span>
                                                        <h6 className="font-primary">8 x $65.00</h6>
                                                    </div>
                                                    <div className="close-circle">
                                                        <a className="bg-primary" href="#">
                                                            <i data-feather="x" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <img
                                                        className="img-fluid b-r-5 img-50"
                                                        src="../assets/images/ecommerce/02.jpg"
                                                        alt=""
                                                    />
                                                    <div className="flex-grow-1">
                                                        <span>Men's Jacket</span>
                                                        <h6 className="font-primary">10 x $50.00</h6>
                                                    </div>
                                                    <div className="close-circle">
                                                        <a className="bg-primary" href="#">
                                                            <i data-feather="x" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="total">
                                                <h6 className="mb-0">
                                                    Order Total :<span className="f-right">$1020.00</span>
                                                </h6>
                                            </li>
                                            <li className="text-center">
                                                {" "}
                                                <a href="cart.html">
                                                    <button className="btn btn-outline-primary" type="button">
                                                        View Cart
                                                    </button>
                                                </a>
                                                <a
                                                    className="btn btn-primary view-checkout"
                                                    href="checkout.html"
                                                >
                                                    Checkout{" "}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="mode">
                                        <svg className="for-dark">
                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#moon" />
                                        </svg>
                                        <svg className="for-light">
                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Sun" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="language-nav">
                                    <div className="translate_wrapper">
                                        <div className="current_lang">
                                            <div className="lang">
                                                <i className="flag-icon flag-icon-gb" />
                                                <span className="lang-txt box-col-none">EN </span>
                                            </div>
                                        </div>
                                        <div className="more_lang">
                                            <div className="lang selected" data-value="en">
                                                <i className="flag-icon flag-icon-us" />
                                                <span className="lang-txt">
                                                    English<span> (US)</span>
                                                </span>
                                            </div>
                                            <div className="lang" data-value="de">
                                                <i className="flag-icon flag-icon-de" />
                                                <span className="lang-txt">Deutsch</span>
                                            </div>
                                            <div className="lang" data-value="es">
                                                <i className="flag-icon flag-icon-es" />
                                                <span className="lang-txt">Español</span>
                                            </div>
                                            <div className="lang" data-value="fr">
                                                <i className="flag-icon flag-icon-fr" />
                                                <span className="lang-txt">Français</span>
                                            </div>
                                            <div className="lang" data-value="pt">
                                                <i className="flag-icon flag-icon-pt" />
                                                <span className="lang-txt">
                                                    Português<span> (BR)</span>
                                                </span>
                                            </div>
                                            <div className="lang" data-value="cn">
                                                <i className="flag-icon flag-icon-cn" />
                                                <span className="lang-txt">简体中文</span>
                                            </div>
                                            <div className="lang" data-value="ae">
                                                <i className="flag-icon flag-icon-ae" />
                                                <span className="lang-txt">
                                                    لعربية
                                                    <span> (ae)</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="profile-nav onhover-dropdown pe-0 py-0">
                                    <div className="d-flex align-items-center profile-media">
                                        <img
                                            className="b-r-25"
                                            src="../assets/images/dashboard/profile.png"
                                            alt=""
                                        />
                                        <div className="flex-grow-1 user">
                                            <span>Helen Walter</span>
                                            <p className="mb-0 font-nunito">
                                                Admin
                                                <svg>
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#header-arrow-down" />
                                                </svg>
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="profile-dropdown onhover-show-div">
                                        <li>
                                            <a href="user-profile.html">
                                                <i data-feather="user" />
                                                <span>Account </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="letter-box.html">
                                                <i data-feather="mail" />
                                                <span>Inbox</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="task.html">
                                                <i data-feather="file-text" />
                                                <span>Taskboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="edit-profile.html">
                                                <i data-feather="settings" />
                                                <span>Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="login.html">
                                                {" "}
                                                <i data-feather="log-in" />
                                                <span>Log Out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Header Ends                              */}
                {/* Page body Start */}
                <div className="page-body-wrapper">
                    {/* Page Sidebar Start*/}
                    <div className="sidebar-wrapper" data-layout="stroke-svg">
                        <div>
                            <div className="logo-wrapper">
                                <a href="index.html">
                                    {" "}
                                    <img
                                        className="img-fluid for-light"
                                        src="../assets/images/logo/logo.png"
                                        alt=""
                                    />
                                    <img
                                        className="img-fluid for-dark"
                                        src="../assets/images/logo/logo_dark.png"
                                        alt=""
                                    />
                                </a>
                                <div className="toggle-sidebar">
                                    <svg className="sidebar-toggle">
                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#toggle-icon" />
                                    </svg>
                                </div>
                            </div>
                            <div className="logo-icon-wrapper">
                                <a href="index.html">
                                    <img
                                        className="img-fluid"
                                        src="../assets/images/logo/logo-icon.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <nav className="sidebar-main">
                                <div className="left-arrow" id="left-arrow">
                                    <i data-feather="arrow-left" />
                                </div>
                                <div id="sidebar-menu">
                                    <ul className="sidebar-links" id="simple-bar">
                                        <li className="back-btn">
                                            <a href="index.html">
                                                <img
                                                    className="img-fluid"
                                                    src="../assets/images/logo/logo-icon.png"
                                                    alt=""
                                                />
                                            </a>
                                            <div className="mobile-back text-end">
                                                <span>Back</span>
                                                <i className="fa fa-angle-right ps-2" aria-hidden="true" />
                                            </div>
                                        </li>
                                        <li className="pin-title sidebar-main-title">
                                            <div>
                                                <h6>Pinned</h6>
                                            </div>
                                        </li>
                                        <li className="sidebar-main-title">
                                            <div>
                                                <h6 className="lan-1">General</h6>
                                            </div>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-home" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-home" />
                                                </svg>
                                                <span className="lan-3">Dashboard </span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a className="lan-4" href="index.html">
                                                        Default
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="lan-5" href="dashboard-02.html">
                                                        Ecommerce
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-widget" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-widget" />
                                                </svg>
                                                <span className="lan-6">Widgets</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="general-widget.html">General</a>
                                                </li>
                                                <li>
                                                    {" "}
                                                    <a href="chart-widget.html">Chart</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            {" "}
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-layout" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-layout" />
                                                </svg>
                                                <span className="lan-7">Page layout</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="box-layout.html">Boxed</a>
                                                </li>
                                                <li>
                                                    <a href="layout-rtl.html">RTL</a>
                                                </li>
                                                <li>
                                                    <a href="layout-dark.html">Dark Layout</a>
                                                </li>
                                                <li>
                                                    <a href="hide-on-scroll.html">Hide Nav Scroll</a>
                                                </li>
                                                <li>
                                                    <a href="footer-light.html">Footer Light</a>
                                                </li>
                                                <li>
                                                    <a href="footer-dark.html">Footer Dark</a>
                                                </li>
                                                <li>
                                                    <a href="footer-fixed.html">Footer Fixed</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-main-title">
                                            <div>
                                                <h6 className="lan-8">Applications</h6>
                                            </div>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack"> </i>
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-project" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-project" />
                                                </svg>
                                                <span>Project </span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="projects.html">Project List</a>
                                                </li>
                                                <li>
                                                    <a href="projectcreate.html">Create new</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="file-manager.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-file" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-file" />
                                                </svg>
                                                <span>File manager</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack"> </i>
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="kanban.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-board" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-board" />
                                                </svg>
                                                <span>kanban Board</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-ecommerce" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-ecommerce" />
                                                </svg>
                                                <span>Ecommerce</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="add-products.html">Add Product</a>
                                                </li>
                                                <li>
                                                    <a href="product.html">Product</a>
                                                </li>
                                                <li>
                                                    <a href="product-page.html">Product page</a>
                                                </li>
                                                <li>
                                                    <a href="list-products.html">Product list</a>
                                                </li>
                                                <li>
                                                    <a href="payment-details.html">Payment Details</a>
                                                </li>
                                                <li>
                                                    <a href="order-history.html">Order History</a>
                                                </li>
                                                <li>
                                                    <a className="submenu-title" href="#">
                                                        Invoices
                                                        <h5 className="sub-arrow">
                                                            <i className="fa fa-angle-right" />
                                                        </h5>
                                                    </a>
                                                    <ul className="submenu-content opensubmegamenu">
                                                        <li>
                                                            <a href="invoice-1.html">Invoice-1</a>
                                                        </li>
                                                        <li>
                                                            <a href="invoice-2.html">Invoice-2</a>
                                                        </li>
                                                        <li>
                                                            <a href="invoice-3.html">Invoice-3</a>
                                                        </li>
                                                        <li>
                                                            <a href="invoice-4.html">Invoice-4</a>
                                                        </li>
                                                        <li>
                                                            <a href="invoice-5.html">Invoice-5</a>
                                                        </li>
                                                        <li>
                                                            <a href="invoice-template.html">Invoice-6</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="cart.html">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="list-wish.html">Wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">Checkout</a>
                                                </li>
                                                <li>
                                                    <a href="pricing.html">Pricing </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack"> </i>
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="letter-box.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-email" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-email" />
                                                </svg>
                                                <span>Letter Box</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-chat" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-chat" />
                                                </svg>
                                                <span>Chat</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="private-chat.html">Private Chat</a>
                                                </li>
                                                <li>
                                                    <a href="group-chat.html">Group Chat</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-user" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-user" />
                                                </svg>
                                                <span>Users</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="user-profile.html">Users Profile</a>
                                                </li>
                                                <li>
                                                    <a href="edit-profile.html">Users Edit</a>
                                                </li>
                                                <li>
                                                    <a href="user-cards.html">Users Cards</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="bookmark.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-bookmark" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-bookmark">
                                                        {" "}
                                                    </use>
                                                </svg>
                                                <span>Bookmarks </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="contacts.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-contact" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-contact">
                                                        {" "}
                                                    </use>
                                                </svg>
                                                <span>Contacts</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="task.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-task" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-task">
                                                        {" "}
                                                    </use>
                                                </svg>
                                                <span>Tasks</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="calendar-basic.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-calendar" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-calender" />
                                                </svg>
                                                <span>Calendar</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="social-app.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-social" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-social">
                                                        {" "}
                                                    </use>
                                                </svg>
                                                <span>Social App</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="to-do.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-to-do" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-to-do">
                                                        {" "}
                                                    </use>
                                                </svg>
                                                <span>To-Do</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="search.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-search" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-search">
                                                        {" "}
                                                    </use>
                                                </svg>
                                                <span>Search Result</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-main-title">
                                            <div>
                                                <h6>Forms &amp; Table</h6>
                                            </div>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-form" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-form">
                                                        {" "}
                                                    </use>
                                                </svg>
                                                <span>Forms</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a className="submenu-title" href="#">
                                                        Form Controls
                                                        <h5 className="sub-arrow">
                                                            <i className="fa fa-angle-right" />
                                                        </h5>
                                                    </a>
                                                    <ul className="submenu-content opensubmegamenu">
                                                        <li>
                                                            <a href="form-validation.html">Form Validation</a>
                                                        </li>
                                                        <li>
                                                            <a href="base-input.html">Base Inputs</a>
                                                        </li>
                                                        <li>
                                                            <a href="radio-checkbox-control.html">
                                                                Checkbox &amp; Radio
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="input-group.html">Input Groups</a>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <a href="input-mask.html">Input Mask</a>
                                                        </li>
                                                        <li>
                                                            <a href="megaoptions.html">Mega Options</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-title" href="#">
                                                        Form Widgets
                                                        <h5 className="sub-arrow">
                                                            <i className="fa fa-angle-right" />
                                                        </h5>
                                                    </a>
                                                    <ul className="submenu-content opensubmegamenu">
                                                        <li>
                                                            <a href="datepicker.html">Datepicker</a>
                                                        </li>
                                                        <li>
                                                            <a href="touchspin.html">Touchspin</a>
                                                        </li>
                                                        <li>
                                                            <a href="select2.html">Select2</a>
                                                        </li>
                                                        <li>
                                                            <a href="switch.html">Switch</a>
                                                        </li>
                                                        <li>
                                                            <a href="typeahead.html">Typeahead</a>
                                                        </li>
                                                        <li>
                                                            <a href="clipboard.html">Clipboard</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-title" href="#">
                                                        Form layout
                                                        <h5 className="sub-arrow">
                                                            <i className="fa fa-angle-right" />
                                                        </h5>
                                                    </a>
                                                    <ul className="submenu-content opensubmegamenu">
                                                        <li>
                                                            <a href="form-wizard.html">Form Wizard 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="form-wizard-two.html">Form Wizard 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="two-factor.html">Two Factor</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-table" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-table" />
                                                </svg>
                                                <span>Tables</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a className="submenu-title" href="#">
                                                        Bootstrap Tables
                                                        <h5 className="sub-arrow">
                                                            <i className="fa fa-angle-right" />
                                                        </h5>
                                                    </a>
                                                    <ul className="submenu-content opensubmegamenu">
                                                        <li>
                                                            <a href="bootstrap-basic-table.html">Basic Tables</a>
                                                        </li>
                                                        <li>
                                                            <a href="table-components.html">Table components</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="submenu-title" href="#">
                                                        Data Tables
                                                        <h5 className="sub-arrow">
                                                            <i className="fa fa-angle-right" />
                                                        </h5>
                                                    </a>
                                                    <ul className="submenu-content opensubmegamenu">
                                                        <li>
                                                            <a href="datatable-basic-init.html">Basic Init</a>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <a href="datatable-advance.html">Advance Init </a>
                                                        </li>
                                                        <li>
                                                            <a href="datatable-API.html">API</a>
                                                        </li>
                                                        <li>
                                                            <a href="datatable-data-source.html">Data Sources</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="datatable-ext-autofill.html">Ex. Data Tables</a>
                                                </li>
                                                <li>
                                                    <a href="jsgrid-table.html">Js Grid Table </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-main-title">
                                            <div>
                                                <h6>Components</h6>
                                            </div>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-ui-kits" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-ui-kits" />
                                                </svg>
                                                <span>Ui Kits</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="typography.html">Typography</a>
                                                </li>
                                                <li>
                                                    <a href="avatars.html">Avatars</a>
                                                </li>
                                                <li>
                                                    <a href="helper-classes.html">helper classes</a>
                                                </li>
                                                <li>
                                                    <a href="grid.html">Grid</a>
                                                </li>
                                                <li>
                                                    <a href="tag-pills.html">Tag &amp; pills</a>
                                                </li>
                                                <li>
                                                    <a href="progress-bar.html">Progress</a>
                                                </li>
                                                <li>
                                                    <a href="modal.html">Modal</a>
                                                </li>
                                                <li>
                                                    <a href="alert.html">Alert</a>
                                                </li>
                                                <li>
                                                    <a href="popover.html">Popover</a>
                                                </li>
                                                <li>
                                                    <a href="tooltip.html">Tooltip</a>
                                                </li>
                                                <li>
                                                    <a href="dropdown.html">Dropdown</a>
                                                </li>
                                                <li>
                                                    <a href="according.html">Accordion</a>
                                                </li>
                                                <li>
                                                    <a href="tab-bootstrap.html">Tabs</a>
                                                </li>
                                                <li>
                                                    <a href="list.html">Lists</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-bonus-kit" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-bonus-kit" />
                                                </svg>
                                                <span>Bonus Ui</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="scrollable.html">Scrollable</a>
                                                </li>
                                                <li>
                                                    <a href="tree.html">Tree view</a>
                                                </li>
                                                <li>
                                                    <a href="toasts.html">Toasts</a>
                                                </li>
                                                <li>
                                                    <a href="rating.html">Rating</a>
                                                </li>
                                                <li>
                                                    <a href="dropzone.html">dropzone</a>
                                                </li>
                                                <li>
                                                    <a href="tour.html">Tour</a>
                                                </li>
                                                <li>
                                                    <a href="sweet-alert2.html">SweetAlert2</a>
                                                </li>
                                                <li>
                                                    <a href="modal-animated.html">Animated Modal</a>
                                                </li>
                                                <li>
                                                    <a href="owl-carousel.html">Owl Carousel</a>
                                                </li>
                                                <li>
                                                    <a href="ribbons.html">Ribbons</a>
                                                </li>
                                                <li>
                                                    <a href="pagination.html">Pagination</a>
                                                </li>
                                                <li>
                                                    <a href="breadcrumb.html">Breadcrumb</a>
                                                </li>
                                                <li>
                                                    <a href="range-slider.html">Range Slider</a>
                                                </li>
                                                <li>
                                                    <a href="image-cropper.html">Image cropper</a>
                                                </li>
                                                <li>
                                                    <a href="basic-card.html">Basic Card</a>
                                                </li>
                                                <li>
                                                    <a href="creative-card.html">Creative Card</a>
                                                </li>
                                                <li>
                                                    <a href="dragable-card.html">Draggable Card</a>
                                                </li>
                                                <li>
                                                    <a href="timeline-v-1.html">Timeline </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-animation" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-animation" />
                                                </svg>
                                                <span>Animation</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="animate.html">Animate</a>
                                                </li>
                                                <li>
                                                    <a href="scroll-reval.html">Scroll Reveal</a>
                                                </li>
                                                <li>
                                                    <a href="AOS.html">AOS animation</a>
                                                </li>
                                                <li>
                                                    <a href="tilt.html">Tilt Animation</a>
                                                </li>
                                                <li>
                                                    <a href="wow.html">Wow Animation</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-icons" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-icons" />
                                                </svg>
                                                <span>Icons</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="flag-icon.html">Flag icon</a>
                                                </li>
                                                <li>
                                                    <a href="font-awesome.html">Fontawesome Icon</a>
                                                </li>
                                                <li>
                                                    <a href="ico-icon.html">Ico Icon</a>
                                                </li>
                                                <li>
                                                    <a href="themify-icon.html">Themify Icon</a>
                                                </li>
                                                <li>
                                                    <a href="feather-icon.html">Feather icon</a>
                                                </li>
                                                <li>
                                                    <a href="whether-icon.html">Whether Icon</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-button" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-button" />
                                                </svg>
                                                <span>Buttons</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="buttons.html">Default Style</a>
                                                </li>
                                                <li>
                                                    <a href="button-group.html">Button Group</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-charts" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-charts" />
                                                </svg>
                                                <span>Charts</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="chart-apex.html">Apex Chart</a>
                                                </li>
                                                <li>
                                                    <a href="chart-google.html">Google Chart</a>
                                                </li>
                                                <li>
                                                    <a href="chart-sparkline.html">Sparkline chart</a>
                                                </li>
                                                <li>
                                                    <a href="chart-flot.html">Flot Chart</a>
                                                </li>
                                                <li>
                                                    <a href="chart-knob.html">Knob Chart</a>
                                                </li>
                                                <li>
                                                    <a href="chart-morris.html">Morris Chart</a>
                                                </li>
                                                <li>
                                                    <a href="chartjs.html">Chatjs Chart</a>
                                                </li>
                                                <li>
                                                    <a href="chartist.html">Chartist Chart</a>
                                                </li>
                                                <li>
                                                    <a href="chart-peity.html">Peity Chart</a>
                                                </li>
                                                <li>
                                                    <a href="echarts.html">Echarts</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-main-title">
                                            <div>
                                                <h6>Pages</h6>
                                            </div>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="landing-page.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-landing-page"></use>
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-landing-page" />
                                                </svg>
                                                <span>Landing page</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="sample-page.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-sample-page" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-sample-page" />
                                                </svg>
                                                <span>Sample page</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="translate.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-internationalization"></use>
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-internationalization"></use>
                                                </svg>
                                                <span>Translate</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="https://admin.pixelstrap.net/zono/starter-kit/index.html"
                                                target="_blank"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-starter-kit" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-starter-kit" />
                                                </svg>
                                                <span>Starter kit</span>
                                            </a>
                                        </li>
                                        <li className="mega-menu sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-others" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-others" />
                                                </svg>
                                                <span>Others</span>
                                            </a>
                                            <div className="mega-menu-container menu-content">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>Error Page</h5>
                                                                </div>
                                                                <ul className="submenu-content opensubmegamenu">
                                                                    <li>
                                                                        <a href="error-400.html">Error 400</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="error-401.html">Error 401</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="error-403.html">Error 403</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="error-404.html">Error 404</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="error-500.html">Error 500</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="error-503.html">Error 503</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5> Authentication</h5>
                                                                </div>
                                                                <ul className="submenu-content opensubmegamenu">
                                                                    <li>
                                                                        <a href="login.html" target="_blank">
                                                                            Login Simple
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="login_one.html" target="_blank">
                                                                            Login with bg image
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="login_two.html" target="_blank">
                                                                            Login with image two{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="login-bs-validation.html"
                                                                            target="_blank"
                                                                        >
                                                                            Login With validation
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="login-bs-tt-validation.html"
                                                                            target="_blank"
                                                                        >
                                                                            Login with tooltip
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="login-sa-validation.html"
                                                                            target="_blank"
                                                                        >
                                                                            Login with sweetalert
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="sign-up.html" target="_blank">
                                                                            Register Simple
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="sign-up-one.html" target="_blank">
                                                                            Register with Bg Image{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="sign-up-two.html" target="_blank">
                                                                            Register with image two
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="sign-up-wizard.html" target="_blank">
                                                                            Register wizard
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="unlock.html">Unlock User</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="forget-password.html">
                                                                            Forget Password
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="reset-password.html">Reset Password</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="maintenance.html">Maintenance</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>Coming Soon</h5>
                                                                </div>
                                                                <ul className="submenu-content opensubmegamenu">
                                                                    <li>
                                                                        <a href="comingsoon.html">Coming Simple</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="comingsoon-bg-video.html">
                                                                            Coming with Bg video
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="comingsoon-bg-img.html">
                                                                            Coming with Bg Image
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>Email templates</h5>
                                                                </div>
                                                                <ul className="submenu-content opensubmegamenu">
                                                                    <li>
                                                                        <a href="basic-template.html">Basic Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="email-header.html">
                                                                            Basic With Header
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="template-email.html">
                                                                            Ecomerce Template
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="template-email-2.html">
                                                                            Email Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="ecommerce-templates.html">
                                                                            Ecommerce Email
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="email-order-success.html">
                                                                            Order Success
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sidebar-main-title">
                                            <div>
                                                <h6>Miscellaneous</h6>
                                            </div>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-gallery" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-gallery" />
                                                </svg>
                                                <span>Gallery</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="gallery.html">Gallery Grid</a>
                                                </li>
                                                <li>
                                                    <a href="gallery-with-description.html">
                                                        Gallery Grid Desc
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="gallery-masonry.html">Masonry Gallery</a>
                                                </li>
                                                <li>
                                                    <a href="masonry-gallery-with-disc.html">
                                                        Masonry with Desc
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="gallery-hover.html">Hover Effects</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-blog" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-blog" />
                                                </svg>
                                                <span>Blog</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="blog.html">Blog Details</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">Blog Single</a>
                                                </li>
                                                <li>
                                                    <a href="add-post.html">Add Post</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="faq.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-faq" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-faq" />
                                                </svg>
                                                <span>FAQ</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-job-search" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-job-search" />
                                                </svg>
                                                <span>Job Search</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="job-cards-view.html">Cards view</a>
                                                </li>
                                                <li>
                                                    <a href="job-list-view.html">List View</a>
                                                </li>
                                                <li>
                                                    <a href="job-details.html">Job Details</a>
                                                </li>
                                                <li>
                                                    <a href="job-apply.html">Apply</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-learning" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-learning" />
                                                </svg>
                                                <span>Learning</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="learning-list-view.html">Learning List</a>
                                                </li>
                                                <li>
                                                    <a href="learning-detailed.html">Detailed Course</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-maps" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-maps" />
                                                </svg>
                                                <span>Maps</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="map-js.html">Maps JS</a>
                                                </li>
                                                <li>
                                                    <a href="vector-map.html">Vector Maps</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a className="sidebar-link sidebar-title" href="#">
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-editors" />
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-editors" />
                                                </svg>
                                                <span>Editors</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li>
                                                    <a href="summernote.html">Summer Note</a>
                                                </li>
                                                <li>
                                                    <a href="ckeditor.html">CK editor</a>
                                                </li>
                                                <li>
                                                    <a href="simple-MDE.html">MDE editor</a>
                                                </li>
                                                <li>
                                                    <a href="ace-code-editor.html">ACE code editor </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="knowledgebase.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-knowledgebase"></use>
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-knowledgebase" />
                                                </svg>
                                                <span>Knowledgebase</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <i className="fa fa-thumb-tack" />
                                            <a
                                                className="sidebar-link sidebar-title link-nav"
                                                href="support-ticket.html"
                                            >
                                                <svg className="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-support-tickets"></use>
                                                </svg>
                                                <svg className="fill-icon">
                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#fill-support-tickets"></use>
                                                </svg>
                                                <span>Support Ticket</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-arrow" id="right-arrow">
                                    <i data-feather="arrow-right" />
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Page Sidebar Ends*/}
                    <div className="page-body">
                        <div className="container-fluid">
                            <div className="page-title">
                                <div className="row">
                                    <div className="col-xl-4 col-sm-7 box-col-3">
                                        <h3>Default Dashboard</h3>
                                    </div>
                                    <div className="col-5 d-none d-xl-block">
                                        {/* Page Sub Header Start*/}
                                        <div className="left-header main-sub-header p-0">
                                            <div className="left-menu-header">
                                                <ul className="header-left">
                                                    <li className="onhover-dropdown">
                                                        {" "}
                                                        <span className="f-w-700">General </span>
                                                        <ul className="onhover-show-div left-dropdown">
                                                            <li className="flyout-right">
                                                                <a href="#">Dashboards</a>
                                                                <i className="fa fa-angle-right" />
                                                                <ul>
                                                                    <li>
                                                                        {" "}
                                                                        <a href="index.html">Default </a>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <a href="dashboard-02.html">Ecommerce</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Widgets</a>
                                                                <i className="fa fa-angle-right" />
                                                                <ul>
                                                                    <li>
                                                                        <a href="general-widget.html">General</a>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <a href="chart-widget.html">chart</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="flyout-right">
                                                                {" "}
                                                                <a href="#">Page layout</a>
                                                                <i className="fa fa-angle-right" />
                                                                <ul>
                                                                    <li>
                                                                        {" "}
                                                                        <a href="box-layout.html">Boxed </a>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <a href="layout-rtl.html">RTL</a>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <a href="layout-dark.html">Dark Layout</a>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <a href="footer-light.html">
                                                                            footer-light.html
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <a href="footer-dark.html">footer-dark.html</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="footer-fixed.html">
                                                                            footer-fixed.html
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="onhover-dropdown">
                                                        <span className="f-w-700">Components</span>
                                                        <ul className="onhover-show-div left-dropdown">
                                                            <li className="flyout-right">
                                                                <a href="#">Ui Kits</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="typography.html">Typography</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="avatars.html">Avatars</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="helper-classes.html">helper classes</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="grid.html">Grid</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="tag-pills.html">Tag &amp; pills</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="progress-bar.html">Progress</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="modal.html">Modal</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="alert.html">Alert</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="popover.html">Popover</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="tooltip.html">Tooltip</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="dropdown.html">Dropdown</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="according.html">Accordion</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="tab-bootstrap.html">Tabs</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="list.html">Lists</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Bonus Ui</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="scrollable.html">Scrollable</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="tree.html">Tree view</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="toasts.html">Toasts</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="rating.html">Rating</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="dropzone.html">dropzone</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="tour.html">Tour</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="sweet-alert2.html">SweetAlert2</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="modal-animated.html">Animated Modal</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="owl-carousel.html">Owl Carousel</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="ribbons.html">Ribbons</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="pagination.html">Pagination</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="breadcrumb.html">Breadcrumb</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="range-slider.html">Range Slider</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="image-cropper.html">Image cropper</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="basic-card.html">Basic Card</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="creative-card.html">Creative Card</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="dragable-card.html">Draggable Card</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="timeline-v-1.html">Timeline </a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Animation</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="animate.html">Animate</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="scroll-reval.html">Scroll Reveal</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="AOS.html">AOS animation</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="tilt.html">Tilt Animation</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="wow.html">Wow Animation</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Icons</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="flag-icon.html">Flag icon</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="font-awesome.html">Fontawesome Icon</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="ico-icon.html">Ico Icon</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="themify-icon.html">Themify Icon</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="feather-icon.html">Feather icon</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="whether-icon.html">Whether Icon</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Buttons</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="buttons.html">Default Style</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="button-group.html">Button Group</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Charts</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="echarts.html">Echarts</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chart-apex.html">Apex Chart</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chart-google.html">Google Chart</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chart-sparkline.html">
                                                                            Sparkline chart
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chart-flot.html">Flot Chart </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chart-knob.html">Knob Chart</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chart-morris.html">Morris Chart</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chartjs.html">Chatjs Chart</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chartist.html">Chartist Chart</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="chart-peity.html">Peity Chart</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="onhover-dropdown">
                                                        {" "}
                                                        <span className="f-w-700">Applications</span>
                                                        <ul className="onhover-show-div left-dropdown">
                                                            <li className="flyout-right">
                                                                <a href="#">Project</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="projects.html">Project List</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="projectcreate.html">Create new</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li>
                                                                <a href="file-manager.html">File manager</a>
                                                            </li>
                                                            <li>
                                                                <a href="kanban.html">kanban Board </a>
                                                            </li>
                                                            <li className="flyout-right">
                                                                {" "}
                                                                <a href="#">Ecommerce </a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="add-products.html">Add Product</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product.html">Product</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product-page.html">Product page</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="list-products.html">Product list</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="payment-details.html">
                                                                            Payment Details
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="order-history.html">Order History</a>
                                                                    </li>
                                                                    <li className="flyout-right">
                                                                        <a className="submenu-title" href="#">
                                                                            Invoices
                                                                        </a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="invoice-1.html">Invoice-1</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="invoice-2.html">Invoice-2</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="invoice-3.html">Invoice-3</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="invoice-4.html">Invoice-4</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="invoice-5.html">Invoice-5</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="invoice-template.html">
                                                                                    Invoice-6
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <a href="cart.html">Cart</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="list-wish.html">Wishlist</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="checkout.html">Checkout</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="pricing.html">Pricing </a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Email</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="letter-box.html">Email App</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="email-compose.html">Email Compose</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="letter-box.html">Letter Box</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right"> </i>
                                                            </li>
                                                            <li className="flyout-right">
                                                                {" "}
                                                                <a href="#">Chat</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="private-chat.html">Private Chat</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="group-chat.html">Group Chat</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">User</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="user-profile.html">Users Profile</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="edit-profile.html">Users Edit</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="user-cards.html">Users Cards</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right"> </i>
                                                            </li>
                                                            <li>
                                                                <a href="bookmark.html">Bookmarks</a>
                                                            </li>
                                                            <li>
                                                                <a href="contacts.html">Contacts</a>
                                                            </li>
                                                            <li>
                                                                <a href="task.html">Task</a>
                                                            </li>
                                                            <li>
                                                                <a href="calendar-basic.html">Calendar</a>
                                                            </li>
                                                            <li>
                                                                <a href="social-app.html">Social-app</a>
                                                            </li>
                                                            <li>
                                                                <a href="to-do.html">To-Do</a>
                                                            </li>
                                                            <li>
                                                                <a href="search.html">Search Result</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="onhover-dropdown">
                                                        <span className="f-w-700">Pages</span>
                                                        <ul className="onhover-show-div left-dropdown">
                                                            <li>
                                                                <a href="blog.html">Landing page</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-single.html">Sample page</a>
                                                            </li>
                                                            <li>
                                                                <a href="add-post.html">Starter kit</a>
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Others </a>
                                                                <i className="fa fa-angle-right" />
                                                                <ul>
                                                                    <li className="flyout-right">
                                                                        <a href="#">Error Page</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="error-400.html">Error 400</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="error-401.html">Error 401</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="error-403.html">Error 403</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="error-404.html">Error 404</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="error-500.html">Error 500</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="error-503.html">Error 503</a>
                                                                            </li>
                                                                        </ul>
                                                                        <i className="fa fa-angle-right"> </i>
                                                                    </li>
                                                                    <li className="flyout-right">
                                                                        {" "}
                                                                        <a href="#">Authentication</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="login.html" target="_blank">
                                                                                    Login Simple
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="login_one.html" target="_blank">
                                                                                    Login with bg image
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="login_two.html" target="_blank">
                                                                                    Login with image two{" "}
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="login-bs-validation.html"
                                                                                    target="_blank"
                                                                                >
                                                                                    Login With validation
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="login-bs-tt-validation.html"
                                                                                    target="_blank"
                                                                                >
                                                                                    Login with tooltip
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="login-sa-validation.html"
                                                                                    target="_blank"
                                                                                >
                                                                                    Login with sweetalert
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="sign-up.html" target="_blank">
                                                                                    Register Simple
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="sign-up-one.html" target="_blank">
                                                                                    Register with Bg Image{" "}
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="sign-up-two.html" target="_blank">
                                                                                    Register with image two
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="sign-up-wizard.html"
                                                                                    target="_blank"
                                                                                >
                                                                                    Register wizard
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="unlock.html">Unlock User</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="forget-password.html">
                                                                                    Forget Password
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="reset-password.html">
                                                                                    Reset Password
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="maintenance.html">Maintenance</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="flyout-right">
                                                                        {" "}
                                                                        <a href="#">Coming Soon</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="comingsoon.html">Coming Simple</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="comingsoon-bg-video.html">
                                                                                    Coming with Bg video
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="comingsoon-bg-img.html">
                                                                                    Coming with Bg Image
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <i className="fa fa-angle-right"> </i>
                                                                    </li>
                                                                    <li className="flyout-right">
                                                                        <a href="#">Email templates</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="basic-template.html">
                                                                                    Basic Email
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="email-header.html">
                                                                                    Basic With Header
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="template-email.html">
                                                                                    Ecomerce Template
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="template-email-2.html">
                                                                                    Email Template 2
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="ecommerce-templates.html">
                                                                                    Ecommerce Email
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="email-order-success.html">
                                                                                    Order Success
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <i className="fa fa-angle-right" />
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="onhover-dropdown p-0">
                                                        <span className="f-w-700">Miscellaneous</span>
                                                        <ul className="onhover-show-div left-dropdown">
                                                            <li className="flyout-right">
                                                                <a href="#">Gallery</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="gallery.html">Gallery Grid</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-with-description.html">
                                                                            gallery-with-description
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-masonry.html">
                                                                            gallery-masonry
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="masonry-gallery-with-disc.html">
                                                                            masonry-gallery-with-disc
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-hover.html">gallery-hover</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Blog</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="blog.html">blog</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single.html">blog-single</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="add-post.html">add-post</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li>
                                                                <a href="FAQ-2.html">FAQ</a>
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Job Search</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="job-cards-view.html">job-cards-view</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="job-list-view.html">job-list-view</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="job-details.html">job-details</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="job-apply.html">job-apply</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Job Search</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="job-cards-view.html">learning-list</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="learning-detailed.html">
                                                                            learning-detailed
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Maps</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="map-js.html">Map-js</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="vector-map.html">Vector Maps</a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right" />
                                                            </li>
                                                            <li className="flyout-right">
                                                                <a href="#">Editors </a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="summernote.html">Summer Note</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="CK%20editor.html">CK editor</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="simple-MDE.html">MDE editor</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="ace-code-editor.html">
                                                                            ACE code editor{" "}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <i className="fa fa-angle-right"> </i>
                                                            </li>
                                                            <li>
                                                                <a href="knowledgebase.html">Knowledgebase </a>
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                <a href="support-ticket-2.html">Support Ticket</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Page Sub Header end
                       */}
                                    </div>
                                    <div className="col-xl-3 col-sm-5 box-col-4">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="index.html">
                                                    <svg className="stroke-icon">
                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-home" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="breadcrumb-item">Dashboard</li>
                                            <li className="breadcrumb-item active">Default</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Container-fluid starts*/}
                        <div className="container-fluid default-dashboard">
                            <div className="row">
                                <div className="col-xl-6 box-col-7 proorder-md-1">
                                    <div className="card">
                                        <div className="card-body premium-card">
                                            <div className="row premium-courses-card">
                                                <div className="col-md-5 premium-course">
                                                    <h1 className="f-w-700">
                                                        Get Thousands Premium Courses.
                                                    </h1>
                                                    <span className="f-light f-w-400 f-14">
                                                        Upgrade to watch, play, learn, make and discover.{" "}
                                                    </span>
                                                    <a
                                                        className="btn btn-square btn-primary f-w-700"
                                                        href="pricing.html"
                                                    >
                                                        Go Premium
                                                    </a>
                                                </div>
                                                <div className="col-md-7 premium-course-img">
                                                    <div className="premium-message">
                                                        <img
                                                            className="img-fluid"
                                                            src="../assets/images/dashboard/massage.gif"
                                                            alt="massage"
                                                        />
                                                    </div>
                                                    <div className="premium-books">
                                                        <img
                                                            className="img-fluid"
                                                            src="../assets/images/dashboard/books.gif"
                                                            alt="books"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 box-col-5 col-md-6 proorder-md-2">
                                    <div className="card">
                                        <div className="card-header pb-0">
                                            <div className="header-top">
                                                <h4>Recent Activity</h4>
                                                <div className="dropdown icon-dropdown setting-menu">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        id="userdropdown1"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg>
                                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#setting" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="userdropdown1"
                                                    >
                                                        <a className="dropdown-item" href="#">
                                                            Weekly{" "}
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Monthly{" "}
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Yearly{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="activity-day">
                                                <h6>Today</h6>
                                            </div>
                                            <div className="recent-activity-card">
                                                <ul>
                                                    <li className="activity-removed">
                                                        <div className="recent-activity-data">
                                                            <div className="activity-name">
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Chat">
                                                                            {" "}
                                                                        </use>
                                                                    </svg>
                                                                </span>
                                                                <a href="letter-box.html">
                                                                    Nick Mark mentioned Sara
                                                                </a>
                                                            </div>
                                                            <div className="view-btn">
                                                                <a href="#!">
                                                                    View
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Arrow-Right-2"></use>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="recent-activity-data">
                                                            <div className="activity-name">
                                                                {" "}
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Download"></use>
                                                                    </svg>
                                                                </span>
                                                                <a href="letter-box.html">
                                                                    The Post name was removed...
                                                                </a>
                                                            </div>
                                                            <div className="view-btn">
                                                                <a href="#!">
                                                                    View
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Arrow-Right-2"></use>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="recent-activity-data">
                                                            <div className="activity-name">
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Swap">
                                                                            {" "}
                                                                        </use>
                                                                    </svg>
                                                                </span>
                                                                <a href="letter-box.html">
                                                                    Patrick Sullivan published...{" "}
                                                                </a>
                                                            </div>
                                                            <div className="view-btn">
                                                                <a href="#!">
                                                                    View
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Arrow-Right-2"></use>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="activity-day mt-4">
                                                <h6>Yesterday</h6>
                                            </div>
                                            <div className="recent-activity-card">
                                                <ul>
                                                    <li>
                                                        <div className="recent-activity-data">
                                                            <div className="activity-name">
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Send">
                                                                            {" "}
                                                                        </use>
                                                                    </svg>
                                                                </span>
                                                                <a href="letter-box.html">
                                                                    Nick Mark mentioned Sara
                                                                </a>
                                                            </div>
                                                            <div className="view-btn">
                                                                <a href="#!">
                                                                    View
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Arrow-Right-2"></use>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="recent-activity-data">
                                                            <div className="activity-name">
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Work">
                                                                            {" "}
                                                                        </use>
                                                                    </svg>
                                                                </span>
                                                                <a href="letter-box.html">
                                                                    The Post name was removed...
                                                                </a>
                                                            </div>
                                                            <div className="view-btn">
                                                                {" "}
                                                                <a href="#!">
                                                                    View
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Arrow-Right-2"></use>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 proorder-md-3 box-col-6">
                                    <div className="card">
                                        <div className="card-header custom-border-bottom">
                                            <div className="header-top">
                                                <h4>Sales Stats</h4>
                                                <div className="dropdown icon-dropdown setting-menu">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        id="userdropdown2"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg>
                                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#setting">
                                                                {" "}
                                                            </use>
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="userdropdown2"
                                                    >
                                                        <a className="dropdown-item" href="#">
                                                            Weekly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Monthly{" "}
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Yearly{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <div id="salesStatsRadialChart"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 proorder-md-5">
                                    <div className="card latest-sales">
                                        <div className="card-header d-flex justify-content-between align-items-center custom-border-bottom">
                                            <h4>Latest Sales</h4>
                                            <div className="d-flex align-items-center justify-content-center latest-sales-btn">
                                                <button
                                                    className="btn btn-square btn-outline-primary btn-sm"
                                                    type="button"
                                                    title="btn btn-square btn-outline-primary btn-sm"
                                                >
                                                    Yearly
                                                </button>
                                                <button
                                                    className="btn btn-square btn-outline-primary btn-sm"
                                                    type="button"
                                                    title="btn btn-square btn-outline-primary btn-sm"
                                                >
                                                    Monthly
                                                </button>
                                                <button
                                                    className="btn btn-square btn-outline-primary btn-sm active"
                                                    type="button"
                                                    title="btn btn-square btn-outline-primary btn-sm"
                                                >
                                                    Weekly
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div id="lastOrdersChart" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12 box-col-12 proorder-md-4">
                                    <div className="card">
                                        <div className="card-header card-no-border">
                                            <div className="header-top">
                                                <h4>Last Orders </h4>
                                                <div className="dropdown icon-dropdown setting-menu">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        id="userdropdown3"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg>
                                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#setting" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="userdropdown3"
                                                    >
                                                        <a className="dropdown-item" href="#">
                                                            Weekly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Monthly{" "}
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Yearly
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="table-responsive custom-scrollbar">
                                                <table className="last-orders-table table" id="last-orders">
                                                    <thead>
                                                        <tr>
                                                            <th>Name </th>
                                                            <th>Order No. </th>
                                                            <th>Amount</th>
                                                            <th>Payment Type </th>
                                                            <th>Date</th>
                                                            <th>Action </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="user-data">
                                                                    <div>
                                                                        <img
                                                                            src="../assets/images/dashboard/avtar/2.jpg"
                                                                            alt="avatar"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        {" "}
                                                                        <a href="user-profile.html">
                                                                            <h4>Dmitriy Groshev</h4>
                                                                        </a>
                                                                        <span>Switzerland</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>#790841</td>
                                                            <td>$2.499</td>
                                                            <td>Credit Card</td>
                                                            <td>1 Oct, 14:43</td>
                                                            <td>
                                                                <div className="dropdown icon-dropdown">
                                                                    <button
                                                                        className="btn dropdown-toggle"
                                                                        id="userdropdownes4"
                                                                        type="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="drop-menu">
                                                                            <i className="icon-more-alt" />
                                                                        </div>
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="userdropdownes4"
                                                                    >
                                                                        <a className="dropdown-item" href="#">
                                                                            Weekly
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Monthly
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Yearly
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="user-data">
                                                                    <div>
                                                                        <img
                                                                            src="../assets/images/dashboard/avtar/17.jpg"
                                                                            alt="avatar"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <a href="user-profile.html">
                                                                            <h4>Patrick Beverley</h4>
                                                                        </a>
                                                                        <span> Germany</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>#454489</td>
                                                            <td>$2.499</td>
                                                            <td>Paypal</td>
                                                            <td>30 Sep, 23:01</td>
                                                            <td>
                                                                <div className="dropdown icon-dropdown">
                                                                    <button
                                                                        className="btn dropdown-toggle"
                                                                        id="userdropdownes1"
                                                                        type="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="drop-menu">
                                                                            <i className="icon-more-alt" />
                                                                        </div>
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="userdropdownes1"
                                                                    >
                                                                        <a className="dropdown-item" href="#">
                                                                            Weekly
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Monthly
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Yearly
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="user-data">
                                                                    <div>
                                                                        <img
                                                                            src="../assets/images/avtar/18.jpg"
                                                                            alt="avatar"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <a href="user-profile.html">
                                                                            <h4>Kevin Greem</h4>
                                                                        </a>
                                                                        <span> Canada</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>#594579</td>
                                                            <td>$2.499</td>
                                                            <td>Credit Card</td>
                                                            <td>29 Sep,09:31</td>
                                                            <td>
                                                                <div className="dropdown icon-dropdown">
                                                                    <button
                                                                        className="btn dropdown-toggle"
                                                                        id="userdropdownes2"
                                                                        type="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="drop-menu">
                                                                            <i className="icon-more-alt" />
                                                                        </div>
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="userdropdownes2"
                                                                    >
                                                                        <a className="dropdown-item" href="#">
                                                                            Weekly
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Monthly
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Yearly
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="user-data">
                                                                    <div>
                                                                        <img
                                                                            src="../assets/images/dashboard/avtar/19.jpg"
                                                                            alt="avatar"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <a href="user-profile.html">
                                                                            <h4>William Barton</h4>
                                                                        </a>
                                                                        <span>United States</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>#478495</td>
                                                            <td>$2.499</td>
                                                            <td>Credit Card</td>
                                                            <td>28 Sep, 04:34</td>
                                                            <td>
                                                                <div className="dropdown icon-dropdown">
                                                                    <button
                                                                        className="btn dropdown-toggle"
                                                                        id="userdropdownes3"
                                                                        type="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="drop-menu">
                                                                            <i className="icon-more-alt" />
                                                                        </div>
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="userdropdownes3"
                                                                    >
                                                                        <a className="dropdown-item" href="#">
                                                                            Weekly
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Monthly
                                                                        </a>
                                                                        <a className="dropdown-item" href="#">
                                                                            Yearly{" "}
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 proorder-md-6 box-col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="header-top">
                                                <h4>Monthly Invoices</h4>
                                                <div className="dropdown icon-dropdown setting-menu">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        id="userdropdown4"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg>
                                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#setting">
                                                                {" "}
                                                            </use>
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="userdropdown4"
                                                    >
                                                        <a className="dropdown-item" href="#">
                                                            Weekly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Monthly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Yearly
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="monthly-invoices">
                                                <ul>
                                                    <li>
                                                        <div className="monthly-data">
                                                            <div className="invoice-data-icon">
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#bookmark" />
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    <a href="invoice-1.html">
                                                                        <h4>Camelun ios Development</h4>
                                                                    </a>
                                                                    <h5>20 paid month out of 24</h5>
                                                                </div>
                                                            </div>
                                                            <div className="invoice-price">
                                                                <span>$12,453.00</span>
                                                                <span>Per Month</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="monthly-data">
                                                            <div className="invoice-data-icon">
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Ticket-Star"></use>
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    <a href="#">
                                                                        <h4>ReactDT Motions</h4>
                                                                    </a>
                                                                    <h5>Late payment 12 week - pay invoice</h5>
                                                                </div>
                                                            </div>
                                                            <div className="invoice-price">
                                                                <span>$54,459.00</span>
                                                                <span>Per month</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="monthly-data">
                                                            <div className="invoice-data-icon">
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Discovery"></use>
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    <a href="invoice-2.html">
                                                                        <h4>Arocca Store</h4>
                                                                    </a>
                                                                    <h5>
                                                                        Error sending payment - Detail information
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="invoice-price">
                                                                <span>$87,884.00</span>
                                                                <span>Per month</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="monthly-data">
                                                            <div className="invoice-data-icon">
                                                                <span>
                                                                    <svg>
                                                                        <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Shield-Done"></use>
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    <a href="invoice-3.html">
                                                                        <h4>EnterPress Project</h4>
                                                                    </a>
                                                                    <h5>25 paid days out of 113</h5>
                                                                </div>
                                                            </div>
                                                            <div className="invoice-price">
                                                                <span>$79,955.00 </span>
                                                                <span>Per month</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="btn btn-outline-light txt-dark active w-100"
                                                            type="button"
                                                        >
                                                            <a
                                                                className="d-flex gap-2 align-items-center"
                                                                href="projects.html"
                                                            >
                                                                <svg>
                                                                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Plus-Circle"></use>
                                                                </svg>
                                                                Add Project
                                                            </a>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 proorder-md-7 box-col-6">
                                    <div className="card custom-statistics">
                                        <div className="card-header">
                                            <div className="header-top">
                                                <h4>Recent Statistics </h4>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn dropdown-toggle custom-date-btn"
                                                        id="dropdownMenuButton"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <span>19 Aug - 25 Aug</span>
                                                        <div className="custom-date">
                                                            <svg>
                                                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Left-Arrow" />
                                                            </svg>
                                                            <svg>
                                                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Right-Arrow" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="dropdownMenuButton"
                                                    >
                                                        <a className="dropdown-item" href="#">
                                                            11 Aug - 21 Aug
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            07 Sep - 23 Sep
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            01 Otc - 15 Otc
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pb-0 pt-0">
                                            <div className="recent-statistics">
                                                <ul>
                                                    <li>
                                                        <div className="arrow-up">
                                                            <svg>
                                                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Arrow-Up" />
                                                            </svg>
                                                        </div>
                                                        <span>$5.850</span>
                                                    </li>
                                                    <li>
                                                        <div className="arrow-down">
                                                            <svg>
                                                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Arrow-Down" />
                                                            </svg>
                                                        </div>
                                                        <span>$1.750</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div id="orderoverview" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 proorder-md-8 box-col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="header-top">
                                                <h4>All Notification (10)</h4>
                                                <div className="dropdown icon-dropdown setting-menu">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        id="userdropdown5"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg>
                                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#setting">
                                                                {" "}
                                                            </use>
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="userdropdown5"
                                                    >
                                                        <a className="dropdown-item" href="#">
                                                            Weekly{" "}
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Monthly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Yearly{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="notification-card">
                                                <ul>
                                                    <li>
                                                        <div className="user-notification">
                                                            <div>
                                                                <img
                                                                    src="../assets/images/dashboard/avtar/2.jpg"
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="user-description">
                                                                <a href="letter-box.html">
                                                                    <h4>
                                                                        You have new comments in real finical law agency
                                                                        landing page design.
                                                                    </h4>
                                                                </a>
                                                                <span>Today 11:45pm</span>
                                                            </div>
                                                        </div>
                                                        <div className="notification-btn">
                                                            <button
                                                                className="btn btn-pill btn-primary"
                                                                type="button"
                                                                title="btn btn-pill btn-primary"
                                                            >
                                                                Accpet
                                                            </button>
                                                            <button
                                                                className="btn btn-pill btn-secondary"
                                                                type="button"
                                                                title="btn btn-pill btn-primary"
                                                            >
                                                                Decline
                                                            </button>
                                                        </div>
                                                        <div className="show-btn">
                                                            <a href="index.html">
                                                                {" "}
                                                                <span>Show</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="user-notification">
                                                            <div>
                                                                <img
                                                                    src="../assets/images/dashboard/avtar/17.jpg"
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="user-description">
                                                                <a href="letter-box.html">
                                                                    <h4>
                                                                        Congrats! you complete all task for today. just
                                                                        need to join meting.
                                                                    </h4>
                                                                </a>
                                                                <span>Today 01:05pm</span>
                                                            </div>
                                                        </div>
                                                        <div className="notification-btn">
                                                            <button
                                                                className="btn btn-pill btn-primary"
                                                                type="button"
                                                                title="btn btn-pill btn-primary"
                                                            >
                                                                Accpet
                                                            </button>
                                                            <button
                                                                className="btn btn-pill btn-secondary"
                                                                type="button"
                                                                title="btn btn-pill btn-primary"
                                                            >
                                                                Decline
                                                            </button>
                                                        </div>
                                                        <div className="show-btn">
                                                            <a href="index.html">
                                                                {" "}
                                                                <span>Show</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="user-notification">
                                                            <div>
                                                                {" "}
                                                                <img
                                                                    src="../assets/images/dashboard/avtar/18.jpg"
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="user-description">
                                                                <a href="letter-box.html">
                                                                    <h4>
                                                                        You have new comments in real finical law agency
                                                                        landing page design.
                                                                    </h4>
                                                                </a>
                                                                <span>Today 06:55pm</span>
                                                            </div>
                                                        </div>
                                                        <div className="notification-btn">
                                                            <button
                                                                className="btn btn-pill btn-primary"
                                                                type="button"
                                                                title="btn btn-pill btn-primary"
                                                            >
                                                                Accpet
                                                            </button>
                                                            <button
                                                                className="btn btn-pill btn-secondary"
                                                                type="button"
                                                                title="btn btn-pill btn-primary"
                                                            >
                                                                Decline
                                                            </button>
                                                        </div>
                                                        <div className="show-btn">
                                                            <a href="index.html">
                                                                {" "}
                                                                <span>Show</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="user-notification">
                                                            <div>
                                                                <img
                                                                    src="../assets/images/dashboard/avtar/19.jpg"
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="user-description">
                                                                <a href="letter-box.html">
                                                                    <h4>
                                                                        Congrats! you complete all task for today. just
                                                                        need to join meting.
                                                                    </h4>
                                                                </a>
                                                                <span>Today 06:55pm</span>
                                                            </div>
                                                        </div>
                                                        <div className="notification-btn">
                                                            <button
                                                                className="btn btn-pill btn-primary"
                                                                type="button"
                                                                title="btn btn-pill btn-primary"
                                                            >
                                                                Accpet
                                                            </button>
                                                            <button
                                                                className="btn btn-pill btn-secondary"
                                                                type="button"
                                                                title="btn btn-pill btn-primary"
                                                            >
                                                                Decline
                                                            </button>
                                                        </div>
                                                        <div className="show-btn">
                                                            <a href="index.html">
                                                                <span>Show </span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-12 proorder-md-9 box-col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="header-top">
                                                <h4>Project Summary </h4>
                                                <div className="dropdown icon-dropdown setting-menu">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        id="userdropdown22"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg>
                                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#setting">
                                                                {" "}
                                                            </use>
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="userdropdown22"
                                                    >
                                                        <a className="dropdown-item" href="#">
                                                            Weekly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Monthly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Yearly{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive custom-scrollbar">
                                                <table
                                                    className="project-summary table"
                                                    id="project-summary"
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Project Name</th>
                                                            <th>Team</th>
                                                            <th>Project Cost</th>
                                                            <th>Project Status</th>
                                                            <th>Payment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="f-w-600">A908</td>
                                                            <td>
                                                                {" "}
                                                                <a href="projects.html">Amazon Website</a>
                                                            </td>
                                                            <td className="team-avtar">
                                                                <div className="customers d-inline-block avatar-group">
                                                                    <ul>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/8.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/10.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <p>26+</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                            <td>$23,490</td>
                                                            <td>Completed</td>
                                                            <td className="txt-success">Done </td>
                                                        </tr>
                                                        <tr>
                                                            <td>R840</td>
                                                            <td>
                                                                {" "}
                                                                <a href="projects.html">Paytm bank app</a>
                                                            </td>
                                                            <td className="team-avtar">
                                                                <div className="customers d-inline-block avatar-group">
                                                                    <ul>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/20.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/12.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <p>6+</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                            <td>$45,459</td>
                                                            <td>In Progress</td>
                                                            <td className="txt-danger">Pending</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="f-w-600">V908</td>
                                                            <td className="f-w-600">
                                                                {" "}
                                                                <a href="projects.html">Cytrust Dashboard</a>
                                                            </td>
                                                            <td className="team-avtar">
                                                                <div className="customers d-inline-block avatar-group">
                                                                    <ul>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/14.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/13.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                            <td className="f-w-600">$78,748 </td>
                                                            <td className="f-w-600">Completed</td>
                                                            <td className="txt-success f-w-600">Done</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="f-w-600">K450</td>
                                                            <td>
                                                                {" "}
                                                                <a href="projects.html">Project Mecha</a>
                                                            </td>
                                                            <td className="team-avtar">
                                                                <div className="customers d-inline-block avatar-group">
                                                                    <ul>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/22.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/15.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                            <td className="f-w-600"> $98,878</td>
                                                            <td className="f-w-600">In Progress</td>
                                                            <td className="txt-danger f-w-600">Pending</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="f-w-600">D480</td>
                                                            <td className="f-w-600">
                                                                <a href="projects.html">Dynamic Program</a>
                                                            </td>
                                                            <td className="team-avtar">
                                                                <div className="customers d-inline-block avatar-group">
                                                                    <ul>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/21.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/23.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <img
                                                                                className="img-40 rounded-circle"
                                                                                src="../assets/images/dashboard/avtar/24.jpg"
                                                                                alt=""
                                                                            />
                                                                        </li>
                                                                        <li className="d-inline-block">
                                                                            <p>5+ </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                            <td className="f-w-600">$23,490</td>
                                                            <td className="f-w-600">In Progress</td>
                                                            <td className="txt-danger f-w-600">Pending</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 proorder-md-10 box-col-12">
                                    <div className="card">
                                        <div className="card-header custom-border-bottom">
                                            <div className="header-top">
                                                <h4>Sales Statistic</h4>
                                                <div className="dropdown icon-dropdown setting-menu">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        id="userdropdown9"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg>
                                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#setting">
                                                                {" "}
                                                            </use>
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="userdropdown9"
                                                    >
                                                        <a className="dropdown-item" href="#">
                                                            Weekly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Monthly
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Yearly{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div id="groupBarChart" />
                                            <div className="sales-data">
                                                <ul>
                                                    <li>
                                                        <div className="total-sales">
                                                            <div>
                                                                <h5>$4,875 </h5>
                                                                <span>Total Sales </span>
                                                            </div>
                                                            <div className="total-reached">
                                                                <span>1,00,00</span>
                                                                <span>85% goal reached</span>
                                                            </div>
                                                        </div>
                                                        <div className="progress-data">
                                                            <div className="progress sm-progress-bar progress-border-primary">
                                                                <div
                                                                    className="progress-bar bg-primary"
                                                                    role="progressbar"
                                                                    style={{ width: "85%" }}
                                                                    aria-valuenow={85}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                >
                                                                    {" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="total-sales">
                                                            <div>
                                                                <h5>$7,560</h5>
                                                                <span>Total Income</span>
                                                            </div>
                                                            <div className="total-reached">
                                                                {" "}
                                                                <span>1,00,00</span>
                                                                <span>45% goal reached </span>
                                                            </div>
                                                        </div>
                                                        <div className="progress-data">
                                                            <div className="progress sm-progress-bar progress-border-secondary">
                                                                <div
                                                                    className="progress-bar bg-secondary"
                                                                    role="progressbar"
                                                                    style={{ width: "45%" }}
                                                                    aria-valuenow={45}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Container-fluid Ends*/}
                    </div>
                    {/* footer start*/}
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 p-0 footer-copyright">
                                    <p className="mb-0">Copyright 2024 © Zono theme by pixelstrap.</p>
                                </div>
                                <div className="col-md-6 p-0">
                                    <p className="heart mb-0">
                                        Hand crafted &amp; made with
                                        <svg className="footer-icon">
                                            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#heart" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>

    )
}

export default page