import React, { useState } from 'react';
import "./Stationen.scss";

const Stationen = ({ station, onClick, index, isActive }) => { // Index und isActive als Props hinzufügen
    const isLeft = index % 2 === 0; // Direkt den Index verwenden

    const handleClick = () => {
        onClick(station); 
    };

    return (
        <div className={`station ${isLeft ? 'left' : 'right'} ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <h2>{station.title}</h2> 
            <ul>
                {station.items.map((item, index) => (
                    <li key={index}>{item}</li> 
                ))}
            </ul>
        </div>
    );
}

export default Stationen;