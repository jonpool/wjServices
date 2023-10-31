import React from 'react';
import Header2 from '../Common/Header';
import Footer from '../Common/Footer3';
import Slider3 from './../Segments/Slider3';
import About from './../Segments/About';
import LatestProjects from './../Segments/LatestProjects';
import WhoWeAre from './../Segments/WhoWeAre';
import Statistics from './../Segments/Statistics';
import Testimonials from './../Segments/Testimonials';
import ClientsLogo from './../Segments/ClientsLogo2';

class Home3 extends React.Component {
    render() {
        return (
            <div>
                <Header2 />
                <Slider3 />
                <About />
                <LatestProjects />
                <WhoWeAre />
                <div className="page-content">

                <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44229283.js"></script>

                        {/* SECTION CONTENTG START */}
                        <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36">Contact Us </h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="wt-box">
                                    <form className="contact-form cons-contact-form" method="post" id="contact-form">
                                        <div className="contact-one p-a40 p-r150">
                                            <div className="form-group">
                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="email" className="form-control" required placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} />
                                            </div>
                                            <button name="submit" type="submit" value="Submit" className="site-button black radius-no text-uppercase">
                                                <span className="font-12 letter-spacing-5">Submit</span>
                                            </button>
                                            <div className="contact-info bg-black text-white p-a30">
                                                <div className="wt-icon-box-wraper left p-b30">
                                                    <div className="icon-sm"><i className="iconmoon-smartphone-1" /></div>
                                                    <div className="icon-content text-white ">
                                                        <h5 className="m-t0 text-uppercase">Phone number</h5>
                                                        <p>(781) 539 9700</p>
                                                    </div>
                                                </div>
                                                <div className="wt-icon-box-wraper left p-b30">
                                                    <div className="icon-sm"><i className="iconmoon-email" /></div>
                                                    <div className="icon-content text-white">
                                                        <h5 className="m-t0  text-uppercase">Email address</h5>
                                                        <p>info@wjpaintingnow.com</p>
                                                    </div>
                                                </div>
                                                <div className="wt-icon-box-wraper left">
                                                    <div className="icon-sm"><i className="iconmoon-travel" /></div>
                                                    <div className="icon-content text-white">
                                                        <h5 className="m-t0  text-uppercase">Address info</h5>
                                                        <p> Massachusetts, USA</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <Statistics />
                <Testimonials />
                <ClientsLogo />
                <Footer />
            </div>
        );
    };
};


export default Home3;