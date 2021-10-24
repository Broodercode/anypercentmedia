
import './App.scss';
import Container from 'react-bootstrap/Container';
// import Embed from './Embed'
// import Embed02 from './Embed02'
import Menu from './Menu/Menu'

// import logo from './assets/Logo.png'
function App() {
  return (
<div className="main">


<Container fluid>
  <div className="container">
    {/* <div className="box">
    <a href="mailto: business@anypercentmedia.com">

    
        <img className="img-fluid" src={logo} alt="logo"></img>
        </a>

    </div> */}

    {/* <Embed></Embed>
    <Embed02></Embed02> */}
    <Menu></Menu>
  </div>


  
</Container>

</div>
  );
}

export default App;
