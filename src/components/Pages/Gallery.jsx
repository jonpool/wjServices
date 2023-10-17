import React from 'react';
import Header2 from '../Common/Header';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import TeamMembers2 from './../Segments/TeamMembers2';
import Services from './../Segments/Services';
import Story from './../Segments/Story';

var bnrimg = require('./../../images/banner/3.jpg');

class Gallery extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">

                    <iframe src="https://embedsocial.com/api/pro_hashtag/cb2e5e9f361201c3c1c0812dd6d08f5e1bb1a413" width="1000px" height="1200px" frameborder="0" marginheight="0" marginwidth="0" align="center"></iframe>
                    <TeamMembers2 />
                    <Services />
                    <Story />
                </div>

                <Footer />
            </>
        );
    };
};

export default Gallery;