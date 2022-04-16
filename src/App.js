import React from "react";
import {Container} from "react-bootstrap";
import "./App.css";
import Firstpage from "./Firstpage";
import Header from './Header';
import Footer from './Footer';


function App() {
  return (

    <div className="App">
    
       <Header />
        
           <Firstpage />
        
        <Footer />

      

    </div>

  );
}
export default App


