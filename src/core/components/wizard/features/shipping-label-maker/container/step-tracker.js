import React,{Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';

import RegistrationFields from '../components/registration-form';
import SenderAddress from '../components/get-sender-address';
import RecieverAddress from '../components/get-reciever-address'
import GetWeight from '../components/get-weight';
import ShippingOptions from '../components/get-shipping-option';
import ConfirmationPage from '../components/confirmation-page';

const buttonStyle={
  margin:30,
}
class StepTracker extends Component {
  constructor(props){
    super(props);
    this.state={
      stepIndex:1,
      finished:0,
      registrationValues:{},
      shippingInfo:{
          from:{},
          to:{},
          weight:0,
          shippingOption:0
        }
    }
    this.handleNext=this.handleNext.bind(this);
    this.handlePrev=this.handlePrev.bind(this);
    this._onChange = this._onChange.bind(this);
  };
  handleNext(){
    const {stepIndex} = this.state;
    console.log(stepIndex)
    if(stepIndex<6){
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 6
      })
    }
    return this.getStepComponent(this.state.stepIndex).eElement;
  }
  handlePrev(){
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
    return this.getStepComponent(this.state.stepIndex).eElement
  }
  _onChange(evt,selected) {
    evt.preventDefault();
    let addressModal: {
      };
    const target = evt.target;
    let value=''
    if(target.type === 'radio'){
        value = this._radio.getSelectedValue()
      }else 
      value=target.value;
    const name = target.name;
    addressModal[name]=target.value;

  }
  handleFormSubmit(evt){
    evt.preventDefault();
    let formData: {
      };
    const target = evt.target.elements;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    for(const elemName in target){
        formData[name]= target[name].value;
    }
    switch(this.state.step){
      case 1:{
        const currentRegistrationValues=Object.assign({},this.state.registrationValues)
        const newValues=Object.assign({},formData)
        this.setState({
          registrationValues:newValues
        })
      } break;
      case 2:{
        const senderAddress=Object.assign({},this.state.from)
        const newValues=Object.assign({},formData)
        this.setState({
          from:newValues
        })
      } break;
      case 3:{
        const recieverAddress=Object.assign({},this.state.to)
        const newValues=Object.assign({},formData)
        this.setState({
          to:newValues
        })
      } break;
      case 4:
        this.setState({
          weight:formData.weight
        })
      break;
      case 5:
      this.setState({
        weight:formData['weight']
      })
      break;
      case 6:
      const value = this._radio.getSelectedValue();
      this.setState({
        shippingOption:value
      })
    }
      
  }
  getStepComponent(index){
    switch(index) {
          case 1:
            return {
              eElement:(<RegistrationFields {...this.state}/>),
              title:'Registration Form' 
            };
          case 2:
            return {
              eElement:(<SenderAddress {...this.state} />),
              title:'Sender\'s Address'}
          case 3:
            return {
              eElement:(<RecieverAddress {...this.state} />),
              title:'Reciever\'s Address'
            };
          case 4:
            return {
              eElement:(<GetWeight {...this.state}/>),
              title:'Get Weight'
            };
          case 5:
            return {
              eElement:(<ShippingOptions {...this.state}/>),
              title:'Shipping Options'
            } 
          case 6:
            return {
              eElement:(<ConfirmationPage {...this.state} />),
              title: 'Confirmation Page'
            }
        }
  }
  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', height:500};
  return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Stepper activeStep={stepIndex-1}>
          <Step>
            <StepLabel>Registration Form</StepLabel>
          </Step>
          <Step>
            <StepLabel>Sender Address</StepLabel>
          </Step>
          <Step>
            <StepLabel>Reciever Address</StepLabel>
          </Step>
          <Step>
            <StepLabel>Get Weight</StepLabel>
          </Step>
          <Step>
            <StepLabel>Shipping Options</StepLabel>
          </Step>
          <Step>
            <StepLabel> Confirmation Page</StepLabel>
          </Step>
        </Stepper>
        <div>
          <div style={contentStyle}>
            {this.getStepComponent(stepIndex).eElement}
            </div> 
            {(this.state.stepIndex===1)
              ? <div>
                <RaisedButton 
                  style={buttonStyle} 
                  primary={true} 
                  onClick={this.handleSave} 
                  label='Save and Continue' />
                  <RaisedButton 
                  style={buttonStyle} 
                  secondary={true} 
                  onClick={this.handleNext} 
                  label='Next'/>
              </div>
            : <div>
                <RaisedButton
                  style={buttonStyle} 
                  secondary={true} 
                  onClick={this.handlePrev} 
                  label='Previous' />
                  <RaisedButton 
                  style={buttonStyle} 
                  primary={true} 
                  onClick={this.handleSave} 
                  label='Save and Continue' />
                  <RaisedButton 
                  style={buttonStyle} 
                  secondary={true} 
                  onClick={this.handleNext} 
                  label='Next'/>
                </div>
                }
          </div>
        </div>
    );
  }
}
export default StepTracker;