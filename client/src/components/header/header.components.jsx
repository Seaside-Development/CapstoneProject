import React from "react";

const Header = () => {
  return (
    <div>
        <header className="site-header header-style-1 mobile-sider-drawer-menu header-full-width">
            <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                <div className="main-bar">  
                                    
                    <div className="container clearfix"> 
                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <a href="index.html">
                                    <img src="images/logo-light.png" alt="" className="site-logo-has"/>
                                    <img src="images/logo-dark.png" alt="" className="site-logo-sticky"/>
                                </a>
                            </div>
                        </div>  

                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first"></span>
                            <span className="icon-bar icon-bar-two"></span>
                            <span className="icon-bar icon-bar-three"></span>
                        </button> 

                        <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-start">
                            
                            <ul className=" nav navbar-nav">
                                <li className="has-child current-menu-item"><a href="javascript:;">Home</a>
                                    <ul className="sub-menu">
                                        <li><a href="index.html">Home 1</a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                    </ul>
                                </li>

                                <li className="has-child">
                                    <a href="javascript:;">Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="about-us.html">About us</a></li>
                                        <li><a href="javascript:;">Categories</a>
                                            <ul className="sub-menu">
                                                <li><a href="all-categories.html">All Categories</a></li>
                                                <li><a href="categories-detail.html">Categories Detail</a></li>
                                                <li><a href="categories-detail-2.html">Categories Detail 2</a></li>
                                            </ul>
                                        </li>
          
                                        <li><a href="javascript:;">Search</a>
                                            <ul className="sub-menu">
                                                <li><a href="search-list.html">Search List</a></li>
                                                <li><a href="new-search-list-2.html">Search List 2</a></li>
                                                <li><a href="search-list-map.html">Search List Map</a></li>
                                                <li><a href="search-list-map2.html">Search List Map 2</a></li>
                                                <li><a href="search-grid.html">Search-grid</a></li>
                                                <li><a href="search-grids-map.html">Search-grid-map</a></li>
                                                <li><a href="search-grid-map2.html">Search-grid-map2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="error-404.html">Error 404</a></li>
                                    </ul>                                
                                </li>

                                <li className="has-child"><a href="javascript:;">Profile</a>
                                    <ul className="sub-menu">
                                        <li><a href="profile-full.html">Profile</a></li>
                                        <li><a href="profile-sidebar.html">Profile Sidebar</a></li>
                                    </ul>                                                                 
                                </li>
                        
                                <li className="has-child"><a href="javascript:;">Jobs</a>
                                    <ul className="sub-menu">
                                        <li><a href="job-listing.html">Job listing</a></li>                                        
                                        <li><a href="job-grid.html">Job grid</a></li>
                                        <li><a href="job-detail.html">Job detail</a></li>                                        
                                    </ul>                                
                                </li>
                        
                                <li className="has-child"><a href="javascript:;">Blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-grid.html">Blog Grid</a></li>                                        
                                        <li><a href="blog-grid-2.html">Blog Grid 2</a></li>
                                        <li><a href="blog-list.html">Blog list</a></li>
                                        <li><a href="blog-list-2.html">Blog list 2</a></li>
                                        <li><a href="blog-list-3.html">Blog list 3</a></li>
                                        <li><a href="blog-list-4.html">Blog list 4</a></li>
                                        <li><a href="blog-detail.html">Blog detail</a></li>
                                    </ul>                                
                                </li>
                                <li><a href="contact-us.html">Contact</a></li>  
                        
                            </ul>

                        </div>
                        
                        <div className="extra-nav header-2-nav">
                            <div className="extra-cell">
                            
                                <button type="button" className="site-button aon-btn-login" data-toggle="modal" data-target="#login-signup-model">
                                    <i className="fa fa-user"></i> Login
                                </button>

                                <a href="mc-profile.html" className="site-button aon-btn-signup m-l20">
                                    <i className="fa fa-plus"></i> Add Listing
                                </a>
                            </div>
                                
                            </div>                            
                    
                    </div>    
                
                </div>
            </div>
        </header>
    </div>
  );
}

export default Header;