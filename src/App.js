import React from 'react';
import Components from './components/Components';
import Facebook from "./tracking/Facebook";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-4M18S05XNT"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


const App = () => {
  
  return (
    <div className="App">
      <Facebook />
      <Components />  
   </div>
  );
}

export default App;
