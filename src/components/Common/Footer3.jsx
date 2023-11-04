import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer3 extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/logo-dark.png').default };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    render() {

        return (
            <>
                <footer className="site-footer footer-large footer-light footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                        <NavLink to={"/"}><img src={require("./../../images/logo-dark.png").default} alt="" width={230} height={67} /></NavLink>
                                            
                                        </div>
                                        <p>Our team is made up of skilled painters who aro also specialized in furniture restoration. We only use top-of-the-line materials and inks to ensure long-lasting results and a flawless finish on every project.
                                        </p>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry">
                                        <h4 className="widget-title  text-uppercase">Info</h4>
                                        <div className="section-content">
                                            <div className="widget-post-bx">
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={require("./../../images/blog/recent-blog/pic1.png").default} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                            <h6 className="post-title"><NavLink to={"#"}>+1 (781)5359525</NavLink></h6>
                                                        </div>
                                                        <div className="wt-post-meta">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={require("./../../images/blog/recent-blog/pic2.png").default} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                        <h6 className="post-title"><NavLink to={"#"}>Info@wjpaintingnow.com </NavLink></h6>
                                                        </div>
                                                        <div className="wt-post-meta">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul>
                                            <li><NavLink to={"#"}>About</NavLink></li>
                                            <li><NavLink to={"#"}>Gallery</NavLink></li>
                                            <li><NavLink to={"#"}>News</NavLink></li>
                                            <li><NavLink to={"#"}>Work</NavLink></li>
                                            <li><NavLink to={"#"}>Project</NavLink></li>
                                            <li><NavLink to={"#"}>Contact us</NavLink></li>
                                            <li><NavLink to={"#"}>Site Map</NavLink></li>
                                            <li><NavLink to={"#"}>Career</NavLink></li>
                                            <li><NavLink to={"#"}>Help </NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="wt-footer-bot-left">
                                    <span className="copyrights-text">© 2022 Your Company. Designed By WJ Service.</span>
                                </div>
                                <div className="wt-footer-bot-right">
                                    <ul className="copyrights-nav pull-right">
                                        <li><NavLink to={"#"}>Terms  &amp; Condition</NavLink></li>
                                        <li><NavLink to={"#"}>Privacy Policy</NavLink></li>
                                        <li><NavLink to={"#"}>Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </>
        );
    };
};

export default Footer3;