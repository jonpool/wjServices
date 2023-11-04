import React from 'react';
import Header2 from '../Common/Header';
import Footer from '../Common/Footer3';
import Banner from './../Segments/Banner';

const myComponentStyle = {
    width:'1200px',
    margin:'auto',
    background:'lightgray',
    paddingTop:'25px', 
 }
 
 var bnrimg = require('./../../images/banner/5.jpg');

class Gallery extends React.Component {
    
    render() {
        return (
            
            <>
                <Header2 />
                <Banner title="Gallery" pagename="Gallery" bgimage={bnrimg.default}/>
                <div>
                <div style={myComponentStyle}>

                    <iframe src="https://embedsocial.com/api/pro_hashtag/cb2e5e9f361201c3c1c0812dd6d08f5e1bb1a413" title="gallery" width="1200px" height="2000px" frameborder="0" marginheight="0" marginwidth="0" align="center" ></iframe>
                    
                </div>
                </div>
                <Footer />
            </>
        );
    };
};

export default Gallery;