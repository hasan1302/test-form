import React from 'react';

export const SERVICES = [
    "Наращивание ресниц",
    "Чистка лица",
    "Пилинг",
    "Пилинг продвинутый",
    "Отбеливание очков"
]//.map((element, i) => {
//    this.push(<option key={i} value={element}> {element.name} </option>);
//});

export function showServices(obj){
    const services = [];
    obj.map((element, i) => {
        return services.push(<option key={i} value={element}> {element} </option>);
    });
    return services;
}