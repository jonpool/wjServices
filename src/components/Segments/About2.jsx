import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/portrait/pic2.jpg'),
    require('./../../images/gallery/portrait/pic3.jpg'),
    require('./../../images/gallery/portrait/pic4.jpg'),
    require('./../../images/gallery/portrait/pic5.jpg'),
    require('./../../images/gallery/portrait/pic6.jpg'),
]

class About2 extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
        };
        return (
            <>
                <div className="section-full p-tb90 bg-gray square_shape2 tm-about2-wrap">
                        <div className="container">
                            <div className="section-content ">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="m-about m-l50 m-r50">
                                        <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                <div className="ow-img wt-img-effect zoom-slow">
                                                <NavLink to={""}><img src={item.default} alt="" /></NavLink>
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="m-about-containt text-uppercase text-black p-t30">
                                            <span className="font-30 font-weight-300">About Us</span>
                                            <h2 className="font-40">Welcome to WJ Painting</h2>
                                            <p><b>Your trusted painting partner serving Malden, MA, and the entire state of Massachusetts.</b></p>
                                            <p>With a rich legacy spanning over 8 years, we are a family-owned 
                                            and operated business that takes pride in transforming spaces into vibrant works of art. Our 
                                            professional painting services cater to homeowners, businesses, and institutions, enhancing the 
                                            beauty and functionality of every structure we touch.
                                            </p>
                                            <h2><b>Why Choose Us?</b></h2>
                                            <p>At [Your Painting Company Name], we are committed to providing top-tier painting services with a focus on quality, reliability, and customer satisfaction. When you choose us, you choose:</p>
                                            <p><b>Professional Excellence:</b> Our skilled and experienced team of painters is dedicated to delivering the finest craftsmanship in every project.</p>
                                            <p><b>Tailored Solutions:</b> We understand that every project is unique, and we work closely with our clients to develop custom painting solutions that meet their specific needs.</p>
                                            <p><b>Premium Materials:</b> We use high-quality, eco-friendly paints and materials to ensure your project stands the test of time and is safe for your environment.</p>
                                            <p><b>Timely Delivery:</b> We believe in delivering on time and on budget, ensuring a seamless painting experience without any hidden surprises.</p>
                                            <p><b>Local Commitment:</b> Based in Malden, we are deeply rooted in the Massachusetts community, serving our neighbors with dedication and care.</p>
                                            <h2><b>Our Painting Services</b></h2>
                                            <p><b>Residential Painting:</b> From interior to exterior, we bring life to your home, creating the ambiance you've always dreamed of.</p>
                                            <p><b>Commercial Painting:</b> We understand the importance of your business image. Our commercial painting services ensure your space reflects your brand's excellence.</p>
                                            <p><b>Institutional Painting:</b> Educational institutions, healthcare facilities, and government buildings trust us to enhance their surroundings with our professional painting services.</p>
                                            <NavLink to={"/contactUs"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Contact Us </span></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default About2;