import React from 'react';
import {green50, grey900} from 'material-ui/styles/colors';

const getTotal=(weight,shippingOption)=>{
	const ShippingOption={
		ground:1,
		priority:2
	}
	const shippingRate = 0.40; 
	return weight * shippingRate *
(shippingOption === ShippingOption.ground ? 1 : 1.5);
}

const divStyle={
      height: 200,
      width: 300,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      color:grey900,
      backgroundColor:green50,
      padding:20
    };
const ConfirmationPage= (props) =>(
	<div style={divStyle} >
		{
			getTotal(props.weight,props.shippingOption)
		}
	</div>
) 

export default ConfirmationPage