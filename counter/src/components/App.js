import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterLable from './CounterLabel';
import { increment, decrement} from '../actions'

let App = ({countBinding, dispatch}) => {
  return(
    <div className="App">
        <header className="finace-ticker">
        </header>
        <body>
          <CounterLable value={countBinding} increment={() => dispatch(increment)} decrement={() => dispatch(decrement)} ></CounterLable>
        </body>
      </div>
  );
}



const mapStateToProps = (state) => ({
  countBinding: state.count
});

App = connect(mapStateToProps)(App)

export default App;
