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
import emailjs from '@emailjs/browser';

class Home3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
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
                                <h1 className="text-uppercase font-36">Are you looking for a Painting Service? </h1>
                                <h4 className="text-uppercase font-36">Contact us today and get a quote on your project  </h4>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="wt-box">
                                    <form className="contact-form cons-contact-form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                                        <div className="contact-one p-a40 p-r150">
                                            <div className="form-group">
                                                <input name="name" type="text" required className="form-control" placeholder="Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="email" className="form-control" required placeholder="Email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                            </div>
                                            <button name="submit" type="submit" value="Submit" className="site-button black radius-no text-uppercase">
                                                <span className="font-12 letter-spacing-5">Submit</span>
                                            </button>
                                            <div className="contact-info bg-black text-white p-a30">
                                                <div className="wt-icon-box-wraper left p-b30">
                                                    <div className="icon-sm"><i className="iconmoon-smartphone-1" /></div>
                                                    <div className="icon-content text-white ">
                                                        <h5 className="m-t0 text-uppercase">Phone number</h5>
                                                        <p>(781) 535-9525</p>
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
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
      handleSubmit(event) {
        event.preventDefault();
        var name = this.state.name;
        var email = this.state.email;
        var message = this.state.message;

        (function(){
            
            emailjs.init("ErtuG5RWbvTQ40Que");
            var templateParams = {
                name:name,
                email: email,
                message:message
            };
             
            emailjs.send('service_qe755bo', 'template_lm32i4z', templateParams)
                .then(function(response) {
                   alert('SUCCESS! We`ve Received your email');
                }, function(error) {
                   alert('FAILED...', error);
                });
         })();
         
        
      }
};


export default Home3;
