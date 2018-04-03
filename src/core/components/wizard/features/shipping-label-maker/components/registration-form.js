/**
 * @prettier
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {blue900, orange500} from 'material-ui/styles/colors';
const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: blue900,
  },
  floatingLabelStyle: {
    color: blue900,
  },
  floatingLabelFocusStyle: {
    color: blue900,
  },
  btnStyle:{
    margin: 12,
  }
};

const RegistrationFields=(props)=>(
    <div>
      <form onSubmit={this.handleLogin}>
          <TextField 
          hintText="Enter Name"
          hintStyle={styles.errorStyle}
          errorText="Name is required"
          errorStyle={styles.errorStyle}
          floatingLabelText="Name"
          onChange={this._onChange}
          defaultValue=''
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          /> <br/>
        <TextField 
          type='password'
          hintText="Enter Password"
          hintStyle={styles.errorStyle}
          errorText="Password is required"
          defaultValue=''
          onChange={this._onChange}
          errorStyle={styles.errorStyle}
          floatingLabelText="Password"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /> <br/>
        <TextField 
          type='email'
          hintText="Enter Email"
          hintStyle={styles.errorStyle}
          errorStyle={styles.errorStyle}
          onChange={this._onChange}
          defaultValue=''
          errorText="Email is required"
          floatingLabelText="Email"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br/>
      </form>
    </div>
    )
export default RegistrationFields;