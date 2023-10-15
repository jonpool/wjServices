import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/plugins/revolution/revolution-addons/typewriter/css/typewriter.css';
import '../../assets/plugins/revolution/revolution-addons/reveal/css/revolution.addon.revealer.css';
import '../../assets/plugins/revolution/revolution-addons/reveal/css/revolution.addon.revealer.preloaders.css';

class Slider4 extends React.Component {

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
      
        loadScript('./assets/js/rev-script-1.js');
        
    };


    render() {


        return (
            <>
               <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: '#eeeeee', padding: 0 }}>
                        <div id="welcome" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                            <ul>
                                {/* SLIDE 1 */}
                                <li data-index="rs-901" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" 
                                data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider1/slide1.jpg').default} data-rotate={0} data-fstransition="fade" 
                                data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 
                                data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide1.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide1.jpg').default} 
                                    data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper  " id="slide-901-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                    data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height="['400','400','400','550']" data-whitespace="nowrap" data-type="shape" 
                                    data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:100,&quot;to&quot;
                                    :&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:0,&quot;to&quot;:&quot;opacity:0;
                                    &quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" 
                                    data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, textTransform: 'left', backgroundColor: '#e74c3c', borderColor: 
                                    'rgba(0, 0, 0, 0)',
                                     borderWidth: 0, background: 'linear-gradient(to top,  rgba(0,0,0,0) 0%,#e74c3c 100%)', cursor: 'default' }}>
                                    </div>
                                    {/* LAYER NR. 2 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper  " id="slide-901-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                    data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="full" data-height="['400','400','400','550']" data-whitespace="nowrap"
                                     data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1500,
                                     &quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;
                                     :&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" 
                                     data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, textTransform: 'left', backgroundColor: '#e74c3c', borderColor: 'rgba(0, 0, 0, 0)',
                                      borderWidth: 0, background: 'linear-gradient(to bottom,  rgba(0,0,0,0) 0%,#e74c3c 100%)', cursor: 'default' }}>
                                    </div>
                                    {/* LAYER NR. 3 */}
                                    <div className="tp-caption BigBold-Title   tp-resizeme" id="slide-901-layer-3" data-x="['left','left','left','left']" data-hoffset="['120','120','30','30']" data-y="['bottom',
                                    'bottom','bottom','bottom']" data-voffset="['180','180','160','160']" data-fontsize="['80','60','50','30']" data-lineheight="['100','90','60','60']" 
                                    data-fontweight="['800','800','800','800']" data-width="['none','none','none','400']" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','normal']" data-type="text"
                                     data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;
                                        :&quot;x:0px;y:[100%];&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                     {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut
                                      &quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,10]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" 
                                     data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, textTransform: 'uppercase', color: '#fff' }}><span className="text-yellow">TRANSFORMING HOMES </span> HOMES </div>
                                    {/* LAYER NR. 4 */}
                                    <div className="tp-caption BigBold-SubTitle  " id="slide-901-layer-4" data-x="['left','left','left','left']" data-hoffset="['120','120','30','30']" 
                                    data-y="['bottom','bottom','bottom','bottom']" data-voffset="['100','65','60','60']" data-fontsize="['15','15','15','13']" data-lineheight="['24','24','24','20']" 
                                    data-width="['410','410','410','280']" data-height="['60','100','100','100']" data-whitespace="normal" data-type="text" data-basealign="slide" 
                                    data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;
                                    &quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1800,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;
                                    wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" 
                                    data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                     data-paddingleft="[0,0,0,0]" style={{ zIndex: 7, color: '#fff' }}>Our company takes orders to external architectural offices &amp; edited, designed and created.
                                    </div>
                                    {/* LAYER NR. 5 */}
                                    <div className="tp-caption BigBold-Button rev-btn " id="slide-901-layer-5" data-x="['left','left','left','left']" data-hoffset="['480','480','30','30']" 
                                    data-y="['bottom','bottom','bottom','bottom']" data-voffset="['100','100','30','30']" data-width="none" data-height="none" data-whitespace="nowrap" 
                                    data-type="button" data-actions="[{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;scrollbelow&quot;,&quot;offset&quot;:&quot;px&quot;,&quot;
                                        delay&quot;:&quot;&quot;}]" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[100%];
                                            z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2500,&quot;
                                            ease&quot;:&quot;Power3.easeInOut&quot;},
                                    {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},
                                    {&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;
                                    &quot;,&quot;style&quot;:&quot;c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;&quot;}]" data-textalign="['left','left','left','left']" 
                                    data-paddingtop="[15,15,15,15]" data-paddingright="[50,50,50,50]" data-paddingbottom="[15,15,15,15]" data-paddingleft="[50,50,0,0]" style={{ zIndex: 11 }}>
                              <NavLink to={"/aboutus"} className="site-button outline white">READ MORE</NavLink>
                              </div>
                                    {/* Border Part */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-8" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                    data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" 
                                    data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" 
                                    data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;
                                    &quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to
                                    &quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" 
                                    data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" 
                                    style={{ zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '0px 80px 80px 80px' }}> 
                                    </div>
                                </li>
                                {/* SLIDE 2 */}
                                <li data-index="rs-902" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" 
                                data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider1/slide2.jpg').default} data-rotate={0}
                                data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 
                                data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide2.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide2.jpg').default} 
                                    data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper  " id="slide-902-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                    data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height="['400','400','400','550']" data-whitespace="nowrap" 
                                    data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;
                                    speed&quot;:100,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;
                                    speed&quot;:0,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" 
                                    data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, textTransform: 'left', backgroundColor: '#e74c3c', 
                                    borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0, background: 'linear-gradient(to top,  rgba(0,0,0,0) 0%,#e74c3c 100%)', cursor: 'default' }}>
                                    </div>
                                    {/* LAYER NR. 2 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper  " id="slide-902-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="full" data-height="['400','400','400','550']" data-whitespace="nowrap" 
                                    data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;
                                    :1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,
                                    &quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" 
                                    data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, textTransform: 'left', backgroundColor: '#e74c3c', 
                                    borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0, background: 'linear-gradient(to bottom,  rgba(0,0,0,0) 0%,#e74c3c 100%)', cursor: 'default' }}>
                                    </div>
                                    {/* LAYER NR. 3 */}
                                    <div className="tp-caption BigBold-Title   tp-resizeme" id="slide-902-layer-3" data-x="['left','left','left','left']" data-hoffset="['120','120','30','30']" 
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['180','180','160','160']" data-fontsize="['80','60','50','30']" data-lineheight="['100','90','60','60']" 
                                        data-fontweight="['800','800','800','800']" data-width="['none','none','none','400']" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','normal']" 
                                        data-type="text" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;
                                        &quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut
                                        &quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut
                                        &quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,10]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" 
                                        data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, textTransform: 'uppercase', color: '#fff' }}><span className="text-yellow">Design to </span> Reality 
                                    </div>
                                    {/* LAYER NR. 4 */}
                                    <div className="tp-caption BigBold-SubTitle  " id="slide-902-layer-4" data-x="['left','left','left','left']" data-hoffset="['120','120','30','30']" 
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['100','65','60','60']" data-fontsize="['15','15','15','13']" data-lineheight="['24','24','24','20']" 
                                        data-width="['410','410','410','280']" data-height="['60','100','100','100']" data-whitespace="normal" data-type="text" data-basealign="slide" 
                                        data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,
                                        &quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1800,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                        {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" 
                                        data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" 
                                        style={{ zIndex: 7, color: '#fff' }}>Our company takes orders to external architectural offices &amp; edited, designed and created.
                                    </div>
                                    {/* LAYER NR. 5 */}
                                    <div className="tp-caption BigBold-Button rev-btn " id="slide-902-layer-5" data-x="['left','left','left','left']" data-hoffset="['480','480','30','30']" 
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['100','100','30','30']" data-width="none" data-height="none" data-whitespace="nowrap" 
                                        data-type="button" data-actions="[{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;scrollbelow&quot;,&quot;offset&quot;:&quot;px&quot;,&quot;
                                        delay&quot;:&quot;&quot;}]" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:
                                        &quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay
                                        &quot;:2500,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                        {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},
                                        {&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[15,15,15,15]" data-paddingright="[50,50,50,50]" data-paddingbottom="[15,15,15,15]" data-paddingleft="[50,50,0,0]" style={{ zIndex: 11 }}>
                                        <NavLink to={"/aboutus"} className="site-button outline white">READ MORE</NavLink>  
                                    </div>
                                    {/* Border Part */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-8" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" 
                                        data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" 
                                        data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to
                                        &quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;
                                        frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" 
                                        data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" 
                                        data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0)', 
                                        borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '0px 80px 80px 80px' }}> 
                                    </div>
                                </li>
                                {/* SLIDE 3 */}
                                <li data-index="rs-903" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" 
                                data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider1/slide3.jpg').default} 
                                data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 
                                data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide3.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide3.jpg').default} 
                                    data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper  " id="slide-903-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                        data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height="['400','400','400','550']" data-whitespace="nowrap" 
                                        data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;
                                        speed&quot;:100,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;
                                        speed&quot;:0,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" 
                                        data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, textTransform: 'left', 
                                        backgroundColor: 'rgba(0, 0, 0, 0.50)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0, background: 'linear-gradient(to top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.1) 100%)', 
                                        cursor: 'default' }}>
                                    </div>
                                    {/* LAYER NR. 2 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper  " id="slide-903-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="full" data-height="['400','400','400','550']" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, textTransform: 'left', backgroundColor: 'rgba(0, 0, 0, 0.50)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0, background: 'linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)', cursor: 'default' }}>
                                    </div>
                                    {/* LAYER NR. 3 */}
                                    <div className="tp-caption BigBold-Title   tp-resizeme" id="slide-903-layer-3" data-x="['left','left','left','left']" data-hoffset="['120','120','30','30']" 
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['180','180','160','160']" data-fontsize="['80','60','50','30']" data-lineheight="['100','90','60','60']"
                                        data-fontweight="['800','800','800','800']" data-width="['none','none','none','400']" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','normal']" 
                                        data-type="text" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;
                                        &quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                        {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;&quot;,&quot;ease&quot;:
                                        &quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,10]" data-paddingright="[0,0,0,0]" 
                                        data-paddingbottom="[10,10,10,10]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, textTransform: 'uppercase', color: '#fff' }}><span 
                                        className="text-yellow">Your dream</span> We design 
                                     </div>
                                    {/* LAYER NR. 4 */}
                                    <div className="tp-caption BigBold-SubTitle  " id="slide-903-layer-4" data-x="['left','left','left','left']" data-hoffset="['120','120','30','30']" 
                                    data-y="['bottom','bottom','bottom','bottom']" data-voffset="['100','65','60','60']" data-fontsize="['15','15','15','13']" data-lineheight="['24','24','24','20']" 
                                    data-width="['410','410','410','280']" data-height="['60','100','100','100']" data-whitespace="normal" data-type="text" data-basealign="slide" 
                                    data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,
                                    &quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1800,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                    {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" 
                                    data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" 
                                    style={{ zIndex: 7, color: '#fff' }}>Our company takes orders to external architectural offices &amp; edited, designed and created.
                                    </div>
                                    {/* LAYER NR. 5 */}
                                    <div className="tp-caption BigBold-Button rev-btn " id="slide-903-layer-5" data-x="['left','left','left','left']" data-hoffset="['480','480','30','30']" 
                                    data-y="['bottom','bottom','bottom','bottom']" data-voffset="['100','100','30','30']" data-width="none" data-height="none" data-whitespace="nowrap" 
                                    data-type="button" data-actions="[{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;scrollbelow&quot;,&quot;offset&quot;:&quot;px&quot;,&quot;
                                        delay&quot;:&quot;&quot;}]" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[100%];
                                            z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2500,
                                            &quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,
                                                &quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;
                                                Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);
                                                bw:1px 1px 1px 1px;&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[15,15,15,15]" data-paddingright="[50,50,50,50]" 
                                                data-paddingbottom="[15,15,15,15]" data-paddingleft="[50,50,0,0]" style={{ zIndex: 11 }}>
                              
                              <NavLink to={"/aboutus"} className="site-button outline white">READ MORE</NavLink> 
                              </div>
                                    {/* Border Part */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-903-layer-8" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                    data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" 
                                    data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" 
                                    data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;
                                    :&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;
                                    :&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" 
                                    data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, 
                                    backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '0px 80px 80px 80px' }}> </div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                        </div>
                    </div>
            </>
        );
    }
};

export default Slider4;