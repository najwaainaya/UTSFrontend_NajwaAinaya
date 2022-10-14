// export default function App() {
//   return (
//     <div>
//       <h1>Route pada react</h1>
//       </div>
//   );
// }



//import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'react-bootstrap';
//import Komponen1 from './components/Komponen1';
//import ClassKomponen from './components/ClassKomponen';
import { Outlet, Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import './flex.css';
import Flex from './components/Flex';
import Card from './components/Card';
// import './card.css';


function App() {
  return (
    <div ClassName="App">
      <Navbar />
      <Header/>
      {/* <Flex/> */}
      <div className="container mt-4">
        <Content/>
      </div>
      {/* <div class="right-container">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Flex/> */}
       <br/>  
       <Footer />
       <Outlet />
     </div>
   );
 }
 
export default App;