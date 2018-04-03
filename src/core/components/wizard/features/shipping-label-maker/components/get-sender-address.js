/**
 * @prettier
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SenderAddress=props => {
  const handleSubmit=(e)=> {
    e.preventDefault();
    
    let formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
  }
  return ( 
    <div>
    <form onSubmit={this.handleFormSubmit}>
      <TextField 
        type='text'
        name='name'
        floatingLabelText='Name'
        errorText='Name is Required'
        onChange={this._onChange}
        /><br/>
        <TextField 
        floatingLabelText='Steert'
        name='street'
        errorText='Steert Address is Required'
        onChange={this._onChange}
        /><br/>
        <TextField 
        floatingLabelText='City'
        name='city'
        errorText='City Name is Required'
        onChange={this._onChange}
        /><br/>
        <TextField 
        floatingLabelText='State'
        name='state'
       onChange={this._onChange}
        errorText='State Name is Required'/> <br/>
        <TextField  
        floatingLabelText='Zip'
        name='zip'
        onChange={this._onChange}
        errorText='Valid Zip Code is Required'
        /> <br/>
    </form>
    </div>
  )
}
export default SenderAddress