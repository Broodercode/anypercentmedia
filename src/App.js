
import './App.scss';
import Container from 'react-bootstrap/Container';
import Embed from './Embed'
import Embed02 from './Embed02'
import Embed03 from './Embed03'
import Embed04 from './Embed04'

import logo from './assets/Logo.png'
function App() {
  return (
<div className="main">


{/* <Container fluid> */}
  <div className="container-fluid">
    <div className="row">
    <div className="mx-auto">


    
        <img className="img-fluid" src={logo} alt="logo"></img>
    

    </div>
    </div>
    
<div className="row">
  <div className="col">
  <h1 className="events">Any% Media Streamers</h1>
  <h2 className="events">(🔴) Bdewd and BroodVX</h2>
  </div>
 
</div>
<div className="viddisplay">
  <Embed/>
  <Embed02/>
</div>
<div className="chatdisplay">
<iframe id="twitch-chat-embed-01"
        src="https://www.twitch.tv/embed/bdewd/chat?darkpopout&parent=anypercentmedia.com&parent=www.anypercentmedia.com"
        height="400"
        width="50%">
</iframe>
<iframe id="twitch-chat-embed-02"
        src="https://www.twitch.tv/embed/broodvx/chat?darkpopout&parent=anypercentmedia.com&parent=www.anypercentmedia.com"
        height="400"
        width="50%">
</iframe>
</div>
{/* <div className="row ">
  <div className="col mx-0">
    <div className="cc">
    <Embed/>
    </div>
  
  </div>
  <div className="col mx-0">
    <div className="cc">
    <Embed02/>
    </div>
  
  </div>
</div> */}
{/* <div className="row ">
  <div className="col mx-0">
    <div className="cc">
    <Embed03/>
    </div>
 
  </div>
  <div className="col mx-0">
    <div className="cc">
    <Embed04/>
    </div>
 
  </div>
</div> */}
{/* <div className="embeds">
<div className="embed--01">
<Embed></Embed>
</div>
<div className="embed--02">
<Embed02></Embed02>
</div>
</div> */}
{/* <div className="embeds--02">
<div className="embed--03">
<Embed03></Embed03>
</div>
<div className="embed--04">
<Embed04></Embed04>
</div>
</div> */}

 
   
  </div>


  
{/* </Container> */}

</div>
  );
}

export default App;
