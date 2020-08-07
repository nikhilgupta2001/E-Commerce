import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import logo from '../../img/logo.png';

class Navbar extends Component {
    render() {
        return (
<div>
    <nav className="navbar navbar-fixed-top navbar-expand-sm navbar-dark bg-info mb-4">
        <div className="container">
                 <Link className="navbar-brand" to="/">  
                       {/*<img animate={{ scale: 0.5, opacity: 0.7 }}
                        transition={{
                        duration:2,
                        ease: "easeInOut"}} className="logonav" src={logo}/>*/}
                        WebCart</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                {/*<ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                     <Link className="nav-link" to="/profiles">MEN
                     </Link>
                     </li>
                     <li className="nav-item ">
                     <Link className="nav-link" to="/profiles">WOMEN
                     </Link>
                     </li>
                     <li className="nav-item ">
                     <Link className="nav-link" to="/profiles">HOME & LIVING
                     </Link>
                     </li>
                     <li className="nav-item ">
                     <Link className="nav-link" to="/profiles">KIDS
                     </Link>
                     </li>
                     
                     <li className="nav-item ">
                     
                     </li>
                     </ul>*/}
                     <ul className="navbar-nav ml-auto">
                    <motion.li  
                    initial={{opacity:0,x:+100}}
                    animate={{ opacity:1,x:0 }}
                    transition={{ 
                    duration: 2,delay:1}}
                     className="nav-item">
                     
                          <Link className="nav-link" to="/register">
                          <i class="fa fa-user" aria-hidden="true"></i>
                          {' '}Profile</Link>
                    </motion.li>
                    <motion.li initial={{opacity:0,x:+100}}
                    animate={{ opacity:1,x:0 }}
                    transition={{ 
                    duration: 2,delay:1}}
                     
                      className="nav-item">
                          <Link className="nav-link" to="/login">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                          Cart</Link>
                    </motion.li>
            </ul>
                    </div>
        </div>
    </nav>
   {/*Second Nav */}
    <nav className="navbar nav2 navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item nav-item1">
                     <Link className="nav-link" to="/profiles">MEN
                     </Link>
                     </li>
                     <li className="nav-item nav-item1 ">
                     <Link className="nav-link" to="/profiles">WOMEN
                     </Link>
                     </li>
                     <li className="nav-item nav-item1 ">
                     <Link className="nav-link" to="/profiles">ELECTRONICS
                     </Link>
                     </li>
                     <li className="nav-item nav-item1 ">
                     <Link className="nav-link" to="/profiles">HOME & LIVING
                     </Link>
                     </li>
                     <li className="nav-item nav-item1 ">
                     <Link className="nav-link" to="/profiles">SPORTS AND BOOKS 
                     </Link>
                     </li>
                     <li className="nav-item nav-item1 ">
                     <Link className="nav-link" to="/profiles">BEST SELLERS
                     </Link>
                     </li>
                     <li className="nav-item nav-item1 ">
                     <Link className="nav-link" to="/profiles">DEALS
                     </Link>
                     </li>
                     </ul>
                     
                    </div>
        </div>
    </nav>

</div>
        )
    }
}

export default Navbar;