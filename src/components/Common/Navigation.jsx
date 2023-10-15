import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };

    render() {
        return (
            <>
                    <ul className=" nav navbar-nav">
                        <li className="active">
                            <NavLink to={"/"}>Home</NavLink>
                            <ul className="sub-menu v-sub-menu">
                               
                            </ul>
                        </li>
                        <li>
                            <NavLink to={"#"}>About</NavLink>
                             {/* <ul className="sub-menu v-sub-menu">
                                <li>
                                    <NavLink to={"/aboutus"}>About us</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contactus"}>Contact us</NavLink>
                                </li>
                            </ul>*/}
                        </li>
                        <li>
                            <NavLink to={"#"}>News</NavLink>
                            {/*<ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/news-grid"}>Grid</NavLink></li>
                                <li><NavLink to={"/news-listing"}>Listing</NavLink></li>
                                <li><NavLink to={"/news-masonary"}>Masonry</NavLink></li>
                            </ul>*/}
                        </li>
                        <li>
                            <NavLink to={"#"}>Works</NavLink>
                            {/*<ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/work-grid"}>Grid</NavLink></li>
                                <li><NavLink to={"/work-masonary"}>Masonry</NavLink></li>
                                <li><NavLink to={"/work-carousel"}>Carousel</NavLink></li>
                                <li><NavLink to={"/project-detail"}>Project Detail</NavLink></li>
                            </ul>*/}
                        </li>
                        <li>
                            <NavLink to={"#"}>Post detail</NavLink>
                            {/*<ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/post-image"}>Image</NavLink></li>
                                <li><NavLink to={"/post-gallery"}>Gallery</NavLink></li>
                                <li><NavLink to={"/post-video"}>Video</NavLink></li>
                                <li><NavLink to={"/post-right-sidebar"}>Right Sidebar</NavLink></li>
                            </ul>*/}
                        </li>
                        <li className="submenu-direction">
                            <NavLink to={"#"}>Contact</NavLink>
                            {/*<ul className="sub-menu">
                                <li><NavLink to={"/accordian"}>All Elements</NavLink></li>
                            </ul>*/}
                        </li>
                    </ul>
            </>
        );
    };
};

export default Navigation;