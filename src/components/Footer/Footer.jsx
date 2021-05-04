import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';



const Footer = () => {
    return (
    <>
        {/* <footer class="container-fluid bg-grey py-5">
        <div class="container">
           <div class="row">
              <div class="col-md-6">
                 <div class="row">
                    <div class="col-md-6 ">
                       <div class="logo-part">
                          <img src="https://i.ibb.co/sHZz13b/logo.png" class="w-50 logo-footer"/>
                          <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                          <p>Use this tool as test data for an automated system or find your next pen</p>
                       </div>
                    </div>
                    <div class="col-md-6 px-4">
                       <h6> About Company</h6>
                       <p>But horizontal lines can only be a full pixel high.</p>
                       <a href="#" class="btn-footer"> More Info </a><br/>
                       <a href="#" class="btn-footer"> Contact Us</a>
                    </div>
                 </div>
              </div>
              <div class="col-md-6">
                 <div class="row">
                    <div class="col-md-6 px-4">
                       <h6> Help us</h6>
                       <div class="row ">
                          <div class="col-md-6">
                             <ul>
                                <li> <a href="#"> Home</a> </li>
                                <li> <a href="#"> About</a> </li>
                                <li> <a href="#"> Service</a> </li>
                                <li> <a href="#"> Team</a> </li>
                                <li> <a href="#"> Help</a> </li>
                                <li> <a href="#"> Contact</a> </li>
                             </ul>
                          </div>
                          <div class="col-md-6 px-4">
                             <ul>
                                <li> <a href="#"> Cab Faciliy</a> </li>
                                <li> <a href="#"> Fax</a> </li>
                                <li> <a href="#"> Terms</a> </li>
                                <li> <a href="#"> Policy</a> </li>
                                <li> <a href="#"> Refunds</a> </li>
                                <li> <a href="#"> Paypal</a> </li>
                             </ul>
                          </div>
                       </div>
                    </div>
                    <div class="col-md-6 ">
                       <h6> Newsletter</h6>
                       <div class="social">
                          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                       </div>
                       <form class="form-footer my-3">
                          <input type="text"  placeholder="search here...." name="search"/>
                          <input type="button" value="Go" />
                       </form>
                       <p>That's technology limitation of LCD monitors</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        </footer> */}

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
                    {/* IT IS COMMENT    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    IT IS COMMENT    <Button buttonStyle="btn--outline">Subscribe</Button> */}
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
                        {/* IT IS COMMENT <Link to="/" >Sponsorships</Link> */}
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
    </>
    );
};

export default Footer;