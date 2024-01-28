import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Slider from './../Segments/Slider';
import About from './../Segments/About';
import LatestProjects from './../Segments/LatestProjects';
import WhoWeAre from './../Segments/WhoWeAre';
import TeamMembers from './../Segments/TeamMembers';
import Blog from './../Segments/Blog';
import Statistics from './../Segments/Statistics';
import Testimonials from './../Segments/Testimonials';
import ClientsLogo from './../Segments/ClientsLogo';
import ReactGA from 'react-ga';

ReactGA.initialize('G-4M18S05XNT');

class Home extends React.Component {
    render() {
        return (
            <>
                
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4M18S05XNT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4M18S05XNT');
</script>
                <Header />
                <div className="page-content">
                    <Slider />
                    <About />
                    <LatestProjects />
                    <WhoWeAre />
                    <TeamMembers />
                    <Blog colorclass="text-white" />
                    <Statistics />
                    <Testimonials />
                    <ClientsLogo />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;