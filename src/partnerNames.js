import React from 'react';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';

export const DEF_PARTNERS = [
    "Юла", "Авито", "Вконтакте", "Инстаграм", "ИнстаХарам", "ДагФМ"
];

export function showPartners(obj){
    const partners = [];
    DEF_PARTNERS.map((element, i) => {
        partners.push(<option key={i} value={element}> {element} </option>);
    });
    return partners;
}



export const ChoosePartners = () =>
    
    <FormControl >
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
            <Select
                native
                value={this.state.services}
                onChange={this.handleChange('partners')}
                inputProps={{
                    id: 'age-native-simple',
                }}
            >
                <option value="" />
                {showPartners()}
                </Select>
    </FormControl>