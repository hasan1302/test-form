import React from 'react';

export const DEF_PARTNERS = [
    "Юла", "Авито", "Вконтакте", "Инстаграм", "ИнстаХарам", "ДагФМ"
];

export function showPartners(obj){
    const partners = [];
    obj.map((element, i) => {
        return partners.push(<option key={i} value={element}> {element} </option>);
    });
    return partners;
}