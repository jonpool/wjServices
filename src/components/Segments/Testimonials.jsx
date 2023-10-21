import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const members = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        fullname: 'Taylor Roberts',
        position: 'Exceptional Craftsmanship!"',
        description: 'I cant say enough about the incredible job this painting company did on my house. They transformed the interior and exterior, and the attention to detail was truly exceptional. From start to finish, it was a smooth and professional experience.',
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        fullname: 'Robert willson',
        position: 'A Work of Art!',
        description: 'The team at [Company Name] turned my house into a work of art. Their paintwork is so precise and beautiful. Im thrilled with the results, both inside and outside. Thank you for making my dream home a reality!',
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        fullname: 'Taylor Roberts',
        position: '"Professionalism Beyond Expectations"',
        description: 'Im blown away by the professionalism of [Company Name]. From the initial consultation to the final brushstroke, they exceeded all my expectations. The house looks stunning, and I couldnt be happier.',
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        fullname: 'Robert willson',
        position: '"Total Transformation!"',
        description: 'My house has undergone a total transformation, thanks to the amazing team at [Company Name]. They completely understood my vision and brought it to life. The colors, the finishes, everything is perfect.',
    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        fullname: 'Taylor Roberts',
        position: '"Attention to Detail Like No Other"',
        description: 'The level of attention to detail that [Company Name] provided is truly remarkable. From preparing the surfaces to the final touch-ups, they left no stone unturned. My house looks flawless!',
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
        description: 'typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.',
    }
]

var bgimg = require('./../../images/background/ptn-1.png');

class Testimonials extends React.Component {

    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 80,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-testimonial-wrap" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head text-left">
                                <h2 className="text-uppercase font-36">Testimonials</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <OwlCarousel className="owl-carousel testimonial-home" {...options}>
                                    {members.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="testimonial-6">
                                                <div className="testimonial-text clearfix bg-white">
                                                    <div className="testimonial-detail clearfix">
                                                        <strong className="testimonial-name">{item.fullname}</strong>
                                                        <span className="testimonial-position p-t0">{item.position}</span>
                                                    </div>
                                                    <div className="testimonial-paragraph text-black p-t15">
                                                        <span className="fa fa-quote-left" />
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </OwlCarousel>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                            <strong>Client</strong>
                            <span className="text-black">Says</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials;