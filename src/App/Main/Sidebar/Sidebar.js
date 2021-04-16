import React from 'react'
import image from './sidebar-img/image-2.jpg'
import facebook from './sidebar-img/facebook.png'
import twitter from './sidebar-img/twitter.png'
import linkedin from './sidebar-img/linkedin.png'
import github from './sidebar-img/github.png'
import {Carousel} from 'react-responsive-carousel'
import image1 from "./sidebar-img/image-1.jpg"
import image2 from "./sidebar-img/image-2.jpg"
import image3 from "./sidebar-img/image-3.jpg"
import {Link} from 'react-router-dom'
import "./sidebar.css"
import "../Slider/slider.css"
import posts from "../Post/postArr"
const Sidebar =()=>
{
    return(
        <>
                <div className="sidebar-title">SIDEBAR</div>
                    <div className="title-underline">
                        <hr className="title-underline-1"></hr>
                        <hr className="title-underline-2"></hr>
                    </div>
                    <div className="search-post">
                        <input type="text" placeholder="SEARCH" className="search"/>
                        <img src="./sidebar-img/search.png" alt=""/>
                    </div>
                    <div className="popular-post">
                        <div className="sidebar-title">POPULAR POST</div>
                        <div className="title-underline">
                            <hr className="title-underline-1"></hr>
                            <hr className="title-underline-2"></hr>
                        </div>
                        <div className="post-item">
                            <div className="post-img-sidebar">
                                <img src={image} alt=""/>
                            </div>
                            <div className="post-title">
                                Exploring San Francisco’s Cuisine
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-img"></div>
                    <div className="post-categories">
                        <div className="sidebar-title">CATEGORIES</div>
                        <div className="title-underline">
                            <hr className="title-underline-1"></hr>
                            <hr className="title-underline-2"></hr>
                        </div>
                        <Link to="WEB DEVELOPMENT" ><a href="/"><div className="categoria">WEB DEVELOPMENT(25)</div></a></Link>
                        <Link to="HEALTH"><a href="/" ><div className="categoria">HEALTH(28)</div></a></Link>
                        <Link to="TECHNOLOGIES"><a href="/"><div className="categoria">TECHNOLOGIES(95)</div></a></Link>
                        <Link to="LIFE STYLE"><a href="/"><div className="categoria">LIFE STYLE(65)</div></a></Link>
                        <Link to="MUSIC"><a href="/"><div className="categoria">MUSIC(49)</div></a></Link>
                        <Link to="EDUCATION"><a href="/"><div className="categoria">EDUCATION(39)</div></a></Link>
                        <Link to="TRAVEL"><a href="/"><div className="categoria">TRAVEL(98)</div></a></Link>                       
                        <Link to="DESIGN"><a href="/"><div className="categoria">DESIGN(99)</div></a></Link>

                        
                        
                        
                        
                        
                        
                    </div>
                    <div className="instagram-sidebar">
                        <div className="sidebar-title">INSTAGRAM</div>
                        <div className="title-underline">
                            <hr className="title-underline-1"></hr>
                            <hr className="title-underline-2"></hr>
                        </div>
                        <img src={image} alt="" className="sidebar-img"/>
                    </div>

                        <div className="sidebar-title">SOCIAL MEDIA</div>
                        <div className="title-underline">
                            <hr className="title-underline-1"></hr>
                            <hr className="title-underline-2"></hr>
                        </div>
                        <div className="social-media">
                        <div className="author-contacts">
                            <div className="contact facebook">
                                <a href="/"><img src={facebook} alt=""/></a>
                            </div>
                            <div className="contact twitter">
                                <a href="/"><img src={twitter} alt=""/></a>
                            </div>
                            <div className="contact linkedin">
                                <a href="/"><img src={linkedin} alt=""/></a>
                            </div>
                            <div className="contact github">
                                <a href="/"><img src={github} alt=""/></a>
                            </div>
                        </div>
                    </div>
 
                        <div className="sidebar-title">POST SLIDER</div>
                        <div className="title-underline">
                            <hr className="title-underline-1"></hr>
                            <hr className="title-underline-2"></hr>
                        </div>
                        <Carousel  useKeyboardArrows showThumbs={false}  autoPlay={true} infiniteLoop={true}>

                            <div className="post-slide">
                                <div className="post-img-slide"><img src={image1} alt=""/></div>
                                <div className="post-title-slide">Exploring San Francisco’s Cuisine</div>                                
                            </div>
                            <div className="post-slide">
                                <div className="post-img-slide"><img src={image2} alt=""/></div>
                                <div className="post-title-slide">Exploring San Francisco’s Cuisine</div>                                
                            </div>
                            <div className="post-slide">
                                <div className="post-img-slide"><img src={image3} alt=""/></div>
                                <div className="post-title-slide">Exploring San Francisco’s Cuisine</div>                                
                            </div>
                        
                        </Carousel>
        </>
    )
}
export default Sidebar