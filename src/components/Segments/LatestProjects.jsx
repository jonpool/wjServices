import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const filters = [
    { label: "Exterior", filter: ".exterior-col" },
    { label: "Interior", filter: ".interior-col" },
    { label: "Commercial", filter: ".commercial-col" }
];

const projects = [
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Coastal Retreat',
        description: 'For a project that adds bright and lively colors to transform your home into a welcoming paradise.',
        filter: 'exterior-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Interior Painting',
        description: 'Perfect for a sophisticated and timeless paint job that emphasizes neutral and classic tones.',
        filter: 'commercial-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Elegant Neutrals',
        description: ' Use this label for a contemporary and minimalist approach to your house painting, emphasizing clean lines and simple colors.',
        filter: 'interior-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: '"Rustic Charm"',
        description: 'For a project that breathes new life into your home by reviving vintage colors and design elements.',
        filter: 'exterior-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Colorful Personality',
        description: ' If your project is all about expressing your unique personality with a vibrant mix of colors, this label works well.',
        filter: 'interior-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic7.jpg'),
        title: 'Modern Minimalism',
        description: 'Use this label for a contemporary and minimalist approach to your house painting, emphasizing clean lines and simple colors.',
        filter: 'exterior-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic6.jpg'),
        title: 'Urban Chic',
        description: 'Ideal for a project that brings a touch of city style and sophistication to your house with trendy and chic color choices.',
        filter: 'interior-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic8.jpg'),
        title: 'Serenity Haven',
        description: 'For a peaceful and calming house painting project that promotes a sense of tranquility and relaxation.',
        filter: 'interior-col'
    }
]

class LatestProjects extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
        const options = {
            loop:false,
            autoplay:true,
            margin:20,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                580:{
                    items:2
                },						
                767:{
                    items:2
                },
                991:{
                    items:3
                },			
                1152:{
                    items:4
                },
                1360:{
                    items:4
                },
                1366:{
                    items:5
                }	
                }
        };
        return (
            <>
                <div className="section-full p-t90 p-lr80 latest_project-outer square_shape3">
                        {/* TITLE START */}
                        <div className="section-head text-left">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 ">
                                    <h2 className="text-uppercase font-36">Latest Project</h2>
                                    <div className="wt-separator-outer">
                                        <div className="wt-separator bg-black" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <ul className="btn-filter-wrap">
                                        <li className="btn-filter btn-active" data-filter="*">All Project</li>
                                        {filters.map((item, index) => (
                                            <li key={index} className="btn-filter" data-filter={item.filter}>{item.label}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <OwlCarousel className="owl-carousel owl-carousel-filter  owl-btn-bottom-left" {...options}>
                                        {projects.map((item, index) => (
                                            <div key={index} className={`${item.filter} item fadingcol`}>
                                                <div className="wt-img-effect ">
                                                    <img src={item.image.default} alt="" />
                                                    <div className="overlay-bx-2 ">
                                                        <div className="line-amiation">
                                                            <div className="text-white  font-weight-300 p-a40">
                                                                <h2><NavLink to={"/project-detail"} className="text-white font-20 letter-spacing-1 text-uppercase">{item.title}</NavLink></h2>
                                                                <p>{item.description}</p>
                                                                <NavLink to={"#"} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                        </div>
                        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                            <strong>Awesome</strong>
                            <span className="text-black">Designs</span>
                        </div>
                    </div>
            </>
        );
    }
};

export default LatestProjects;