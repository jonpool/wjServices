import React from 'react';
import Header2 from '../Common/Header';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import Services from './../Segments/Services';
import Story from './../Segments/Story';

var bnrimg = require('./../../images/banner/3.jpg');

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <Banner title="About US" pagename="About Us" bgimage={bnrimg.default}/>
                <div className="page-content">
                <About2 />
                <Services />
                <Story />
                </div>

                <Footer />
            </>
        );
    };
};

export default AboutUs;