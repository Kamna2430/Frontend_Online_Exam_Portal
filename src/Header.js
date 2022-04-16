import React from "react";
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-black pt-1 pb-1">
      {/* first logo part to add inside class name  "d-flex justify-content-between"*/}
      <div className="logo" >
        <h2 style={{ color: "white" }}>Scalar</h2>
      </div>
      {/* 2nd menu part */} 
      <div className="menu-link ">
        <ul>
        {/* <link to="/studentlogin" className=''ss="nav-link active" aria-current="page" href="#">StudentLogin</link> */}
          <li>
             <a href="#" style={{ color: "white" }}>Home</a>
          </li>
          <li>
             <a href="#" style={{ color: "white" }}>Student Login</a>
          </li>
          <li>
             <a href="#" style={{ color: "white" }}>Admin Login</a>
          </li>
          <li>
             <a href="#" style={{ color: "white" }}>About</a>
          </li>
        </ul>
      </div>
      {/* social media links */}
      <div className="social-media ">
        <ul className="socila-media-desktop">
          <li>
            <a href="https://react-icons.github.io/react-icons" target={"_blank"}><FaFacebookSquare className="facebook" style={{ color: "white" }}/></a>
          </li>
          <li>
            <a href="https://react-icons.github.io/react-icons" target={"_blank"}><FaInstagramSquare className="instagram" style={{ color: "white" }}/></a>
          </li>
          <li>
            <a href="https://react-icons.github.io/react-icons" target={"_blank"}><FaYoutubeSquare className="youtube" style={{ color: "white" }}/></a>
          </li>
        </ul> 
      </div>
</nav>

      {/* {====original header===} */}
    {/* <nav class="navbar navbar-expand-md navbar-light bg-black pt-1 pb-1">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ color: "white" }}>Scalar</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav "> 
              <li class="nav-item">
                <a class="nav-link ml-auto" href="#" style={{ color: "white" }} >Student Login</a>

              </li>
              
                  <li class="nav-item">
                      <a class="nav-link" href="#" style={{ color: "white" }}>Admin Login</a>
                  </li>
              <li class="nav-item" >
                <a class="nav-link justify-content-end" href="#" style={{ color: "white" }}  >About Us</a>
              </li>
            </ul>
           </div> */}
            {/* </nav>   */}
        
    </header>
  );
}

export default Header;
