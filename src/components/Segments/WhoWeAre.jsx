import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/projects/pic-4.jpg'),
        title: 'Cabinet Painting',
        description: 'We are committed to ensuring that your cabinet is renovated to the highest quality, maintaining the original aesthetic or adapting it to suit your personal taste and decorating style. ',
    },
    {
        image: require('./../../images/projects/pic-2.jpg'),
        title: 'Interior Painting',
        description: 'Add personality and style to your interior spaces with our interior painting services.',
    },
    {
        image: require('./../../images/projects/pic-3.jpg'),
        title: 'Exterior Painting',
        description: 'Transform the look of your home and enhance its aesthetic appeal with our exterior painting services. We provide a fresh vibrant look.',
    },
    
]

var img1 = require('./../../images/slider-corner.jpg');
var bgimg = require('./../../images/background/ptn-1.png');

class WhoWeAre extends React.Component {
  
    render() {
        const options = {
            loop:true,
            autoplay:true,
            margin:0,
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
                767:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        };
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-whoweare-wrap"  style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-5 col-sm-12">
                                        <div className="wt-left-part">
                                            <div className="text-uppercase text-black">
                                                <span className="font-30 font-weight-300">Wo we are </span>
                                                <h2 className="font-40">
                                                WJ Services is a notable example of reliability in the furniture painting and renovation sector.
                                                </h2>
                                                <p> With years of experience and a consistent track record of successful projects, WJ Services has earned a solid reputation as a trusted company for those looking to transform their furniture into true works of art.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-12">
                                        <div className="m-carousel-2">
                                        <OwlCarousel className="owl-carousel carousel-hover home-carousel-2 owl-btn-vertical-center" {...options}>
                                                {projects.map((item, index) => (
                                                    <div className="item" key={index}>
                                                    <div className="wt-box">
                                                        <div className="ow-img wt-carousel-block gradi-black">
                                                            <img src={item.image.default} alt=""/>
                                                            <div className="p-a50 wt-carousel-info text-white">
                                                                <div className="carousel-line">
                                                                    <h2 className="font-28 font-weight-400 m-b10">{item.title}</h2>
                                                                    <p className="m-b0">{item.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                ))}
                                            
                                            </OwlCarousel>
                                            
                                            <div className="carousel-bg-img">
                                                <img src={img1.default} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="hilite-title p-lr20 m-tb20 text-left text-uppercase bdr-gray bdr-left">
                                    <strong>300+ Projects</strong>
                                    <span className="text-black">Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default WhoWeAre;