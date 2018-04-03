/**
 * @prettier
 */
import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { grey900 } from 'material-ui/styles/colors';

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16,
    color:grey900
  }
};
const ShippingOptions=(props)=>(
    <div>
    <RadioButtonGroup  
    onChange={this._onChange} 
    name="shippingOptions" 
    labelPosition="left"
    style={styles.block} defaultSelected="Ground">
    <RadioButton
        value="1"
        label="Ground"
        labelPosition="left"
        style={styles.radioButton}/>
    <RadioButton
        value="2"
        label="Selected by default"
        style={styles.radioButton}
    /> 
    </RadioButtonGroup>
    </div>
)
export default  ShippingOptions

