/**
 * @prettier
 */

import React, { Component } from 'react';   
import './index.css'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import StepTracker from './core/components/wizard/features/shipping-label-maker/container/step-tracker';
const styles = {
  title: {
    cursor: 'pointer',
  },
};
class App extends Component {  
  constructor(){
    super();
    this.state={
    }
  }
 
  render() {
    return ( 
    <MuiThemeProvider>
    <div style={{width: '100%', margin: 'auto', textAlign:'center'}}>
    <AppBar
    title={<span style={styles.title}>Shipping Label Maker</span>}
    />
  <StepTracker/>
  </div>
      </MuiThemeProvider>);
  }
}


export default App;  
