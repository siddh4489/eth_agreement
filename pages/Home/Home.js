import React, { Component } from "react";
import {connect} from 'react-redux';

class Home extends Component {
  render(){
    return(
       <div>Home</div> 
    );  
  }

}


//const connectedApp = connect(state => state)(Home);
//export { connectedApp as Home };
export default Home;

