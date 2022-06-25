/* eslint-disable */
import React, {Component} from 'react';
import './bootstrap.min.css'
import './centerdiv.css'


function App() {
  return (
    <div className="App">
      
      <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
                <img src={require("./images/big-diamond.png")} alt="" />
                <div>
                    <h2>Cryft Cards</h2>
                </div>
                <div>
                    <h3>Welcome to the Moon</h3>
                </div>
                <div>
                    <Button onClick={() => authenticate() }>Authenticate</Button>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
