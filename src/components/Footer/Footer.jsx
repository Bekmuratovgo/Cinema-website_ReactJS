import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Obcaecati, nobis.
                </p>
                <p className="footer-subscription-text">
                    Lorem ipsum dolor sit amet.
                </p>
                <div className="input-areas">
                    <form>
                        {/* <input type="email" name="email" placeholder="Your Email" className="footer-input"/> */}
                        {/* <Button buttonStyle="btn--outline">Subscribe</Button> */}
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Custom Services</h2>
                        <Link to=".sign-up">Lorem ipsum</Link>
                        <Link to="/" >Lorem ipsum</Link>
                        <Link to="/" >Lorem ipsum</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/" >Facebook</Link>
                        <Link to="/" >Youtube</Link>
                        <Link to="/" >Twitter</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Feedbacks</h2>
                        <Link to=".sign-up">Lorem ipsum</Link>
                        <Link to="/" >Lorem ipsum</Link>
                        <Link to="/" >Lorem ipsum</Link>
                        <Link to="/" >Lorem ipsum</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/"><i className="fas fa-map-marker-alt"> Switzerland 87 </i></Link>
                        <Link to="/" ><i className="far fa-envelope"></i> movie@movie.com </Link>
                        <Link to="/" ><i className="fas fa-phone"></i> 0 555 555 777</Link>
                        {/* <Link to="/" >Sponsorships</Link> */}
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                        M
                        <i className="fas fa-compact-disc"></i>
                        VIE
                        </Link>
                    </div>
                    <small className="website-rights"></small>
                    <div className="social-icons">
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link facebok"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;