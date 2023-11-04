import React from 'react';

var img1 = require('./../../images/gallery/pic1.jpg');
var img2 = require('./../../images/gallery/pic3.jpg');
var img3 = require('./../../images/gallery/pic4.jpg');
var img4 = require('./../../images/gallery/pic5.jpg');
var img5 = require('./../../images/gallery/pic6.jpg');

class Story extends React.Component {
    
    render() {
        
        return (
            <>
                <div className="section-full bg-gray p-tb90 square_shape1 tw-our-story-wrap">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36">Our Story</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="section-content our-story">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img1.default} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2011-12</h3>
                                            <h2 className="text-uppercase">First two Year</h2>
                                            <p>We have started as a small, family-owned business in Malden, Massachusetts. With a passion for painting, we embarked on our journey to provide exceptional services to our community. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2013-14</h3>
                                            <h2 className="text-uppercase">Year 3</h2>
                                            <p>Our reputation for quality work and dedicated service began to spread beyond Malden. We expanded our reach to cover the entire state of Massachusetts.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img2.default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img3.default} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2016</h3>
                                            <h2 className="text-uppercase">Celebration</h2>
                                            <p>We celebrated its fifth anniversary, proudly serving countless homeowners, businesses, and institutions across the state. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2017-18</h3>
                                            <h2 className="text-uppercase">Happiness is the word</h2>
                                            <p>We continued to evolve and grow, investing in the latest painting techniques and materials to provide our customers with the best results.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img4.default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img5.default} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2023</h3>
                                            <h2 className="text-uppercase">Present Day</h2>
                                            <p>Today, we stand as a well-established and trusted painting company in Massachusetts. 
                                                Our commitment to excellence and customer satisfaction remains unwavering. 
                                                We look forward to many more years of transforming spaces and exceeding expectations.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <br />
                            <h3>Thank you for considering WJ Painting for your painting needs. We are here to make your
                                 vision a reality, one brushstroke at a time. <b><a href='/ContactUs'>Contact us</a></b> today for a free consultation, 
                                 and let's begin your painting journey together.</h3>
                            
                        </div>
                        
                    </div>
            </>
        );
    }
};

export default Story;