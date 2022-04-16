import React from 'react'
import './firstPage.css'





function Firstpage() {
    return (
        <div className="container-fluid">
          <div className='myImg'>
            <div className='containerBtn'>
              <div className='containerBtn2 row'>
                <div className='two col-6'>
                  <button className='btn btn-outline-primary '>Student Login</button>
                  <button className='btn btn-primary '>Admin Login</button>
                </div>
               
                  <div className='regText'>
              <p id='myTxt'>New User?</p>
              <p id='regTxt'><a href="#">Register Now</a></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Firstpage