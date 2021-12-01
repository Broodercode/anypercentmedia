
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


<Container fluid>
  <div className="container">
    <div className="box">
    <a href="mailto: business@anypercentmedia.com">

    
        <img className="img-fluid" src={logo} alt="logo"></img>
        </a>

    </div>
<div className="embeds">
<div className="embed--01">
<Embed></Embed>
</div>
<div className="embed--02">
<Embed02></Embed02>
</div>
</div>
<div className="embeds--02">
<div className="embed--03">
<Embed03></Embed03>
</div>
<div className="embed--04">
<Embed04></Embed04>
</div>
</div>

 
   
  </div>


  
</Container>

</div>
  );
}

export default App;
