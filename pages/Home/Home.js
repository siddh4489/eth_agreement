import React, { Component } from "react";
import {connect} from 'react-redux';
import Header from '../../components/Header';
import actions from '../../redux/actions/counterActions';



class Home extends Component {
  //test
static getInitialProps({store}) {}

 constructor(props) {
    super(props);
 }

 incrementCounter_rt = () => {
    alert(1);
    alert(this.props.counter.mathVal);
    this.props.incrementCounter(
      {value: this.props.counter.mathVal},
      'incrementCounter'
    );
 }  
 
  render(){
    /*function incrementCounter_rt() {
      this.props.incrementCounter(
        {value: this.props.counter.mathVal},
        'incrementCounter'
      );
    }*/
    return(
          <div>
              <button onClick={this.incrementCounter_rt}>Increment</button>
              <button onClick={this.props.decrementCounter_rt}>Decrement</button>
              <button onClick={this.props.reset_rt}>Reset</button>
              <button onClick={this.props.reset_rt}>Add</button>
              <h1>{this.props.counter.mathVal}</h1>
          </div>
    );  
  }
}

const mapStateToProps = state => ({
  //counter: state.counter.mathVal
});

const mapDispatchToProps = {
  //incrementCounter_rt: incrementCounter,
  //decrementCounter_rt: decrementCounter,
 // reset_rt: reset,
};

//export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default connect(state => state, actions)(Home);
//export default Home;

